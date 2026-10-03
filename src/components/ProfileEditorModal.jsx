import React, { useState } from 'react';
import { X, RotateCcw, Save, Download, Sparkles } from 'lucide-react';

export default function ProfileEditorModal({ 
  isOpen, 
  onClose, 
  profile, 
  metrics, 
  onSaveProfile, 
  onResetDefault 
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: profile.name,
    nickname: profile.nickname,
    title: profile.title,
    tagline: profile.tagline,
    founder: profile.founder,
    bio: profile.bio,
    location: profile.location,
    phone: profile.phone || "0395 569 183",
    facebook: profile.facebook || "Mai Chi Trinh",
    gpa: metrics.gpa || "3.77 / 4.0",
    ielts: metrics.ielts || "7.5",
    hsk: metrics.hsk || "HSK 3",
    bank: metrics.bank || "BIDV Ngọc Khánh",
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  const handleExportJSON = () => {
    const exportData = {
      profile: {
        ...profile,
        name: formData.name,
        nickname: formData.nickname,
        title: formData.title,
        tagline: formData.tagline,
        founder: formData.founder,
        bio: formData.bio,
        location: formData.location,
        phone: formData.phone,
        facebook: formData.facebook,
      },
      metrics: {
        ...metrics,
        gpa: formData.gpa,
        ielts: formData.ielts,
        hsk: formData.hsk,
        bank: formData.bank,
      }
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "trinh_mai_chi_portfolio.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-3xl liquid-glass border border-white/20 p-6 sm:p-8 shadow-2xl max-h-[92vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl text-white">
                Chỉnh sửa Hồ sơ — Trịnh Mai Chi
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Cập nhật thông tin học vấn, thực tập BIDV và phương thức liên hệ
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form id="profile-editor-form" onSubmit={handleSave} className="overflow-y-auto py-5 space-y-5 pr-1 flex-1">
          {/* Row 1: Name and Nickname */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Họ và Tên
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Tên thường gọi / Nickname
              </label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => handleChange('nickname', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Title and University */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Chức danh / Nghề nghiệp
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">
                Trường đại học / Ngành học
              </label>
              <input
                type="text"
                value={formData.founder}
                onChange={(e) => handleChange('founder', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 3: Tagline */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300">
              Định hướng nghề nghiệp / Tagline
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Row 4: Bio */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300">
              Giới thiệu bản thân (Bio)
            </label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none resize-none"
            />
          </div>

          {/* Row 5: Stats & Metrics */}
          <div className="pt-2">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
              // Các chỉ số học thuật & ngân hàng
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">GPA Ngoại Thương</label>
                <input
                  type="text"
                  value={formData.gpa}
                  onChange={(e) => handleChange('gpa', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">IELTS</label>
                <input
                  type="text"
                  value={formData.ielts}
                  onChange={(e) => handleChange('ielts', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">Tiếng Trung</label>
                <input
                  type="text"
                  value={formData.hsk}
                  onChange={(e) => handleChange('hsk', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">Ngân hàng thực tập</label>
                <input
                  type="text"
                  value={formData.bank}
                  onChange={(e) => handleChange('bank', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs"
                />
              </div>
            </div>
          </div>

          {/* Row 6: Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-400">Số điện thoại</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-400">Facebook</label>
              <input
                type="text"
                value={formData.facebook}
                onChange={(e) => handleChange('facebook', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-400">Khu vực sinh sống</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs"
              />
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onResetDefault}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-all"
              title="Khôi phục lại dữ liệu gốc của Mai Chi"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Khôi phục ban đầu</span>
            </button>

            <button
              type="button"
              onClick={handleExportJSON}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-all"
              title="Tải về file JSON"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Xuất JSON</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 transition-all"
            >
              Hủy
            </button>

            <button
              type="submit"
              form="profile-editor-form"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white text-xs font-bold font-mono hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Lưu hồ sơ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
