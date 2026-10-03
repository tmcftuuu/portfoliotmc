import React from 'react';
import { ArrowDownRight, CheckCircle2, Phone, Building2, MapPin, Sparkles, Send, Award, BookOpen } from 'lucide-react';

export default function HeroSection({ profile, metrics }) {
  return (
    <section id="about" className="pt-24 sm:pt-28 pb-14 relative overflow-hidden scroll-mt-24">
      {/* Dynamic Animated Ambient Glow */}
      <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/25 via-blue-500/20 to-transparent rounded-full blur-[100px] pointer-events-none animate-orb-1" />
      <div className="absolute top-1/4 -right-10 w-[550px] h-[550px] bg-gradient-to-bl from-purple-500/25 via-pink-500/20 to-transparent rounded-full blur-[120px] pointer-events-none animate-orb-2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full relative z-10">
        {/* Header Tag - Clean Without Slide Number */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold tracking-wide shadow-[0_0_15px_rgba(0,245,255,0.25)] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>ABOUT ME</span>
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
          <span className="text-xs text-cyan-200/90 font-medium">
            HỒ SƠ CÁ NHÂN & ĐỊNH HƯỚNG NGHỀ NGHIỆP
          </span>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-semibold shadow-sm">
              <Building2 className="w-4 h-4 text-cyan-300" />
              <span>Kinh tế Đối ngoại — ĐH Ngoại Thương & BIDV Ngọc Khánh</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Primary Title & Subtitle */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                TRỊNH MAI CHI
              </h1>
              <div className="text-2xl sm:text-3xl font-bold text-gradient-rainbow">
                Thực tập sinh Ngân Hàng
              </div>
            </div>

            {/* Vision Quote Card */}
            <div className="p-5 rounded-2xl liquid-glass border-l-4 border-cyan-400 relative shadow-lg">
              <div className="text-xs text-cyan-300 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Vision (Tầm nhìn):</span>
              </div>
              <p className="text-white text-base sm:text-lg leading-relaxed font-semibold">
                "Làm việc và cống hiến chuyên sâu trong lĩnh vực Tài chính - Ngân hàng."
              </p>
            </div>

            {/* Key Highlights / Bullet Points */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2.5">
              <div className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                Key Highlights / Điểm nổi bật:
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Định hướng nghề nghiệp:</strong> Làm việc trong lĩnh vực Tài chính - Ngân hàng.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Học vấn:</strong> Sinh viên năm 3 chuyên ngành Kinh tế đối ngoại — Đại học Ngoại Thương (GPA 3.77/4.0).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>Kinh nghiệm thực tế:</strong> Thực tập sinh phòng Quản trị tín dụng tại BIDV Chi nhánh Ngọc Khánh.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ngoại ngữ:</strong> IELTS 7.5 và Tiếng Trung cơ bản (HSK 3).</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#education"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-bold text-xs sm:text-sm hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] transition-all hover:scale-105 flex items-center gap-2 group shadow-lg"
              >
                <span>Xem Hồ sơ & Học vấn</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 group shadow-md"
              >
                <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Liên hệ: 0395 569 183</span>
              </a>
            </div>
          </div>

          {/* Right Column: Luxury Glowing Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Neon Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 animate-gradient-shift" />

              <div className="relative rounded-3xl liquid-glass p-6 border border-white/30 backdrop-blur-2xl overflow-hidden shadow-2xl">
                {/* Header without FTU // BIDV */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase">
                      HỒ SƠ CHUYÊN MÔN
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/40">
                    Sẵn sàng nhận việc
                  </span>
                </div>

                {/* Avatar with luxury frame */}
                <div className="py-4 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden p-1.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-2xl">
                      <img
                        src="/assets/maichi_avatar.png"
                        alt="Trịnh Mai Chi"
                        className="w-full h-full object-cover object-top rounded-[14px] transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute -bottom-2.5 -right-2 px-3 py-1 rounded-xl bg-slate-900/95 backdrop-blur-md border border-cyan-400 text-xs font-bold text-cyan-300 shadow-xl flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Trịnh Mai Chi</span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-2xl text-white">
                    TRỊNH MAI CHI
                  </h3>
                  <p className="text-xs text-cyan-300 mt-1 font-semibold">
                    Thực tập sinh Ngân Hàng
                  </p>
                  <p className="text-xs text-slate-300 mt-1 max-w-xs font-normal">
                    Đại học Ngoại Thương & BIDV Ngọc Khánh
                  </p>
                </div>

                {/* Key Metrics Quick Ribbon */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-cyan-500/15 border border-cyan-400/40 hover:border-cyan-400/70 transition-colors text-center shadow-sm">
                    <div className="text-[11px] text-cyan-200 font-medium flex items-center justify-center gap-1">
                      <Award className="w-3.5 h-3.5 text-cyan-300" />
                      <span>GPA Tích luỹ</span>
                    </div>
                    <div className="text-xl font-extrabold text-cyan-300 mt-0.5">
                      3.77 / 4.0
                    </div>
                    <div className="text-[10px] text-slate-300">ĐH Ngoại Thương</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-500/15 border border-purple-400/40 hover:border-purple-400/70 transition-colors text-center shadow-sm">
                    <div className="text-[11px] text-purple-200 font-medium flex items-center justify-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-purple-300" />
                      <span>Chứng chỉ IELTS</span>
                    </div>
                    <div className="text-xl font-extrabold text-purple-300 mt-0.5">
                      7.5
                    </div>
                    <div className="text-[10px] text-slate-300">HSK 3 Tiếng Trung</div>
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center justify-between text-xs text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    Yên Hoà, Hà Nội
                  </span>
                  <a
                    href="#contact"
                    className="text-cyan-300 hover:text-white font-bold flex items-center gap-1"
                  >
                    <span>Liên hệ ngay</span>
                    <Send className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
