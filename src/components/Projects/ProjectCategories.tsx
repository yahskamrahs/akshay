import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const categories = [
  {
    title: "Web Applications",
    projects: [
      {
        title: "Ticket Booking System",
        description: "A smart software for booking tickets online.",
        image: "/bingo.png",
        technologies: ["HTML", "CSS3", "JavaScript", "PHP"],
        githubUrl: "https://github.com/yahskamrahs",
        liveUrl: "https://booking.bingocircus.co.in/"
      },
      {
        title: "Arc Architects Portfolio",
        description: "An Interactive Portfolio for Arc Architects.",
        image: "/arctumb.jpg",
        technologies: ["Wordpress", "HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/yahskamrahs",
        liveUrl: "https://arcarchitects.co.in/"
      },
      {
        title: "Simple Math",
        description: "Web based Calculator to solve complex calculations.",
        image: "/simplemath.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "Python"],
        githubUrl: "https://github.com/yahskamrahs",
        liveUrl: "https://yahskamrahs.github.io/simplemath/"
      },
      {
        title: "TicTacToe Game",
        description: "A TicTacToe game with Unbeatable bot player",
        image: "/tictactoe.jpg",
        technologies: ["HTML", "CSS", "Javascript", "Python"],
        githubUrl: "https://github.com/yahskamrahs",
        liveUrl: "https://yahskamrahs.github.io/tictactoe/"
      }
    ]
  },
  {
    title: "Python & Machine Learning",
    projects: [
      {
        title: "Car Crash Detection",
        description: "Detects and alerts the system after accident.",
        image: "/car.jpg",
        technologies: ["Python", "OpenCV", "Pytorch","AI/ML"],
        githubUrl: "https://github.com/yahskamrahs/crash",
        liveUrl: "https://github.com/yahskamrahs/crash"
      },
      {
        title: "Gesture Detection",
        description: "Analyze and detects hand genstures",
        image: "/hand.gif",
        technologies: ["Python", "OpenCV", "Pytorch", "AI/ML"],
        githubUrl: "https://github.com/yahskamrahs/facedetection",
        liveUrl: "https://github.com/yahskamrahs/facedetection"
      },
      {
        title: "Face Detection",
        description: "Analyze and detects the Face & person",
        image: "/face.jpg",
        technologies: ["Python", "OpenCV", "Pytorch", "AI/ML"],
        githubUrl: "https://github.com/yahskamrahs/facedetection",
        liveUrl: "https://github.com/yahskamrahs/facedetection"
      },
      {
        title: "Face ID Attendance",
        description: "Detects face and tracks attendance.",
        image: "/attendance.jpg",
        technologies: ["Python", "OpenCV", "Pytorch", "AI/ML"],
        githubUrl: "https://github.com/yahskamrahs/attendance",
        liveUrl: "https://github.com/yahskamrahs/attendance"
      },
      {
        title: "Weather App",
        description: "Shows current weather with temperature and humidity",
        image: "/weather-app.jpg",
        technologies: ["Python", "Pyttsx3 module", "Json"],
        githubUrl: "https://github.com/yahskamrahs/Weather-App",
        liveUrl: "https://github.com/yahskamrahs/Weather-App"
      },
      {
        title: "Text-To-Speech",
        description: "Converts text to speech.Helful for mute person",
        image: "/Text-To-Speech.jpg",
        technologies: ["Python", "Pyttsx3 module", "PIP"],
        githubUrl: "https://github.com/yahskamrahs/Text-To-Speech",
        liveUrl: "https://github.com/yahskamrahs/Text-To-Speech"
      },
      {
        title: "PDF Merger",
        description: "Helps to merge multiple pdfs into one",
        image: "/merge-pdf.jpg",
        technologies: ["Python", "PyPDF2 module", "Merger"],
        githubUrl: "https://github.com/yahskamrahs/pdfmerger",
        liveUrl: "https://github.com/yahskamrahs/pdfmerger"
      },
      {
        title: "Image resizer",
        description: "Reduces the size of an image in multple formats",
        image: "/image-resizer.jpg",
        technologies: ["Python", "OpenCV module", "CV2"],
        githubUrl: "https://github.com/yahskamrahs/Image-Resizer",
        liveUrl: "https://imager-resizer.vercel.app/"
      },
    ]
  }
];

export const ProjectCategories = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>
       
        <div className="space-y-20">
          {categories.map((category) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-8 text-cyan-400"
              >
                {category.title}
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <ProjectCard key={projectIndex} {...project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
