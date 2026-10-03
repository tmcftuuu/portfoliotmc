import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PhilosophySection() {
  const educations = [
    {
      school: "Trường Đại học Ngoại Thương (FTU Hà Nội)",
      degree: "Sinh viên năm 3 — Chuyên ngành Kinh tế đối ngoại",
      time: "2023 — Hiện tại",
      location: "Hà Nội, Việt Nam",
      gpa: "GPA: 3.77 / 4.0",
      details: [
        "Chuyên sâu các học phần: Lý thuyết tài chính, Tiền tệ - Ngân hàng, Đầu tư quốc tế.",
        "Đạt điểm A các môn cơ sở ngành: Kinh tế vi mô, Kinh tế vĩ mô, Nguyên lý kế toán, Nguyên lý quản lý kinh tế.",
        "Tích cực tham gia Nghiên cứu khoa học (NCKH) cấp trường trong lĩnh vực Tài chính."
      ],
      color: "border-cyan-500/40 bg-gradient-to-r from-cyan-950/20 to-blue-950/20 text-cyan-300"
    },
    {
      school: "Trường THPT Chuyên Thái Nguyên",
      degree: "Cựu học sinh chuyên Anh — Khóa 33",
      time: "2020 — 2023",
      location: "Thái Nguyên, Việt Nam",
      gpa: "IELTS 7.5",
      details: [
        "Học sinh chuyên Anh Khóa 33, hoàn thành chứng chỉ IELTS 7.5.",
        "Phó Chủ nhiệm CLB Nắng: Điều hành và quản lý trên 50 thành viên.",
        "Trực tiếp xin tài trợ thành công và sản xuất nội dung truyền thông đạt trên 500 lượt tương tác."
      ],
      color: "border-purple-500/40 bg-gradient-to-r from-purple-950/20 to-pink-950/20 text-purple-300"
    }
  ];

  return (
    <section id="s3" className="py-20 relative overflow-hidden scroll-mt-28">
      {/* Glow backgrounds */}
      <div className="neon-glow-circle w-[400px] h-[400px] bg-purple-600/10 top-20 right-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-xs px-3 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold tracking-wide">
            QUÁ TRÌNH ĐÀO TẠO
          </span>
        </div>

        {/* Split Dashboard (60/40) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 60%: Education Timeline */}
          <div className="lg:col-span-7 rounded-3xl liquid-glass p-7 sm:p-9 border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  Học Vấn & Nền Tảng Giáo Dục
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-2 font-normal">
                  Nền tảng tri thức bài bản từ trường đại học kinh tế hàng đầu cả nước và trường THPT chuyên trọng điểm.
                </p>
              </div>

              <div className="space-y-5 pt-1">
                {educations.map((item, i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${item.color} transition-all hover:scale-[1.01]`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-base sm:text-lg text-white">
                        {item.school}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 text-xs text-cyan-300 font-bold">
                        {item.gpa}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-cyan-300 mb-2">
                      {item.degree}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-300 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {item.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-normal border-t border-white/10 pt-3">
                      {item.details.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>ĐẠI HỌC NGOẠI THƯƠNG (FTU)</span>
              <span className="text-cyan-400 font-semibold">CHUYÊN NGÀNH KINH TẾ ĐỐI NGOẠI</span>
            </div>
          </div>

          {/* Right 40%: Academic Pillars & Culture */}
          <div className="lg:col-span-5 rounded-3xl liquid-glass p-7 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-30" />
            
            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-cyan-400 uppercase tracking-wider font-bold">
                  Năng lực nền tảng cốt lõi
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-[11px] text-cyan-400 font-bold uppercase tracking-wide">01 / TƯ DUY KINH TẾ QUỐC TẾ</div>
                  <div className="text-sm font-semibold text-white mt-1">Kinh tế Đối ngoại — FTU</div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">Nắm vững các nguyên lý kinh tế vi mô, vĩ mô, nguyên lý kế toán và dòng chảy tiền tệ quốc tế.</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-[11px] text-purple-400 font-bold uppercase tracking-wide">02 / CHUYÊN SÂU TÀI CHÍNH - NGÂN HÀNG</div>
                  <div className="text-sm font-semibold text-white mt-1">Lý thuyết tài chính & Ngân hàng</div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">Thực hành phân tích thị trường tiền tệ, đầu tư quốc tế và cơ chế cấp vốn tín dụng.</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-[11px] text-pink-400 font-bold uppercase tracking-wide">03 / KHẢ NĂNG NGHIÊN CỨU & NGOẠI NGỮ</div>
                  <div className="text-sm font-semibold text-white mt-1">NCKH Cấp trường & IELTS 7.5</div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">Khả năng tự nghiên cứu học thuật độc lập, tra cứu tài liệu chuyên ngành bằng tiếng Anh và tiếng Trung.</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-5 mt-6 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-slate-400 font-medium">GPA Tích luỹ: 3.77 / 4.0</div>
              <a
                href="#s4"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Xem Thành tích</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
