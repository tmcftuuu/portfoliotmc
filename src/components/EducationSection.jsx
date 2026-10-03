import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';

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
        "GPA tích luỹ xuất sắc đạt 3.77 / 4.0.",
        "Đã được học và thực hành các môn chuyên ngành: Lý thuyết tài chính, Tiền tệ - Ngân hàng, Đầu tư quốc tế,...",
        "Đạt điểm A trong các môn cơ sở ngành Kinh tế: Kinh tế vi mô, Kinh tế vĩ mô, Nguyên lý kế toán, Nguyên lý quản lý kinh tế,...",
        "Tham gia Nghiên cứu khoa học (NCKH) cấp trường trong lĩnh vực Tài Chính."
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
        "Đạt chứng chỉ tiếng Anh quốc tế IELTS 7.5 và Tiếng Trung cơ bản HSK 3.",
        "Phó chủ nhiệm CLB Nắng: Điều phối và lãnh đạo đội ngũ trên 50 thành viên.",
        "Kỹ năng thuyết phục, xin tài trợ chuyên nghiệp và sáng tạo nội dung truyền thông đạt trên 500 lượt tương tác."
      ]
    }
  ];

  return (
    <section id="education" className="py-14 sm:py-16 relative overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[110px] pointer-events-none animate-orb-2" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[110px] pointer-events-none animate-orb-3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>EDUCATION OVERVIEW</span>
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            HỌC VẤN
          </h2>
          <div className="text-lg sm:text-xl font-bold text-gradient-rainbow mt-1">
            Nền tảng giáo dục
          </div>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
            Hệ thống đào tạo chính quy, chất lượng cao tại các cơ sở giáo dục danh tiếng: Trường Đại học Ngoại Thương và Trường THPT Chuyên Thái Nguyên.
          </p>
        </div>

        {/* 2 Main Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl liquid-glass p-7 sm:p-8 border ${item.color} flex flex-col justify-between shadow-xl transition-all duration-300 hover:scale-[1.01]`}
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[1.5px] shrink-0 shadow-md">
                      <div className="w-full h-full bg-[#0a1026] rounded-[14px] flex items-center justify-center text-white">
                        <GraduationCap className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg sm:text-xl text-white">
                        {item.schoolName}
                      </h3>
                      <div className={`text-xs font-semibold ${item.accent} mt-0.5`}>
                        {item.subTitle}
                      </div>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor} shrink-0`}>
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

                {/* Body Content & Key Highlights */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Nội dung nổi bật:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
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
