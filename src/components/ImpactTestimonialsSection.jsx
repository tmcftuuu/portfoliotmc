import React from 'react';
import { Languages, Laptop, Users2, MessageSquareText, Clock, CheckCircle2, Globe2 } from 'lucide-react';

export default function ImpactTestimonialsSection() {
  const languages = [
    {
      name: "Tiếng Anh (English)",
      level: "IELTS 7.5",
      badge: "Cựu Chuyên Anh K33",
      score: "7.5",
      desc: "Năng lực sử dụng tiếng Anh học thuật và thương mại thành thạo. Tự tin đọc hiểu tài liệu tài chính, soạn thảo văn bản và trao đổi đàm phán quốc tế.",
      color: "from-cyan-400 to-blue-500",
      percent: 90
    },
    {
      name: "Tiếng Trung (Chinese)",
      level: "HSK 3",
      badge: "Giao tiếp cơ bản",
      score: "HSK 3",
      desc: "Nắm vững hệ thống ngữ pháp và từ vựng cơ bản, có khả năng giao tiếp thông thường và hỗ trợ xử lý tài liệu cơ bản.",
      color: "from-pink-400 to-rose-500",
      percent: 65
    }
  ];

  const competencies = [
    {
      title: "Tin học Văn phòng & Nghiệp vụ",
      subtitle: "Word, Excel, PPT & Phần mềm BIDV",
      desc: "Soạn thảo văn bản hành chính chuẩn chỉ, xử lý dữ liệu và bảng tính Excel, thiết kế slide thuyết trình PowerPoint chỉn chu. Thao tác tốt phần mềm SVS, ECM, CSR của ngân hàng.",
      icon: Laptop,
      color: "text-cyan-400"
    },
    {
      title: "Thuyết trình & Làm việc nhóm",
      subtitle: "Diễn đạt mạch lạc & Phối hợp nhóm",
      desc: "Kỹ năng trình bày tự tin trước đám đông, truyền tải thông điệp logic, hợp tác tôn trọng và cùng đội ngũ chinh phục mục tiêu chung.",
      icon: Users2,
      color: "text-purple-400"
    },
    {
      title: "Giao tiếp với Khách hàng",
      subtitle: "Thấu cảm & Chăm sóc tận tâm",
      desc: "Lắng nghe tích cực, nắm bắt nhanh nhu cầu của khách hàng vay vốn, tạo dựng niềm tin và thái độ phục vụ chuẩn mực ngân hàng.",
      icon: MessageSquareText,
      color: "text-pink-400"
    },
    {
      title: "Quản lý Thời gian & Tổ chức",
      subtitle: "Kỷ luật & Tối ưu hiệu suất",
      desc: "Sắp xếp thứ tự ưu tiên khoa học, bám sát hạn chót giải ngân, kiểm tra hồ sơ cẩn thận để hạn chế tối đa rủi ro tác nghiệp.",
      icon: Clock,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="s7" className="py-20 relative overflow-hidden scroll-mt-28">
      {/* Background neon lights */}
      <div className="neon-glow-circle w-[400px] h-[400px] bg-cyan-500/10 top-1/3 -left-10" />
      <div className="neon-glow-circle w-[500px] h-[500px] bg-purple-600/10 bottom-0 right-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-xs px-3 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold tracking-wide">
                NGOẠI NGỮ & KỸ NĂNG CHUYÊN MÔN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Kỹ Năng & Năng Lực Cốt Lõi
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Bộ kỹ năng toàn diện gồm ngoại ngữ song ngữ (IELTS 7.5, HSK 3), tin học văn phòng và kỹ năng giao tiếp nghiệp vụ.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-2xl liquid-glass border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Globe2 className="w-4 h-4" />
            <span>Song ngữ: Tiếng Anh & Tiếng Trung</span>
          </div>
        </div>

        {/* Section 1: Languages Grid (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="rounded-3xl liquid-glass liquid-glass-hover p-7 sm:p-8 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${lang.color} p-[1.5px]`}>
                      <div className="w-full h-full bg-[#080d1a] rounded-[14px] flex items-center justify-center text-white">
                        <Languages className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-white">
                        {lang.name}
                      </h3>
                      <p className="text-xs text-cyan-300 font-medium">{lang.badge}</p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-cyan-300">
                    {lang.score}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-normal my-4">
                  {lang.desc}
                </p>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-300 font-medium">
                    <span>Mức độ thông thạo</span>
                    <span className="text-cyan-400 font-bold">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Năng lực ngoại ngữ</span>
                <span className="text-emerald-400 font-semibold">Đã xác thực</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: 4 Competencies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl liquid-glass liquid-glass-hover p-6 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${comp.color}`} />
                  </div>

                  <h4 className="font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {comp.title}
                  </h4>

                  <div className="text-[11px] text-cyan-400 font-medium mt-1 mb-2.5">
                    {comp.subtitle}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {comp.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Kỹ năng sẵn sàng</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
