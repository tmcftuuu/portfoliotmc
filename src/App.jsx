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
    <div className="relative min-h-screen bg-[#0a1128] text-slate-100 font-sans selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      {/* Dynamic Animated Bright Aurora Atmosphere & Floating Lights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-35" />

        {/* Dynamic Radiant Aurora Glow 1 - Cyan / Azure */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/30 via-blue-600/20 to-transparent rounded-full blur-[130px] animate-orb-1" />

        {/* Dynamic Radiant Aurora Glow 2 - Violet / Magenta */}
        <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] bg-gradient-to-bl from-purple-500/30 via-fuchsia-500/20 to-transparent rounded-full blur-[140px] animate-orb-2" />

        {/* Dynamic Radiant Aurora Glow 3 - Emerald / Teal */}
        <div className="absolute top-2/3 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400/25 via-teal-500/20 to-cyan-500/15 rounded-full blur-[130px] animate-orb-3" />

        {/* Dynamic Radiant Aurora Glow 4 - Rose / Amber */}
        <div className="absolute -bottom-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-t from-pink-500/25 via-rose-500/20 to-purple-600/15 rounded-full blur-[140px] animate-orb-1" />
      </div>

      {/* Top Clean Glass Navbar */}
      <Navbar profile={data.profile} />

      {/* 8 Main Sections in Exact Required Order */}
      <main className="relative z-10 space-y-4 sm:space-y-6">
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
