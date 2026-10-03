import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function EducationSection() {
  const educations = [
    {
      schoolName: "Trường Đại học Ngoại Thương (FTU Hà Nội)",
      subTitle: "Sinh viên năm 3 chuyên ngành Kinh tế đối ngoại",
      time: "2023 — Hiện tại",
      location: "Hà Nội, Việt Nam",
      gpa: "GPA: 3.77 / 4.0",
      tag: "Kinh tế Đối ngoại",
      color: "border-cyan-400/40 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900/60",
      accent: "text-cyan-300",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
      bullets: [
        "Sinh viên năm 3 Kinh tế đối ngoại - Trường Đại học Ngoại Thương.",
        "GPA tích luỹ: 3.77 / 4.0."
      ]
    },
    {
      schoolName: "Trường THPT Chuyên Thái Nguyên",
      subTitle: "Cựu học sinh chuyên Anh khóa 33",
      time: "2020 — 2023",
      location: "Thái Nguyên, Việt Nam",
      gpa: "IELTS 7.5",
      tag: "Chuyên Anh K33",
      color: "border-purple-400/40 bg-gradient-to-r from-purple-950/40 via-pink-950/30 to-slate-900/60",
      accent: "text-purple-300",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/40",
      bullets: [
        "Cựu học sinh chuyên Anh khóa 33 - Trường THPT Chuyên Thái Nguyên.",
        "Chứng chỉ ngoại ngữ: IELTS 7.5 & Tiếng Trung cơ bản HSK 3."
      ]
    }
  ];

  return (
    <section id="education" className="py-14 sm:py-16 relative overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10 animate-fade-rise">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>EDUCATION OVERVIEW</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            HỌC VẤN
          </h2>
        </div>

        {/* 2 Concise Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl liquid-glass liquid-glass-card p-7 sm:p-8 flex flex-col justify-between shadow-2xl animate-fade-rise ${idx === 0 ? 'delay-100' : 'delay-200'}`}
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-[1.5px] shrink-0 shadow-md">
                      <div className="w-full h-full bg-[#070b18] rounded-[14px] flex items-center justify-center text-white">
                        <GraduationCap className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold font-heading text-lg sm:text-xl text-white tracking-tight">
                        {item.schoolName}
                      </h3>
                      <div className="text-xs font-semibold text-cyan-300 mt-0.5">
                        {item.subTitle}
                      </div>
                    </div>
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-bold font-heading bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shrink-0">
                    {item.gpa}
                  </span>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 my-4 py-2 border-y border-white/10">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.time}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    {item.location}
                  </span>
                </div>

                {/* Concise Highlights */}
                <div className="space-y-2 pt-1">
                  <ul className="space-y-2 text-sm text-slate-200">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{item.tag}</span>
                <span className="text-emerald-300 font-semibold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  Chính quy xuất sắc
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
