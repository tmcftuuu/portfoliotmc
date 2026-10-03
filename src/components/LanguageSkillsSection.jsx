import React from 'react';
import { Languages, CheckCircle2, Sparkles, Award, Globe2 } from 'lucide-react';

export default function LanguageSkillsSection() {
  const languages = [
    {
      name: "Tiếng Anh (English)",
      level: "IELTS 7.5",
      badge: "Cựu Chuyên Anh K33",
      score: "IELTS 7.5",
      desc: "Năng lực sử dụng tiếng Anh học thuật và thương mại lưu loát. Tự tin đọc hiểu tài liệu tài chính quốc tế, soạn thảo văn bản học thuật và giao tiếp đàm phán.",
      color: "from-cyan-400 to-blue-500",
      percent: 92,
      bullet: "IELTS: 7.5 — Năng lực ngoại ngữ xuất sắc"
    },
    {
      name: "Tiếng Trung (Chinese)",
      level: "HSK 3 (Cơ bản)",
      badge: "Giao tiếp cơ bản",
      score: "HSK 3",
      desc: "Nắm vững hệ thống ngữ pháp và từ vựng cơ bản, có khả năng giao tiếp thông thường trong đời sống và xử lý văn bản cơ bản.",
      color: "from-pink-400 to-purple-500",
      percent: 65,
      bullet: "Tiếng Trung cơ bản (HSK 3)"
    }
  ];

  return (
    <section id="languages" className="py-14 sm:py-16 relative overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[110px] pointer-events-none animate-orb-1" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none animate-orb-3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>LANGUAGE SKILLS</span>
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              NGOẠI NGỮ
            </h2>
            <div className="text-base sm:text-lg font-bold text-gradient-rainbow mt-1">
              Năng lực sử dụng ngoại ngữ
            </div>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Khả năng ngoại ngữ song ngữ vượt trội (Tiếng Anh IELTS 7.5 và Tiếng Trung HSK 3) sẵn sàng đáp ứng môi trường làm việc tài chính đa quốc gia.
            </p>
          </div>

          <div className="flex items-center gap-2.5 p-3.5 rounded-2xl liquid-glass border border-cyan-400/40 text-cyan-300 text-xs font-bold shadow-lg">
            <Globe2 className="w-4 h-4 text-cyan-400" />
            <span>Song ngữ: Tiếng Anh & Tiếng Trung</span>
          </div>
        </div>

        {/* 2 Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="rounded-3xl liquid-glass liquid-glass-hover p-7 sm:p-8 border border-white/15 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${lang.color} p-[1.5px] shadow-md shrink-0`}>
                      <div className="w-full h-full bg-[#0a1026] rounded-[14px] flex items-center justify-center text-white">
                        <Languages className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg sm:text-xl text-white">
                        {lang.name}
                      </h3>
                      <div className="text-xs text-cyan-300 font-semibold mt-0.5">
                        {lang.badge}
                      </div>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-extrabold text-cyan-300 shadow-sm">
                    {lang.score}
                  </span>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed font-normal my-4">
                  {lang.desc}
                </p>

                {/* Progress bar */}
                <div className="space-y-2 mt-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="flex justify-between text-xs text-slate-200 font-medium">
                    <span>Mức độ thông thạo</span>
                    <span className="text-cyan-300 font-bold">{lang.level}</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${lang.color} shadow-sm`}
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{lang.bullet}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Năng lực ngoại ngữ</span>
                <span className="text-emerald-300 font-semibold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  Chứng chỉ đã xác thực
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
