import React from 'react';
import { Award, GraduationCap, Building2, Users, TrendingUp, BookOpen, Heart } from 'lucide-react';

export default function SocialProofSection({ metrics }) {
  return (
    <section id="s2" className="py-20 relative overflow-hidden scroll-mt-28">
      {/* Background accents */}
      <div className="neon-glow-circle w-[450px] h-[450px] bg-cyan-500/10 top-1/4 -left-20" />
      <div className="neon-glow-circle w-[500px] h-[500px] bg-purple-500/10 bottom-10 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-xs px-3 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold tracking-wide">
                DẤU ẤN & CHỈ SỐ TIÊU BIỂU
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Chỉ Số Học Thuật & Thực Chiến
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Sự kết hợp đồng bộ giữa năng lực học thuật xuất sắc tại Ngoại Thương và kinh nghiệm thực tế tại BIDV.
            </p>
          </div>

          {/* Grand Highlight Badge */}
          <div className="p-4 rounded-2xl liquid-glass border border-cyan-400/30 flex items-center gap-4 bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-black/60 shadow-[0_0_25px_rgba(0,245,255,0.12)]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider">
                Điểm tích lũy chuyên ngành
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                GPA {metrics.gpa}
                <span className="text-xs text-emerald-400 ml-2 font-medium">FTU Top Tier</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid 4 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Học vấn Ngoại Thương (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl liquid-glass liquid-glass-hover p-6 sm:p-7 border border-cyan-500/20 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-[1.5px]">
                  <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex items-center justify-center text-white">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Đại học Ngoại Thương (FTU)</h3>
                  <p className="text-xs text-cyan-300 font-medium">Chuyên ngành Kinh tế Đối ngoại</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-medium">
                Sinh viên năm 3
              </span>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-2 gap-3.5 my-5">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  GPA Tích lũy
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-1">
                  {metrics.gpa}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  Môn cơ sở ngành
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-300 mt-1">
                  Điểm A
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4 font-normal">
              Đạt điểm A các môn: Kinh tế vi mô, Kinh tế vĩ mô, Nguyên lý kế toán, Nguyên lý quản lý kinh tế. Tham gia đề tài Nghiên cứu khoa học (NCKH) cấp trường trong lĩnh vực Tài chính.
            </p>
          </div>

          {/* Card 2: Ngoại ngữ IELTS 7.5 & HSK 3 (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl liquid-glass liquid-glass-hover p-6 sm:p-7 border border-purple-500/20 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 p-[1.5px]">
                  <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex items-center justify-center text-white">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Năng lực Ngoại ngữ</h3>
                  <p className="text-xs text-purple-300 font-medium">Song ngữ Anh — Trung</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300 font-medium">
                IELTS 7.5
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-5">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-purple-500/30 transition-colors">
                <div className="text-xs text-slate-400 font-medium">Tiếng Anh</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1">
                  IELTS 7.5
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Chuyên Anh K33</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-pink-500/30 transition-colors">
                <div className="text-xs text-slate-400 font-medium">Tiếng Trung</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-pink-400 mt-1">
                  HSK 3
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Giao tiếp cơ bản</div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4 font-normal">
              Cựu học sinh chuyên Anh khóa 33 THPT Chuyên Thái Nguyên, có khả năng đọc hiểu báo cáo tài chính quốc tế và giao tiếp lưu loát.
            </p>
          </div>

          {/* Card 3: Thực tập BIDV Ngọc Khánh (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl liquid-glass liquid-glass-hover p-6 sm:p-7 border border-emerald-500/20 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 p-[1.5px]">
                  <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex items-center justify-center text-white">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">BIDV Ngọc Khánh</h3>
                  <p className="text-xs text-emerald-300 font-medium">Phòng Quản trị tín dụng</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-medium">
                Thực tập sinh
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-emerald-500/30 transition-colors my-5">
              <div className="text-xs text-slate-400 font-medium">Phần mềm nghiệp vụ</div>
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">
                SVS, ECM, CSR,..
              </div>
              <div className="text-xs text-slate-400 mt-1">Quản lý khoản vay & Tài sản bảo đảm</div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4 font-normal">
              Nắm chắc dòng chảy khoản vay từ tiếp nhận hồ sơ, thẩm định, soạn thảo hợp đồng tín dụng & thế chấp TSBĐ đến giải ngân, tất toán.
            </p>
          </div>

          {/* Card 4: Hoạt động ngoại khóa CLB Nắng (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl liquid-glass liquid-glass-hover p-6 sm:p-7 border border-amber-500/20 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 p-[1.5px]">
                  <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex items-center justify-center text-white">
                    <Users className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">CLB Nắng — Chuyên Thái Nguyên</h3>
                  <p className="text-xs text-amber-300 font-medium">Phó Chủ nhiệm CLB</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-medium">
                Leadership & Media
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5 my-5">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xs text-slate-400 font-medium">Quy mô lãnh đạo</div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 mt-1">
                  50+ Thành viên
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Lãnh đạo & gắn kết đội ngũ</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xs text-slate-400 font-medium">Tương tác truyền thông</div>
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mt-1">
                  500+ Tương tác
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Vận động tài trợ thành công</div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4 font-normal">
              Kỹ năng thuyết phục và giao tiếp chuyên nghiệp khi đi xin tài trợ cho các sự kiện, cùng khả năng viết bài truyền thông thu hút tương tác cao.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
