import React from 'react';
import { Laptop, Users2, MessageSquareText, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function SkillsCompetenciesSection() {
  const skills = [
    {
      title: "Tin học văn phòng: Word, Excel, PPT cơ bản",
      category: "Công cụ nghiệp vụ",
      desc: "Soạn thảo văn bản Word hành chính chuẩn quy cách; sử dụng hàm Excel tính toán, lọc dữ liệu tài chính; thiết kế slide PowerPoint thuyết trình bài bản.",
      bullet: "Word, Excel, PPT cơ bản",
      icon: Laptop,
      color: "from-cyan-400 to-blue-500",
      accent: "text-cyan-300"
    },
    {
      title: "Thuyết trình & Làm việc nhóm",
      category: "Kỹ năng phối hợp",
      desc: "Kỹ năng thuyết trình tự tin, diễn đạt ý tưởng mạch lạc trước hội đồng; chủ động làm việc nhóm, tôn trọng sự khác biệt và cùng nhau giải quyết vấn đề.",
      bullet: "Thuyết trình và làm việc nhóm",
      icon: Users2,
      color: "from-purple-400 to-indigo-500",
      accent: "text-purple-300"
    },
    {
      title: "Giao tiếp khách hàng",
      category: "Chăm sóc & Thấu cảm",
      desc: "Kỹ năng giao tiếp với khách hàng chuyên nghiệp, lắng nghe nhu cầu vay vốn, giải đáp thắc mắc tận tình và tạo dựng niềm tin vững chắc.",
      bullet: "Giao tiếp với khách hàng",
      icon: MessageSquareText,
      color: "from-pink-400 to-rose-500",
      accent: "text-pink-300"
    },
    {
      title: "Quản lý thời gian & Tổ chức công việc",
      category: "Kỷ luật & Hiệu suất",
      desc: "Quản lý thời gian và tổ chức công việc hiệu quả; sắp xếp thứ tự ưu tiên khoa học, hoàn thành báo cáo đúng hạn và giảm thiểu rủi ro tác nghiệp.",
      bullet: "Quản lý thời gian và tổ chức công việc hiệu quả",
      icon: Clock,
      color: "from-emerald-400 to-teal-500",
      accent: "text-emerald-300"
    }
  ];

  return (
    <section id="skills" className="py-14 sm:py-16 relative overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-1/3 -left-10 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none animate-orb-2" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[110px] pointer-events-none animate-orb-1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3.5 py-1 rounded-full bg-purple-400/20 text-purple-300 border border-purple-400/40 font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>SKILLS & COMPETENCIES</span>
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-purple-400/60 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            KỸ NĂNG
          </h2>
          <div className="text-base sm:text-lg font-bold text-gradient-rainbow mt-1">
            Bộ kỹ năng công việc
          </div>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
            Bộ công cụ kỹ năng toàn diện gồm tin học văn phòng, kỹ năng thuyết trình, giao tiếp khách hàng và quản lý thời gian hiệu quả.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl liquid-glass liquid-glass-hover p-6 sm:p-7 border border-white/15 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${skill.color} p-[1.5px] shadow-md`}>
                      <div className="w-full h-full bg-[#0a1026] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-slate-300">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {skill.title}
                  </h3>

                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                    {skill.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Sẵn sàng áp dụng</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
