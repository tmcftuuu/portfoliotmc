import React from 'react';
import { Award, TrendingUp, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AcademicAchievementsSection() {
  const achievements = [
    {
      code: "01",
      title: "GPA Tích Luỹ Xuất Sắc: 3.77 / 4.0",
      category: "Điểm tích lũy học tập",
      desc: "Duy trì thành tích học tập xuất sắc ổn định trong top đầu chuyên ngành Kinh tế Đối ngoại tại trường Đại học Ngoại Thương (FTU).",
      icon: Award,
      color: "from-cyan-400 to-blue-500",
      highlight: "GPA 3.77 / 4.0",
      bullet: "GPA tích luỹ: 3.77/4.0"
    },
    {
      code: "02",
      title: "Đạt Điểm A Các Môn Cơ Sở Ngành Kinh Tế",
      category: "Nền tảng kinh tế học",
      desc: "Đạt điểm A trong các môn cơ sở ngành cốt lõi: Kinh tế vi mô, Kinh tế vĩ mô, Nguyên lý kế toán, Nguyên lý quản lý kinh tế,...",
      icon: TrendingUp,
      color: "from-purple-400 to-indigo-500",
      highlight: "Toàn bộ Điểm A",
      bullet: "Đạt điểm A các môn cơ sở ngành Kinh tế"
    },
    {
      code: "03",
      title: "Thực Hành Sâu Các Môn Chuyên Ngành Tài Chính",
      category: "Kiến thức chuyên môn",
      desc: "Đã được học và thực hành bài bản các môn chuyên ngành: Lý thuyết tài chính, Tiền tệ - Ngân hàng, Đầu tư quốc tế,... nắm bắt bản chất các công cụ và thị trường tài chính.",
      icon: BookOpen,
      color: "from-pink-400 to-rose-500",
      highlight: "Tài chính & Tiền tệ",
      bullet: "Học & thực hành môn chuyên ngành: Lý thuyết tài chính, Tiền tệ - Ngân hàng, Đầu tư quốc tế"
    },
    {
      code: "04",
      title: "Nghiên Cứu Khoa Học (NCKH) Cấp Trường",
      category: "Lĩnh vực Tài Chính",
      desc: "Tham gia NCKH cấp trường trong lĩnh vực Tài Chính; rèn luyện tư duy nghiên cứu định lượng, phân tích số liệu tài chính và giải quyết vấn đề độc lập.",
      icon: Sparkles,
      color: "from-emerald-400 to-teal-500",
      highlight: "NCKH FTU",
      bullet: "Nghiên cứu khoa học (NCKH) cấp trường trong lĩnh vực Tài Chính"
    }
  ];

  return (
    <section id="achievements" className="py-14 sm:py-16 relative overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 animate-fade-rise">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>ACADEMIC ACHIEVEMENTS</span>
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              THÀNH TÍCH HỌC TẬP
            </h2>
            <div className="text-base sm:text-lg font-semibold text-gradient-cyan mt-1">
              TRƯỜNG ĐẠI HỌC NGOẠI THƯƠNG — Chuyên ngành: Kinh tế Đối ngoại
            </div>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Điểm tích luỹ xuất sắc cùng năng lực nghiên cứu khoa học vững vàng trong lĩnh vực Tài chính - Kinh tế.
            </p>
          </div>

          <div className="p-4 rounded-2xl liquid-glass liquid-glass-card border border-cyan-400/40 text-center shrink-0 shadow-xl">
            <div className="text-xs text-cyan-300 font-bold uppercase tracking-wider">
              GPA Tích Luỹ Xuất Sắc
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-0.5 tracking-tight">
              3.77 <span className="text-sm font-sans font-normal text-slate-400">/ 4.0</span>
            </div>
            <div className="text-[11px] text-emerald-300 font-semibold mt-1">
              Top Đầu Chuyên Ngành FTU
            </div>
          </div>
        </div>

        {/* 4 Achievement Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className={`rounded-3xl liquid-glass liquid-glass-card p-7 sm:p-8 relative overflow-hidden group flex flex-col justify-between shadow-2xl animate-fade-rise ${idx % 2 === 0 ? 'delay-100' : 'delay-200'}`}
              >
                {/* Glow accent */}
                <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${item.color} opacity-15 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-cyan-300">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      #{item.code}
                    </span>
                  </div>

                  {/* Title and Icon */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} p-[1.5px] shadow-md shrink-0`}>
                      <div className="w-full h-full bg-[#070b18] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="font-bold font-heading text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-100 text-sm leading-relaxed font-normal mt-2 mb-4">
                    {item.desc}
                  </p>

                  {/* Highlight Pill */}
                  <div className="p-3 rounded-xl bg-[#070b18]/70 border border-white/10 flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium">{item.bullet}</span>
                  </div>
                </div>

                {/* Card Bottom - Verified */}
                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Đạt kết quả xuất sắc
                  </span>
                  <span className="text-cyan-300 font-medium">
                    Đại học Ngoại Thương (FTU)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
