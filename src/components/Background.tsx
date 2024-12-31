import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

export const Background = () => {
  const { scrollYProgress } = useScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      'rgb(10, 15, 26)',
      'rgb(13, 18, 30)',
      'rgb(16, 21, 34)',
      'rgb(19, 24, 38)'
    ]
  );

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springScroll = useSpring(scrollYProgress, springConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      opacity: number;
    }[] = [];

    const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        hue: Math.random() * 60 + 180,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 50%, ${particle.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5 * particle.opacity * otherParticle.opacity;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsla(${particle.hue}, 100%, 50%, ${opacity})`;
            ctx.stroke();
          }
        });

        particle.hue += 0.1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 -z-20 transition-colors duration-500"
        style={{ backgroundColor }}
      />
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
      <div className="fixed inset-0 -z-10 grid-bg opacity-30" />
      
      {/* 3D Floating Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
          style={{
            top: useTransform(springScroll, [0, 1], ['0%', '100%']),
            left: useTransform(springScroll, [0, 1], ['0%', '100%']),
            scale: useTransform(springScroll, [0, 0.5, 1], [1, 1.5, 1]),
            rotate: useTransform(springScroll, [0, 1], [0, 360]),
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          style={{
            bottom: useTransform(springScroll, [0, 1], ['0%', '100%']),
            right: useTransform(springScroll, [0, 1], ['0%', '100%']),
            scale: useTransform(springScroll, [0, 0.5, 1], [1, 1.5, 1]),
            rotate: useTransform(springScroll, [0, 1], [360, 0]),
          }}
        />
      </div>
    </>
  );
};