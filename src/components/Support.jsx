import React from 'react'

import { SlidersHorizontal, Laptop, Cpu, Heart, ShoppingCart, Info, X, Monitor, Landmark, Truck, PhoneCall, Search, MessageSquare, RefreshCw, ShieldCheck } from 'lucide-react';

import {Routes, Route } from 'react-router-dom'

const Support = () => {
            
    if (activeTab !== 'support') return null;
  return (

    <div>
  
 
      <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn">
        
        {/* Главный баннер Apple Support */}
        <div className="text-center py-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Поддержка NEXT_GEN PC</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">Получите быстрые ответы, инструкции от инженеров брендов и найдите технические решения для вашего оборудования.</p>
          
          {/* Поисковая строка Apple Style */}
          <div className="relative max-w-xl mx-auto pt-2">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-6" />
            <input type="text" placeholder="Поиск по темам, кодам ошибок или моделям..." className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-950/50 transition-all shadow-inner" />
          </div>
        </div>

        {/* Сетка основных категорий проблем */}
        <div>
          <h3 className="text-base font-bold text-white mb-4 tracking-tight">Популярные темы самообслуживания</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl hover:bg-slate-900 transition-all cursor-pointer group text-center sm:text-left">
              <div className="w-9 h-9 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0"><RefreshCw className="w-4 h-4" /></div>
              <h4 className="font-bold text-xs text-white group-hover:text-blue-400 transition-colors mb-1">Возврат и Обмен</h4>
              <p className="text-[11px] text-slate-400 leading-normal">Заводская программа легкой замены комплектующих в течение 14 дней.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl hover:bg-slate-900 transition-all cursor-pointer group text-center sm:text-left">
              <div className="w-9 h-9 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0"><ShieldCheck className="w-4 h-4" /></div>
              <h4 className="font-bold text-xs text-white group-hover:text-purple-400 transition-colors mb-1">Проверка гарантии</h4>
              <p className="text-[11px] text-slate-400 leading-normal">Онлайн проверка по серийному номеру из нашей официальной базы.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl hover:bg-slate-900 transition-all cursor-pointer group text-center sm:text-left">
              <div className="w-9 h-9 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0"><Cpu className="w-4 h-4" /></div>
              <h4 className="font-bold text-xs text-white group-hover:text-cyan-400 transition-colors mb-1">Драйверы и BIOS</h4>
              <p className="text-[11px] text-slate-400 leading-normal">Прямые ссылки на оригинальные образы прошивок плат ASUS, MSI и Dell.</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl hover:bg-slate-900 transition-all cursor-pointer group text-center sm:text-left">
              <div className="w-9 h-9 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0"><MessageSquare className="w-4 h-4" /></div>
              <h4 className="font-bold text-xs text-white group-hover:text-emerald-400 transition-colors mb-1">Чат с инженером</h4>
              <p className="text-[11px] text-slate-400 leading-normal">Прямая линия со специалистами по сборкам стационарных систем.</p>
            </div>

          </div>
        </div>

        {/* Блок Связи Apple Genius Bar Style */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-white tracking-tight">Предпочитаете личное общение?</h3>
            <p className="text-xs text-slate-400 max-w-md">Оставьте заявку, и наша служба заботы свяжется с вами, либо позвоните на горячую линию сервисного центра бренда.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a href="tel:88000000000" className="bg-white text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 hover:bg-slate-200 transition-colors">
              <PhoneCall className="w-3.5 h-3.5" /> Позвонить эксперту
            </a>
            <button onClick={() => alert('Чат-поддержка временно переведена в Telegram. Ссылка отправлена.')} className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs border border-slate-700 transition-colors">
              Начать чат онлайн
            </button>
          </div>
        </div>

      </div>
 
    </div>
  )
}

export default Support