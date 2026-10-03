import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

export default function ResourceVaultSection() {
  const roadmap = [
    {
      phase: "MỤC TIÊU NGẮN HẠN",
      role: "Thực tập sinh ➔ Chuyên viên Quản trị Tín dụng / QHKH",
      timeline: "Hiện tại — 2027",
      desc: "Tập trung hoàn thành xuất sắc kỳ thực tập tại phòng Quản trị tín dụng BIDV Chi nhánh Ngọc Khánh, thuần thục các phần mềm nghiệp vụ (SVS, ECM, CSR) và quy trình dòng chảy khoản vay. Tốt nghiệp loại Xuất sắc chuyên ngành Kinh tế Đối ngoại tại ĐH Ngoại Thương.",
      color: "from-cyan-400 to-blue-500",
      milestones: [
        "Nắm trọn vẹn nghiệp vụ soạn thảo Hợp đồng tín dụng & Thế chấp TSBĐ",
        "Hoàn thành khóa luận tốt nghiệp với GPA duy trì top đầu FTU",
        "Rèn luyện kỹ năng giải quyết tình huống và thẩm định rủi ro"
      ]
    },
    {
      phase: "MỤC TIÊU TRUNG & DÀI HẠN",
      role: "Chuyên viên Tài chính - Ngân hàng Cao cấp (Senior Banking Officer)",
      timeline: "2027 — 2030+",
      desc: "Phát triển chuyên sâu về thẩm định tín dụng doanh nghiệp quy mô vừa và lớn (SME / Large Corporate), tham gia các dự án quản trị rủi ro tài chính hoặc phát triển sản phẩm ngân hàng số, mang lại giá trị gia tăng bền vững cho tổ chức tài chính.",
      color: "from-purple-400 to-pink-500",
      milestones: [
        "Nâng cao chứng chỉ chuyên môn tài chính quốc tế (CFA / FRM)",
        "Đảm nhiệm các hợp đồng tín dụng và danh mục tài trợ lớn",
        "Đóng góp xây dựng quy trình số hóa và quản trị rủi ro ngân hàng"
      ]
    }
  ];

  const values = [
    {
      title: "Chính trực & Minh bạch",
      desc: "Tuyệt đối trung thực và chuẩn xác trong từng con số, từng dòng dữ liệu khách hàng và hồ sơ vay vốn.",
      color: "border-cyan-500/30 text-cyan-300"
    },
    {
      title: "Cẩn trọng & Tuân thủ",
      desc: "Thượng tôn pháp luật và quy chế tín dụng nội bộ, kiểm soát chặt chẽ tính hợp pháp, hợp lệ của tài sản bảo đảm.",
      color: "border-purple-500/30 text-purple-300"
    },
    {
      title: "Học hỏi Tốc độ cao",
      desc: "Chủ động cập nhật các quy định mới của Ngân hàng Nhà nước, thích ứng nhanh với phần mềm và công nghệ số.",
      color: "border-pink-500/30 text-pink-300"
    },
    {
      title: "Tận tâm vì Khách hàng",
      desc: "Đặt lợi ích và sự hài lòng của khách hàng làm kim chỉ nam, hỗ trợ quy trình vay vốn nhanh chóng, an toàn.",
      color: "border-emerald-500/30 text-emerald-300"
    }
  ];

  return (
    <section id="s8" className="py-20 relative overflow-hidden scroll-mt-28">
      {/* Glow backgrounds */}
      <div className="neon-glow-circle w-[450px] h-[450px] bg-cyan-500/10 top-20 right-10" />
      <div className="neon-glow-circle w-[450px] h-[450px] bg-purple-600/10 bottom-0 left-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-xs px-3 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold tracking-wide">
                TẦM NHÌN SỰ NGHIỆP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Định Hướng Nghề Nghiệp
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Tầm nhìn làm việc và cống hiến lâu dài trong lĩnh vực Tài chính - Ngân hàng với tinh thần kỷ luật và chuẩn mực.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-2xl liquid-glass border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Target className="w-4 h-4" />
            <span>Mục tiêu: Ngành Tài chính - Ngân hàng</span>
          </div>
        </div>

        {/* Roadmap: 2 Big Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-12">
          {roadmap.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl liquid-glass liquid-glass-hover p-7 sm:p-8 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-cyan-400 tracking-wide uppercase">
                    {card.phase}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                    {card.timeline}
                  </span>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {card.role}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-normal mb-5">
                  {card.desc}
                </p>

                <div className="space-y-2.5 border-t border-white/10 pt-4">
                  <div className="text-xs text-slate-400 mb-1.5 uppercase font-semibold">
                    Các cột mốc trọng tâm:
                  </div>
                  {card.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Cam kết đồng hành</span>
                <span className="text-cyan-400 font-bold">100% Chuyên tâm</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Work Values */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-7">
            <span className="text-xs text-purple-400 uppercase tracking-wider font-bold">
              GIÁ TRỊ CỐT LÕI
            </span>
            <h3 className="font-bold text-xl sm:text-2xl text-white mt-1">
              Nguyên Tắc Làm Việc Của Mai Chi
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className={`p-5 rounded-2xl liquid-glass border ${v.color} transition-all hover:-translate-y-1`}>
                <h4 className="font-bold text-base text-white mb-2">
                  {v.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
