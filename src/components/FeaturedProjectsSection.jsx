import React, { useState } from 'react';
import { Building2, Layers, Database, FileText, CheckCircle2 } from 'lucide-react';

export default function FeaturedProjectsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const loanStages = [
    {
      step: "01",
      name: "Tiếp nhận hồ sơ",
      dept: "Từ phòng Khách hàng",
      detail: "Tiếp nhận bộ hồ sơ vay vốn từ chuyên viên quan hệ khách hàng, rà soát danh mục tài liệu theo quy định."
    },
    {
      step: "02",
      name: "Kiểm tra Pháp lý & Hợp lệ",
      dept: "Phòng Quản trị Tín dụng",
      detail: "Kiểm tra tính pháp lý của khách hàng, tính hợp lệ của phương án vay và tình trạng tài sản bảo đảm (TSBĐ)."
    },
    {
      step: "03",
      name: "Soạn thảo Hợp đồng",
      dept: "Nghiệp vụ Tín dụng",
      detail: "Lập Hợp đồng tín dụng, Hợp đồng thế chấp/cầm cố tài sản bảo đảm, đăng ký giao dịch bảo đảm."
    },
    {
      step: "04",
      name: "Giải ngân vốn vay",
      dept: "Hệ thống phần mềm BIDV",
      detail: "Khởi tạo hồ sơ giải ngân trên hệ thống phần mềm ngân hàng, kiểm tra điều kiện tiên quyết trước khi xuất tiền."
    },
    {
      step: "05",
      name: "Quản lý Tài sản Bảo đảm",
      dept: "Theo dõi sau giải ngân",
      detail: "Lưu trữ hồ sơ tài sản gốc vào kho an toàn, quản lý hạn mức, kiểm tra định kỳ tình trạng tài sản và lịch trả nợ."
    },
    {
      step: "06",
      name: "Tất toán & Giải chấp",
      dept: "Hoàn tất khoản vay",
      detail: "Thu hồi nợ gốc và lãi đầy đủ, tiến hành thủ tục xuất kho TSBĐ và thực hiện xóa đăng ký giao dịch bảo đảm."
    }
  ];

  const workCards = [
    {
      id: "bidv_softwares",
      title: "Vận hành Phần mềm Nghiệp vụ BIDV",
      badge: "Hệ thống: SVS, ECM, CSR,..",
      icon: Database,
      color: "from-cyan-500 to-blue-600",
      desc: "Được tiếp xúc và tìm hiểu cách vận hành các phần mềm nghiệp vụ ngân hàng chuyên sâu của BIDV (SVS, ECM, CSR,..) trong việc nhập liệu thông tin khách hàng, khởi tạo hợp đồng, tra cứu lịch trả nợ và hạn mức tín dụng.",
      highlights: [
        "Nhập liệu và kiểm soát dữ liệu khách hàng vay vốn",
        "Khởi tạo hợp đồng và quản lý số liệu trên phần mềm SVS",
        "Tra cứu hạn mức và theo dõi lịch thanh toán nợ kỳ hạn"
      ]
    },
    {
      id: "bidv_contracts",
      title: "Soạn thảo Hợp đồng Tín dụng & TSBĐ",
      badge: "Hồ sơ pháp lý tín dụng",
      icon: FileText,
      color: "from-purple-500 to-pink-600",
      desc: "Trực tiếp tham gia lập và kiểm tra các loại Hợp đồng tín dụng, Hợp đồng thế chấp/cầm cố TSBĐ, biên bản định giá và tài liệu bảo đảm tiền vay theo đúng chuẩn mẫu biểu BIDV và pháp luật hiện hành.",
      highlights: [
        "Lập Hợp đồng tín dụng cá nhân và doanh nghiệp",
        "Lập Hợp đồng thế chấp / cầm cố tài sản bảo đảm (TSBĐ)",
        "Đảm bảo tính chặt chẽ về điều khoản pháp lý và bảo vệ vốn vay"
      ]
    },
    {
      id: "bidv_lifecycle",
      title: "Hiểu rõ Dòng chảy Khoản vay",
      badge: "Loan Lifecycle Management",
      icon: Layers,
      color: "from-emerald-500 to-teal-600",
      desc: "Nắm vững toàn bộ chu trình luân chuyển hồ sơ: từ tiếp nhận từ phòng Khách hàng, kiểm tra tính hợp pháp/hợp lệ, soạn thảo hợp đồng, giải ngân, quản lý TSBĐ, đến thu hồi nợ và tất toán/giải chấp.",
      highlights: [
        "Phối hợp nhịp nhàng giữa phòng Khách hàng và phòng Quản trị Tín dụng",
        "Kiểm soát rủi ro tác nghiệp trong từng khâu xử lý",
        "Quy trình tất toán và xóa thế chấp minh bạch, an toàn"
      ]
    }
  ];

  return (
    <section id="s5" className="py-20 relative overflow-hidden scroll-mt-28">
      {/* Background glow */}
      <div className="neon-glow-circle w-[500px] h-[500px] bg-purple-600/10 top-1/3 -right-20" />
      <div className="neon-glow-circle w-[400px] h-[400px] bg-cyan-500/10 bottom-10 left-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-xs px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold tracking-wide">
                KINH NGHIỆM LÀM VIỆC THỰC TẾ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              BIDV — Chi Nhánh Ngọc Khánh Hà Nội
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              <span className="text-emerald-400 font-semibold">Vị trí:</span> Thực tập sinh phòng Quản trị tín dụng tại Ngân hàng TMCP Đầu tư và Phát triển Việt Nam.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl liquid-glass border border-emerald-500/30 flex items-center gap-3">
            <Building2 className="w-7 h-7 text-emerald-400" />
            <div>
              <div className="text-[11px] text-slate-400">Đơn vị công tác</div>
              <div className="text-sm font-bold text-white">BIDV Ngọc Khánh</div>
            </div>
          </div>
        </div>

        {/* 3 Core Experience Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {workCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="rounded-3xl liquid-glass liquid-glass-hover p-6 sm:p-7 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${card.color} p-[1.5px] shadow-md`}>
                      <div className="w-full h-full bg-[#080d1a] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 font-medium">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-normal mb-4">
                    {card.desc}
                  </p>

                  <div className="space-y-2 border-t border-white/5 pt-3.5">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Phòng Quản trị Tín dụng</span>
                  <span className="text-emerald-400 font-semibold">Đã thành thạo</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Loan Lifecycle Pipeline */}
        <div className="rounded-3xl liquid-glass p-7 sm:p-8 border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-black to-purple-950/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs text-cyan-400 uppercase tracking-wider font-bold">
                Quy trình nghiệp vụ thực tế
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Dòng Chảy Của Một Khoản Vay (Loan Lifecycle)
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Nhấn vào từng bước để xem mô tả chi tiết
            </span>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {loanStages.map((stage, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.2)]'
                      : 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                      Bước {stage.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white line-clamp-1">
                    {stage.name}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {stage.dept}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Callout */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-black/60 border border-cyan-400/30 flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold text-sm">
              {loanStages[activeStep].step}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white">
                  {loanStages[activeStep].name}
                </span>
                <span className="text-xs text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 font-medium">
                  {loanStages[activeStep].dept}
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm mt-1.5 font-normal leading-relaxed">
                {loanStages[activeStep].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
