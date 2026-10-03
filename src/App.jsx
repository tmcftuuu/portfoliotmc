import React, { useState } from 'react';
import initialContentData from './data/contentData.json';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import AcademicAchievementsSection from './components/AcademicAchievementsSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ExtracurricularSection from './components/ExtracurricularSection';
import LanguageSkillsSection from './components/LanguageSkillsSection';
import SkillsCompetenciesSection from './components/SkillsCompetenciesSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [data] = useState(initialContentData);

  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 font-sans selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      {/* High-Definition Cinematic Motion Video Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Looping Ambient Motion Video - Vivid & Clearly Visible */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-[1.15] saturate-[1.2] scale-105"
        >
          <source src="./assets/background-motion.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2019/10/09/27669-365224683_medium.mp4" type="video/mp4" />
        </video>

        {/* Clean Neutral Obsidian Vignette (Prevents color muddying & maximizes text legibility) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070f]/80 via-[#05070f]/50 to-[#05070f]/90" />
        <div className="absolute inset-0 bg-tech-grid opacity-20" />

        {/* Cohesive, Harmonious Tech Ambient Halos (Cyan & Indigo only - zero color clashing) */}
        <div className="absolute -top-24 -left-20 w-[650px] h-[650px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[140px] animate-orb-1" />
        <div className="absolute top-1/2 -right-20 w-[700px] h-[700px] bg-gradient-to-bl from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-[150px] animate-orb-2" />
        <div className="absolute -bottom-24 left-1/3 w-[600px] h-[600px] bg-gradient-to-t from-cyan-500/10 via-blue-600/10 to-transparent rounded-full blur-[140px] animate-orb-3" />
      </div>

      {/* Top Clean Glass Navbar */}
      <Navbar profile={data.profile} />

      {/* 8 Main Sections in Clean Professional Rhythm */}
      <main className="relative z-10 space-y-12 sm:space-y-16 lg:space-y-20 pb-20">
        {/* 1. About me */}
        <HeroSection
          profile={data.profile}
          metrics={data.metrics}
        />

        {/* 2. EDUCATION OVERVIEW */}
        <EducationSection />

        {/* 3. ACADEMIC ACHIEVEMENTS */}
        <AcademicAchievementsSection />

        {/* 4. WORK EXPERIENCE */}
        <WorkExperienceSection />

        {/* 5. EXTRACURRICULAR ACTIVITIES */}
        <ExtracurricularSection />

        {/* 6. LANGUAGE SKILLS */}
        <LanguageSkillsSection />

        {/* 7. SKILLS & COMPETENCIES */}
        <SkillsCompetenciesSection />

        {/* 8. CONTACT INFORMATION */}
        <ContactSection
          profile={data.profile}
        />
      </main>
    </div>
  );
}
