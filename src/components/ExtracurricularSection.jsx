import React from 'react';
import { Users, HeartHandshake, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ExtracurricularSection() {
  const activities = [
    {
      num: "01",
      title: "Quản lý & lãnh đạo đội ngũ trên 50 thành viên",
      role: "Kỹ năng lãnh đạo & Làm việc nhóm",
      desc: "Kỹ năng lãnh đạo và làm việc nhóm với trên 50 thành viên. Phân chia công việc, điều phối các ban chuyên môn, gắn kết tập thể và quản lý tiến độ các dự án.",
      stat: "50+ Thành viên",
      statLabel: "Quy mô quản lý",
      color: "from-cyan-400 to-blue-500",
      icon: Users
    },
    {
      num: "02",
      title: "Giao tiếp & thuyết phục tài trợ chuyên nghiệp",
      role: "Kỹ năng thuyết phục & Giao tiếp",
      desc: "Kỹ năng thuyết phục, kỹ năng giao tiếp chuyên nghiệp khi đi xin tài trợ cho các hoạt động của CLB. Tiếp cận đối tác, soạn thảo hồ sơ xin tài trợ và đàm phán thành công.",
      stat: "Thành công",
      statLabel: "Vận động quỹ tài trợ",
      color: "from-purple-400 to-pink-500",
      icon: HeartHandshake
    },
    {
      num: "03",
      title: "Sáng tạo nội dung truyền thông đạt trên 500 lượt tương tác",
      role: "Kỹ năng viết & Truyền thông lan tỏa",
      desc: "Kỹ năng viết và truyền đạt thông tin rõ ràng, hấp dẫn để đạt các bài đăng truyền thông có lượt tương tác trên 500 người mỗi bài.",
      stat: "500+ Tương tác",
      statLabel: "Lượt tiếp cận mỗi bài",
      color: "from-pink-400 to-amber-500",
      icon: Megaphone
    }
  ];

  return (
    <section id="extracurricular" className="py-14 sm:py-16 relative overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-rise">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>EXTRACURRICULAR ACTIVITIES</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            HOẠT ĐỘNG NGOẠI KHÓA
          </h2>
          <div className="text-base sm:text-lg font-semibold text-gradient-cyan mt-1">
            Phó chủ nhiệm CLB Nắng — Trường THPT Chuyên Thái Nguyên
          </div>
        </div>

        {/* 3 Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`rounded-3xl liquid-glass liquid-glass-card p-7 flex flex-col justify-between group relative overflow-hidden shadow-2xl animate-fade-rise ${idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : 'delay-300'}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} p-[1.5px] shadow-md`}>
                      <div className="w-full h-full bg-[#070b18] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-300">
                      Mục {item.num}
                    </span>
                  </div>

                  <span className="text-xs text-cyan-300 font-bold uppercase tracking-wider">
                    {item.role}
                  </span>

                  <h3 className="font-bold font-heading text-lg sm:text-xl text-white mt-1.5 mb-3 group-hover:text-cyan-300 transition-colors tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-100 text-sm leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>
                </div>

                {/* Stat Box at Bottom */}
                <div className="p-3.5 rounded-2xl bg-[#070b18]/70 border border-white/15 flex items-center justify-between shadow-inner">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">{item.statLabel}</div>
                    <div className="text-xl font-extrabold font-heading text-white mt-0.5 tracking-tight">
                      {item.stat}
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-3xl liquid-glass p-6 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-purple-950/30 via-slate-900/60 to-pink-950/30 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-white">
                Rèn Luyện Kỹ Năng Mềm Toàn Diện
              </div>
              <div className="text-xs text-slate-300 mt-0.5 font-normal">
                Quản lý con người, đàm phán tài chính và truyền thông là nền tảng bổ trợ đắc lực cho công việc ngân hàng.
              </div>
            </div>
          </div>

          <span className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/40 whitespace-nowrap">
            CLB Nắng — K33 Chuyên TN
          </span>
        </div>
      </div>
    </section>
  );
}
