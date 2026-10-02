/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Users
} from 'lucide-react';

export default function App() {
  const [memberCount, setMemberCount] = useState(1847);
  const groupUrl = 'https://discursiva-sefaz-al.apostolosconcursos.com.br/';

  const handleJoinGroup = () => {
    setMemberCount((prev) => prev + 1);
    window.open(groupUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#070d18] text-slate-100 p-4 sm:p-6 overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* Background Soft Glow (Clean, subtle, non-intrusive) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/12 rounded-full blur-[140px]" />
      </div>

      {/* Main Single-Fold Centered Group Box (Pure focus on the group and button) */}
      <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
        
        {/* Group Profile Avatar / Seal */}
        <div className="relative mb-5 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 p-1 shadow-2xl shadow-emerald-500/25 flex items-center justify-center transform transition duration-300 hover:scale-105">
            <div className="w-full h-full rounded-[22px] bg-[#0b162c] flex flex-col items-center justify-center text-emerald-400">
              <MessageCircle className="w-12 h-12 text-emerald-400 fill-emerald-400/20 mb-1" />
              <span className="text-[10px] font-extrabold tracking-wider text-amber-400 uppercase">
                SEFAZ-AL
              </span>
            </div>
          </div>
          {/* Online badge */}
          <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 ring-4 ring-[#070d18] flex items-center justify-center" title="Grupo Ativo">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </span>
        </div>

        {/* Group Name / Title (Short and Direct) */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-2">
          Grupo VIP · Discursiva SEFAZ-AL
        </h1>

        {/* Minimal Sub-line */}
        <p className="text-sm sm:text-base text-slate-300 font-medium mb-3">
          Apóstolos Concursos · Auditores Fiscais
        </p>

        {/* Clean Members count info */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-8 font-medium">
          <Users className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-200 font-bold tabular-nums">{memberCount.toLocaleString('pt-BR')}</span>
          <span>membros no grupo</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-emerald-400 font-semibold">Vagas Abertas</span>
        </div>

        {/* ============================================================== */}
        {/* THE MAIN ACTION BUTTON (THE ABSOLUTE CENTER OF ATTENTION) */}
        {/* ============================================================== */}
        <div className="relative w-full group">
          {/* High Intensity Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-300 animate-pulse-glow" />

          {/* Magnetic Main CTA */}
          <button
            onClick={handleJoinGroup}
            className="relative w-full bg-[#10b981] hover:bg-[#059669] text-white rounded-2xl py-5 px-6 sm:px-8 flex items-center justify-center gap-3 sm:gap-4 shadow-2xl transition-all duration-200 transform active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-shimmer" />

            {/* WhatsApp / Message Icon */}
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <MessageCircle className="w-6 h-6 text-white fill-white" />
            </div>

            {/* Main Label */}
            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-black tracking-wide uppercase flex items-center gap-2">
                ENTRAR NO GRUPO
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1.5 transition-transform" />
              </span>
              <span className="text-xs text-emerald-100 font-medium">
                Toque para entrar diretamente agora
              </span>
            </div>
          </button>
        </div>
        {/* ============================================================== */}
        {/* END OF MAIN ACTION BUTTON */}
        {/* ============================================================== */}

      </div>
    </div>
  );
}
