import React, { useState } from 'react';
import { Building2, Layers, Database, FileText, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function WorkExperienceSection() {
  const [activeStep, setActiveStep] = useState(0);

  const loanStages = [
    {
      step: "01",
      name: "Tiếp nhận hồ sơ",
      dept: "Từ phòng Khách hàng",
      detail: "Tiếp nhận bộ hồ sơ vay vốn từ phòng Khách hàng, rà soát danh mục văn bản và tài liệu đề nghị vay vốn theo quy định."
    },
    {
      step: "02",
      name: "Kiểm tra tính Pháp lý / Hợp lệ",
      dept: "Phòng Quản trị Tín dụng",
      detail: "Kiểm tra kỹ lưỡng tính hợp pháp, hợp lệ của hồ sơ vay, phương án sử dụng vốn và hồ sơ pháp lý của khách hàng."
    },
    {
      step: "03",
      name: "Soạn thảo Hợp đồng",
      dept: "Hợp đồng Tín dụng & TSBĐ",
      detail: "Soạn thảo Hợp đồng tín dụng, Hợp đồng thế chấp/cầm cố tài sản bảo đảm (TSBĐ) và đăng ký biện pháp bảo đảm."
    },
    {
      step: "04",
      name: "Giải ngân vốn vay",
      dept: "Hệ thống phần mềm BIDV",
      detail: "Thực hiện giải ngân khoản vay trên hệ thống phần mềm, kiểm tra các điều kiện tiên quyết trước khi phát tiền vay."
    },
    {
      step: "05",
      name: "Quản lý Tài sản Bảo đảm",
      dept: "Quản trị TSBĐ & Theo dõi nợ",
      detail: "Quản lý và lưu trữ hồ sơ tài sản bảo đảm, kiểm tra định kỳ hiện trạng TSBĐ, theo dõi lịch trả nợ và hạn mức tín dụng."
    },
    {
      step: "06",
      name: "Thu hồi nợ & Tất toán / Giải chấp",
      dept: "Hoàn tất khoản vay",
      detail: "Thu hồi nợ gốc và lãi vay, thực hiện thủ tục tất toán khoản vay và xóa thế chấp/giải chấp tài sản bảo đảm."
    }
  ];

  const workCards = [
    {
      id: "softwares",
      title: "Vận hành hệ thống phần mềm nghiệp vụ BIDV (SVS, ECM, CSR,..)",
      category: "Phần mềm nghiệp vụ ngân hàng",
      desc: "Được tiếp xúc và tìm hiểu cách vận hành một số phần mềm nghiệp vụ của BIDV (SVS, ECM, CSR,..) trong việc nhập liệu, khởi tạo hợp đồng, kiểm tra lịch trả nợ, hạn mức tín dụng.",
      icon: Database,
      color: "from-cyan-400 to-blue-500",
      bullets: [
        "Nhập liệu và kiểm soát thông tin khoản vay khách hàng",
        "Khởi tạo hợp đồng tín dụng trên hệ thống phần mềm",
        "Kiểm tra lịch trả nợ định kỳ và quản lý hạn mức tín dụng"
      ]
    },
    {
      id: "lifecycle",
      title: "Nắm vững quy trình / dòng chảy khoản vay từ tiếp nhận đến giải chấp",
      category: "Quy trình cấp tín dụng toàn diện",
      desc: "Hiểu rõ dòng chảy của một khoản vay: Từ khâu tiếp nhận hồ sơ từ phòng Khách hàng, kiểm tra tính hợp pháp/hợp lệ, soạn thảo hợp đồng, giải ngân, quản lý tài sản bảo đảm (TSBĐ), cho đến thu hồi nợ và tất toán/giải chấp.",
      icon: Layers,
      color: "from-purple-400 to-indigo-500",
      bullets: [
        "Nắm chắc toàn diện chu trình 6 bước luân chuyển khoản vay",
        "Hiểu sâu tính phối hợp giữa phòng Khách hàng và phòng Quản trị Tín dụng",
        "Kiểm soát rủi ro tác nghiệp trong từng khâu xử lý chứng từ"
      ]
    },
    {
      id: "contracts",
      title: "Soạn thảo & lập Hợp đồng tín dụng, Hợp đồng thế chấp/cầm cố TSBĐ",
      category: "Hồ sơ pháp lý & Hợp đồng tín dụng",
      desc: "Lập các loại Hợp đồng tín dụng, Hợp đồng thế chấp/cầm cố tài sản bảo đảm (TSBĐ), kiểm tra tính chuẩn mực của các điều khoản đảm bảo an toàn vốn vay ngân hàng.",
      icon: FileText,
      color: "from-pink-400 to-rose-500",
      bullets: [
        "Lập và rà soát các loại Hợp đồng tín dụng cá nhân & doanh nghiệp",
        "Lập Hợp đồng thế chấp / cầm cố tài sản bảo đảm (TSBĐ)",
        "Tuân thủ nghiêm ngặt quy định pháp lý và quy chế nội bộ của BIDV"
      ]
    }
  ];

  return (
    <section id="experience" className="py-14 sm:py-16 relative overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-10 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-orb-2" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[110px] pointer-events-none animate-orb-1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-3.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>WORK EXPERIENCE</span>
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              KINH NGHIỆM LÀM VIỆC
            </h2>
            <div className="text-base sm:text-lg font-bold text-gradient-rainbow mt-1">
              Thực tập sinh phòng Quản trị tín dụng tại Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV) — Chi nhánh Ngọc Khánh Hà Nội
            </div>
          </div>

          <div className="p-4 rounded-2xl liquid-glass border border-emerald-400/40 flex items-center gap-3.5 shrink-0 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] text-slate-300 font-medium">Đơn vị công tác</div>
              <div className="text-base font-extrabold text-white">BIDV Ngọc Khánh</div>
              <div className="text-[11px] text-emerald-300 font-semibold">Phòng Quản trị tín dụng</div>
            </div>
          </div>
        </div>

        {/* 3 Core Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {workCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="rounded-3xl liquid-glass liquid-glass-hover p-6 sm:p-7 border border-white/15 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.color} p-[1.5px] shadow-md`}>
                      <div className="w-full h-full bg-[#0a1026] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-cyan-300 font-semibold">
                      {card.category}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {card.title}
                  </h3>

                  <p className="text-slate-200 text-sm leading-relaxed font-normal mb-4">
                    {card.desc}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-3.5">
                    {card.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Phòng Quản trị Tín dụng</span>
                  <span className="text-emerald-300 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Đã thực hành thành thạo
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Loan Lifecycle Pipeline */}
        <div className="rounded-3xl liquid-glass p-7 sm:p-8 border border-cyan-400/40 bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-purple-950/30 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs text-cyan-300 uppercase tracking-wider font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Quy trình thực tế tại ngân hàng</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Dòng Chảy Của Một Khoản Vay (Loan Lifecycle)
              </h3>
            </div>
            <span className="text-xs text-cyan-200 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/40 font-medium">
              Nhấn vào từng bước để xem quy trình chi tiết
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
                      ? 'bg-gradient-to-b from-cyan-500/30 to-purple-500/30 border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.3)]'
                      : 'bg-white/[0.04] border border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                      Bước {stage.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white line-clamp-1">
                    {stage.name}
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                    {stage.dept}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Callout */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-black/60 border border-cyan-400/40 flex items-start gap-4 shadow-inner">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0 font-extrabold text-base">
              {loanStages[activeStep].step}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white">
                  {loanStages[activeStep].name}
                </span>
                <span className="text-xs text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 font-semibold">
                  {loanStages[activeStep].dept}
                </span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm mt-2 font-normal leading-relaxed">
                {loanStages[activeStep].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
