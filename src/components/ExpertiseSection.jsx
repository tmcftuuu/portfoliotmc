import React from 'react';
import { Award, TrendingUp, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Award: Award,
  TrendingUp: TrendingUp,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
};

export default function ExpertiseSection({ achievements }) {
  const items = achievements || [
    {
      code: "ACH_01",
      title: "GPA Tích luỹ Xuất sắc: 3.77 / 4.0",
      category: "Điểm tích lũy học tập",
      desc: "Duy trì phong độ học tập ổn định trong top đầu lớp chuyên ngành Kinh tế Đối ngoại tại trường Đại học Ngoại Thương (FTU).",
      icon: "Award",
      color: "from-cyan-400 to-blue-500"
    },
    {
      code: "ACH_02",
      title: "Đạt điểm A các môn cơ sở ngành Kinh tế",
      category: "Nền tảng kinh tế học",
      desc: "Đạt kết quả điểm A xuất sắc tại các học phần cốt lõi: Kinh tế vi mô, Kinh tế vĩ mô, Nguyên lý kế toán, Nguyên lý quản lý kinh tế,...",
      icon: "TrendingUp",
      color: "from-purple-400 to-indigo-500"
    },
    {
      code: "ACH_03",
      title: "Thực hành sâu các môn chuyên ngành Tài chính",
      category: "Kiến thức chuyên môn",
      desc: "Đã được học và thực hành các môn: Lý thuyết tài chính, Tiền tệ - Ngân hàng, Đầu tư quốc tế,... nắm bắt bản chất các công cụ và thị trường tài chính.",
      icon: "BookOpen",
      color: "from-pink-400 to-rose-500"
    },
    {
      code: "ACH_04",
      title: "Nghiên cứu khoa học (NCKH) cấp trường",
      category: "Lĩnh vực Tài Chính",
      desc: "Tích cực tham gia đề tài Nghiên cứu khoa học cấp trường trong lĩnh vực Tài chính, rèn luyện tư duy nghiên cứu, xử lý số liệu và phân tích định lượng.",
      icon: "Sparkles",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="s4" className="py-20 relative overflow-hidden scroll-mt-28">
      {/* Background neon elements */}
      <div className="neon-glow-circle w-[500px] h-[500px] bg-cyan-400/15 -top-20 right-1/4 animate-orb-2" />
      <div className="neon-glow-circle w-[400px] h-[400px] bg-pink-500/15 bottom-0 left-10 animate-orb-1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header without any slide numbers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-xs px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold tracking-wide shadow-sm">
                KẾT QUẢ HỌC TẬP FTU
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Thành Tích Học Tập & NCKH
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Chuyên ngành Kinh tế Đối ngoại — Trường Đại học Ngoại Thương (GPA 3.77/4.0).
            </p>
          </div>

          <div className="text-xs text-slate-300 hidden sm:block text-right">
            <span className="font-bold text-cyan-300 text-sm">GPA 3.77 / 4.0</span>
            <div className="text-slate-400 mt-0.5">Top đầu chuyên ngành Kinh tế Đối ngoại</div>
          </div>
        </div>

        {/* 4 Achievement Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;

            return (
              <div
                key={item.code}
                className="rounded-3xl liquid-glass liquid-glass-hover p-7 sm:p-8 border border-white/15 relative overflow-hidden group flex flex-col justify-between shadow-lg"
              >
                {/* Glow accent */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.color} opacity-15 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Top line with category */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-cyan-300">
                      {item.code}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-200">
                      {item.category}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} p-[1.5px] shadow-md shrink-0`}>
                      <div className="w-full h-full bg-[#080d1a] rounded-[14px] flex items-center justify-center text-white">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-200 text-sm leading-relaxed font-normal mt-3">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom line: Verified tag (Removed the link to BIDV as requested) */}
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-300 flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Đạt kết quả xuất sắc
                  </span>
                  <span className="text-cyan-300 font-medium">
                    Đại học Ngoại Thương
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
