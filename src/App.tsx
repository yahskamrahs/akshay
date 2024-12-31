import React from 'react';
import { Background } from './components/Background';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Header/Navbar';
import { HeroSection } from './components/Hero/HeroSection';
import { ProfileSection } from './components/About/ProfileSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { ProjectCategories } from './components/Projects/ProjectCategories';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Background />
      <ScrollProgress />
      <Navbar />
      
      <div className="min-h-screen text-white w-full overflow-x-hidden">
        <HeroSection />
        <ProfileSection />
        <SkillsSection />
        <ProjectCategories />
        <Footer />
      </div>
    </>
  );
}