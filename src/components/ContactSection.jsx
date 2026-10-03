import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MapPin, MessageSquare, ArrowRight, Building2, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Cơ hội Tuyển dụng / Thực tập Ngân hàng',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0395569183');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    try {
      confetti({
        particleCount: 130,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f5ff', '#a855f7', '#ec4899', '#10b981', '#f59e0b']
      });
    } catch (err) {
      console.log('Confetti trigger:', err);
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative overflow-hidden scroll-mt-24">
      {/* Background glowing gradients */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[130px] pointer-events-none animate-orb-1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>CONTACT INFORMATION</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            THÔNG TIN LIÊN HỆ
          </h2>
          <div className="text-lg sm:text-xl font-bold text-gradient-rainbow mt-1">
            Kết nối trực tiếp
          </div>
          <p className="text-slate-300 text-sm sm:text-base mt-2.5 font-normal max-w-xl mx-auto leading-relaxed">
            Rất mong muốn có cơ hội trao đổi, phỏng vấn và cống hiến năng lực trong các môi trường Tài chính - Ngân hàng chuyên nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Panel (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl liquid-glass p-7 sm:p-8 border border-white/15 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3.5 border-b border-white/15">
              <h3 className="font-extrabold text-xl text-white">
                Thông tin cá nhân
              </h3>
              <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-semibold">
                Sẵn sàng nhận việc
              </span>
            </div>

            <div className="space-y-3.5">
              {/* Phone / Zalo */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 flex items-center justify-between transition-all group">
                <a href="tel:0395569183" className="flex items-center gap-3.5 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-400/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-300 font-medium">Điện thoại / Zalo</div>
                    <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      0395 569 183
                    </div>
                  </div>
                </a>
                <button
                  onClick={handleCopyPhone}
                  title="Sao chép số điện thoại"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Facebook */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-400/40">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-300 font-medium">Facebook</div>
                  <div className="text-base font-bold text-white">
                    Mai Chi Trinh
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center shrink-0 border border-pink-400/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-300 font-medium">Khu vực sống / Địa chỉ</div>
                  <div className="text-base font-bold text-white">
                    Yên Hoà, Cầu Giấy, Hà Nội
                  </div>
                </div>
              </div>

              {/* University */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/40">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-300 font-medium">Trường đào tạo</div>
                  <div className="text-sm font-bold text-white">
                    Trường Đại học Ngoại Thương (FTU)
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">Sinh viên năm 3 Kinh tế Đối ngoại • GPA 3.77</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 text-xs text-slate-300 flex items-center justify-between">
              <span>Định hướng: Tài chính - Ngân hàng</span>
              <span className="text-cyan-300 font-bold">GPA: 3.77 / 4.0</span>
            </div>
          </div>

          {/* Right Interactive Form (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl liquid-glass p-7 sm:p-9 border border-white/15 relative shadow-2xl">
            {submitted ? (
              <div className="py-14 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-extrabold text-2xl text-white">
                  Đã gửi tin nhắn đến Mai Chi!
                </h3>
                <p className="text-slate-200 text-sm max-w-md mx-auto font-normal">
                  Cảm ơn Quý Nhà tuyển dụng / Đối tác đã liên hệ. Mai Chi sẽ phản hồi lại qua Email hoặc Số điện thoại trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-200">
                      Họ tên người gửi / Đơn vị <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Anh / Chị Tuyển dụng"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-200">
                      Địa chỉ Email <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-200">
                      Số điện thoại liên hệ
                    </label>
                    <input
                      type="tel"
                      placeholder="09xx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-200">
                      Mục đích liên hệ
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e1736] border border-white/15 focus:border-cyan-400 focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="Cơ hội Tuyển dụng / Thực tập Ngân hàng">Cơ hội Tuyển dụng / Thực tập Ngân hàng</option>
                      <option value="Lời mời phỏng vấn vị trí Tín dụng / QHKH">Lời mời phỏng vấn vị trí Tín dụng / QHKH</option>
                      <option value="Trao đổi học thuật / Nghiên cứu khoa học">Trao đổi học thuật / Nghiên cứu khoa học</option>
                      <option value="Mục đích khác">Mục đích khác</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-200">
                    Nội dung nhắn gửi
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Nhập thông điệp, yêu cầu tuyển dụng hoặc lời nhắn gửi cho Mai Chi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-bold text-sm hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all hover:scale-[1.01] flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
                >
                  <span>Gửi tin nhắn liên hệ</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
          <div>
            © {new Date().getFullYear()} TRỊNH MAI CHI — Sinh viên Đại học Ngoại Thương & BIDV Intern.
          </div>
          <div className="flex items-center gap-2 text-cyan-300 font-medium">
            <span>Yên Hoà, Cầu Giấy, Hà Nội • Điện thoại: 0395 569 183</span>
          </div>
        </div>
      </div>
    </section>
  );
}
