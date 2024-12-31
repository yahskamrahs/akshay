import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  const cursorStyle = {
    transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${isPointer ? 1.5 : 1})`,
  };

  return (
    <>
      <div
        className="fixed w-5 h-5 pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={cursorStyle}
      >
        <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-ping opacity-50" />
        <div className="absolute inset-0 border-2 border-cyan-400 rounded-full" />
      </div>
      <div
        className="fixed w-1 h-1 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{ transform: `translate(${position.x - 2}px, ${position.y - 2}px)` }}
      />
    </>
  );
};
