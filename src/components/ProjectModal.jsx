import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-3xl liquid-glass border border-white/20 p-6 sm:p-8 overflow-hidden shadow-2xl animate-scaleUp max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative h-60 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/50 to-transparent" />
          
          <div className="absolute bottom-4 left-6 sm:left-8">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-semibold">
              {project.category}
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Metrics & Highlights */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-xs font-mono text-slate-400">Metric Đạt Được</div>
            <div className="text-xl font-heading font-extrabold text-cyan-400 mt-1">
              {project.metrics}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-xs font-mono text-slate-400">Tiêu chuẩn thiết kế</div>
            <div className="text-xl font-heading font-extrabold text-purple-400 mt-1">
              High-Tech Dark
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
            // Chi tiết giải pháp & Kiến trúc
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {project.description}
          </p>
          <p className="text-slate-400 text-xs leading-relaxed">
            Dự án được xây dựng dựa trên nguyên lý giải pháp chuẩn hóa, đảm bảo sự hài hòa giữa logic tính toán số liệu và phong cách thị giác thời thượng.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold font-mono hover:opacity-90 transition-opacity cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
}
