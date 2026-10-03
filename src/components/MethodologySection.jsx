import React from 'react';
import { Users, HeartHandshake, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MethodologySection() {
  const highlights = [
    {
      num: "01",
      title: "Lãnh đạo & Điều phối trên 50 thành viên",
      role: "Quản trị đội ngũ & Làm việc nhóm",
      desc: "Đảm nhiệm vai trò Phó chủ nhiệm, điều phối phân công công việc, gắn kết các ban nội dung, hậu cần, truyền thông và tạo dựng môi trường làm việc nhóm năng động, hiệu quả.",
      stat: "50+ Thành viên",
      statLabel: "Quy mô quản lý",
      color: "from-cyan-400 to-blue-500",
      icon: Users
    },
    {
      num: "02",
      title: "Đàm phán & Vận động tài trợ chuyên nghiệp",
      role: "Kỹ năng giao tiếp & Thuyết phục",
      desc: "Trực tiếp xây dựng hồ sơ tài trợ (proposal), tiếp cận và thương thuyết thành công với các doanh nghiệp, tổ chức và cựu học sinh để gây quỹ hoạt động cho các dự án thiện nguyện và sự kiện lớn của CLB.",
      stat: "Thành công",
      statLabel: "Vận động quỹ tài trợ",
      color: "from-purple-400 to-pink-500",
      icon: HeartHandshake
    },
    {
      num: "03",
      title: "Sáng tạo nội dung & Truyền thông lan tỏa",
      role: "Kỹ năng viết & Truyền tải thông điệp",
      desc: "Kỹ năng viết và truyền đạt thông tin mạch lạc, cảm xúc, thiết kế thông điệp hấp dẫn; các bài đăng truyền thông trên mạng xã hội đạt lượng tương tác cao trên 500 lượt người tiếp cận.",
      stat: "500+ Tương tác",
      statLabel: "Lượt tiếp cận mỗi bài viết",
      color: "from-amber-400 to-orange-500",
      icon: Megaphone
    }
  ];

  return (
    <section id="s6" className="py-20 relative overflow-hidden scroll-mt-28">
      {/* Background glow */}
      <div className="neon-glow-circle w-[450px] h-[450px] bg-purple-500/10 top-1/4 -right-10" />
      <div className="neon-glow-circle w-[450px] h-[450px] bg-pink-500/10 bottom-10 -left-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="text-xs px-3 py-0.5 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30 font-semibold tracking-wide">
              HOẠT ĐỘNG NGOẠI KHÓA & LÃNH ĐẠO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Phó Chủ Nhiệm CLB Nắng
          </h2>
          <p className="text-cyan-300 font-medium text-sm mt-1.5">
            Trường THPT Chuyên Thái Nguyên
          </p>
          <p className="text-slate-300 text-sm sm:text-base mt-2.5 font-normal leading-relaxed">
            Dấu ấn lãnh đạo đội ngũ, khả năng giao tiếp thuyết phục khi vận động tài trợ và năng lực sáng tạo nội dung truyền thông lan tỏa.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="rounded-3xl liquid-glass liquid-glass-hover p-7 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} p-[1.5px] shadow-md`}>
                      <div className="w-full h-full bg-[#080d1a] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                      Phần {item.num}
                    </span>
                  </div>

                  <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
                    {item.role}
                  </span>

                  <h3 className="font-bold text-lg sm:text-xl text-white mt-1.5 mb-3 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>
                </div>

                {/* Stat Box at Bottom */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">{item.statLabel}</div>
                    <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                      {item.stat}
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership summary footer card */}
        <div className="mt-10 rounded-3xl liquid-glass p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-purple-950/20 via-black to-pink-950/20">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-white">
                Rèn luyện Kỹ năng Mềm Toàn diện
              </div>
              <div className="text-xs text-slate-300 mt-0.5 font-normal">
                Quản lý con người, đàm phán tài chính và truyền thông là bệ phóng vững chắc cho sự nghiệp ngân hàng.
              </div>
            </div>
          </div>

          <span className="text-xs font-medium px-3.5 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/40 whitespace-nowrap">
            CLB Nắng — K33 Chuyên TN
          </span>
        </div>
      </div>
    </section>
  );
}
