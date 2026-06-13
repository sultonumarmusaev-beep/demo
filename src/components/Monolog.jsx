// import React, { useState } from 'react';
// import { 
//   SlidersHorizontal, Laptop, Cpu, Heart, ShoppingCart, Info, X, 
//   Monitor, Keyboard, ShieldCheck, Wrench, HelpCircle, Phone, 
//   AlertTriangle, BookOpen, CheckCircle
// } from 'lucide-react';

// // --- РАСШИРЕННАЯ БАЗА ДАННЫХ ---
// const computersData = [
//   // Твои исходные 40 позиций (для экономии места в примере оставим ключевые, структура полностью сохранена)
//   {
//     id: 1, name: "ASUS ROG Strix SCAR 18 (2024)", category: "gaming-laptop", type: "computer", price: 3499,
//     gpu: "NVIDIA RTX 4090 Laptop 16GB", cpu: "Intel Core i9-14900HX", ram: "32GB DDR5 5600MHz",
//     image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=500",
//     specs: { ssd: "2TB PCIe 4.0 NVMe M.2", motherboard: "ASUS ROG Proprietary", power: "330W AC Adapter", cooling: "ROG Intelligent Cooling", case: "Алюминий + Пластик", os: "Windows 11 Home", warranty: "24 месяца", wifi: "Wi-Fi 6E", bluetooth: "Bluetooth 5.3", weight: "3.10 кг", ports: "Thunderbolt 4, HDMI 2.1", sound: "4 динамика Dolby Atmos" }
//   },
//   {
//     id: 21, name: "Apple MacBook Air 13 M3 (2024)", category: "office-laptop", type: "computer", price: 1099,
//     gpu: "Apple 8-core GPU Integrated", cpu: "Apple M3 (8 ядер)", ram: "16GB Unified Memory",
//     image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=500",
//     specs: { ssd: "512GB Apple Proprietary", motherboard: "Apple Silicon SoC", power: "30W USB-C Adapter", cooling: "Пассивное бесшумное", case: "Цельный алюминий", os: "macOS Sonoma", warranty: "12 месяцев", wifi: "Wi-Fi 6E", bluetooth: "Bluetooth 5.3", weight: "1.24 кг", ports: "2x MagSafe 3, 2x Thunderbolt", sound: "4 динамика" }
//   }
// ];

// const keyboardsData = [
//   {
//     id: 101, name: "Logitech G Pro X TKL", type: "keyboard", price: 199,
//     gpu: "Переключатели: GX Brown Tactile", cpu: "Подсветка: LIGHTSYNC RGB", ram: "Интерфейс: Радиоканал / Bluetooth / USB",
//     image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500",
//     specs: { type: "Механическая", layout: "ANSI (TKL - без цифрового блока)", keycaps: "PBT Double-shot", battery: "До 50 часов работы", weight: "930 г", warranty: "24 месяца", features: "Съемный кабель, чехол в комплекте, программируемые F-клавиши" }
//   },
//   {
//     id: 102, name: "Razer BlackWidow V4 Pro", type: "keyboard", price: 229,
//     gpu: "Переключатели: Razer Green Mechanical", cpu: "Подсветка: Razer Chroma RGB (двусторонняя)", ram: "Интерфейс: Проводной (Type-C)",
//     image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=500",
//     specs: { type: "Механическая", layout: "Полноразмерная (100%)", keycaps: "ABS с лазерной гравировкой", macroKeys: "5 выделенных макро-кнопок + ролики", weight: "1250 г", warranty: "12 месяцев", features: "Магнитная подставка под запястья с подсветкой, сквозной порт USB 2.0" }
//   },
//   {
//     id: 103, name: "Keychron Q1 Pro", type: "keyboard", price: 189,
//     gpu: "Переключатели: Keychron K Pro Banana", cpu: "Корпус: Полностью алюминиевый с ЧПУ", ram: "Интерфейс: Bluetooth 5.1 / Проводной",
//     image: "https://images.unsplash.com/photo-1626958011299-47a329d56417?auto=format&fit=crop&q=80&w=500",
//     specs: { type: "Механическая (Кастомная)", layout: "75%", hotSwap: "Есть (3/5 pin)", os: "Полная поддержка macOS / Windows", battery: "4000 mAh", weight: "1736 г", warranty: "12 месяцев", features: "Конструкция Gasket Mount, поддержка QMK/VIA для переназначения клавиш" }
//   }
// ];

// const monitorsData = [
//   {
//     id: 201, name: "ASUS ROG Swift OLED PG27AQDM", type: "monitor", price: 899,
//     gpu: "Матрица: WOLED (Глянцевая)", cpu: "Разрешение: 2560x1440 (2K QHD)", ram: "Частота: 240Hz / Время отклика: 0.03ms",
//     image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500",
//     specs: { диагональ: "26.5 дюймов", яркость: "450 нит (типичная) / 1000 нит (пиковая)", контрастность: "1500000:1", порты: "2x HDMI 2.0, 1x DisplayPort 1.4, USB Hub", HDR: "HDR10", технологии: "G-Sync Compatible, FreeSync Premium", warranty: "36 месяцев" }
//   },
//   {
//     id: 202, name: "Samsung Odyssey G7 32\"", type: "monitor", price: 699,
//     gpu: "Матрица: VA (Изогнутая 1000R)", cpu: "Разрешение: 2560x1440", ram: "Частота: 240Hz / Время отклика: 1ms GtG",
//     image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=500",
//     specs: { диагональ: "31.5 дюймов", подсветка: "Quantum Dot (QLED)", порты: "2x DisplayPort 1.4, 1x HDMI 2.0", HDR: "Vesa DisplayHDR 600", технологии: "AMD FreeSync Premium Pro", weight: "8.2 кг", warranty: "24 месяца" }
//   }
// ];

// // Объединенный массив для поиска и фильтрации в глобальной корзине
// const allProducts = [...computersData, ...keyboardsData, ...monitorsData];

// // --- ДАННЫЕ О МАСТЕРАХ ПО РЕМОНТУ ---
// const repairMasters = [
//   { id: 1, name: "Александр Громов", experience: "8 лет", phone: "+7 (999) 123-45-67", special: "Компонентный ремонт ноутбуков, пайка BGA, восстановление после залития.", bio: "Бывший ведущий инженер официального сервисного центра ASUS. Восстанавливает платы любой сложности, на которые другие мастера махнули рукой." },
//   { id: 2, name: "Михаил Левин", experience: "12 лет", phone: "+7 (999) 765-43-21", special: "Сборка, скальпирование процессоров, кастомное водяное охлаждение (СЖО).", bio: "Специализируется на мощных игровых станциях и серверах. Поможет подобрать идеальный конфиг, настроить разгон ОЗУ и сделать компьютер бесшумным." },
//   { id: 3, name: "Дмитрий СТО", experience: "5 лет", phone: "+7 (999) 444-55-66", special: "Модульный ремонт, чистка, замена термопасты (и жидкого металла), апгрейд.", bio: "Быстро и аккуратно реанимирует «тормозящие» ноутбуки. Делает профилактику прямо при вас за 40 минут. Работает на выезд." }
// ];


// export default function App() {
//   const [activeTab, setActiveTab] = useState('catalog'); // catalog, support, repair, cart, favorites
//   const [catalogSubTab, setCatalogSubTab] = useState('computers'); // computers, keyboards, monitors
  
//   const [selectedCategory, setSelectedCategory] = useState('all'); // для ПК
//   const [maxPrice, setMaxPrice] = useState(4000);

//   const [cart, setCart] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
  
//   const [address, setAddress] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [phone, setPhone] = useState('');
//   const [orderStatus, setOrderStatus] = useState(null);

//   // Фильтрация для каталога
//   const getFilteredProducts = () => {
//     if (catalogSubTab === 'computers') {
//       return computersData.filter(pc => {
//         const matchCategory = selectedCategory === 'all' || pc.category === selectedCategory;
//         const matchPrice = pc.price <= maxPrice;
//         return matchCategory && matchPrice;
//       });
//     } else if (catalogSubTab === 'keyboards') {
//       return keyboardsData.filter(kb => kb.price <= maxPrice);
//     } else if (catalogSubTab === 'monitors') {
//       return monitorsData.filter(mon => mon.price <= maxPrice);
//     }
//     return [];
//   };

//   const toggleFavorite = (item) => {
//     if (favorites.some(f => f.id === item.id)) {
//       setFavorites(favorites.filter(f => f.id !== item.id));
//     } else {
//       setFavorites([...favorites, item]);
//     }
//   };

//   const addToCart = (item) => {
//     if (!cart.some(c => c.id === item.id)) {
//       setCart([...cart, item]);
//     }
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   const handleCheckout = (e) => {
//     e.preventDefault();
//     if (!address || !cardNumber || !phone) {
//       alert('Пожалуйста, заполните все поля оформления заказа.');
//       return;
//     }
//     setOrderStatus('success');
//     setTimeout(() => {
//       setCart([]);
//       setAddress('');
//       setCardNumber('');
//       setPhone('');
//       setOrderStatus(null);
//       setActiveTab('catalog');
//     }, 3000);
//   };

//   const renderProductCard = (item) => (
//     <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group">
//       <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
//         <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
//         <button 
//           onClick={(e) => { e.stopPropagation(); toggleFavorite(item); }} 
//           className="absolute top-3 right-3 p-2 bg-slate-950/60 backdrop-blur-md rounded-full border border-slate-800 hover:bg-slate-800 text-slate-100 transition-colors"
//         >
//           <Heart className={`w-4 h-4 ${favorites.some(f => f.id === item.id) ? 'fill-pink-500 text-pink-500' : 'text-slate-400'}`} />
//         </button>
//       </div>
//       <div className="p-5 flex-1 flex flex-col justify-between">
//         <div>
//           <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
//             {item.type === 'computer' ? 'Компьютер / Ноутбук' : item.type === 'keyboard' ? 'Клавиатура' : 'Монитор'}
//           </span>
//           <h3 className="text-lg font-bold text-slate-100 line-clamp-1">{item.name}</h3>
//           <div className="mt-3 space-y-1 text-xs text-slate-400">
//             <p className="truncate">{item.cpu || item.layout || item.specs.layout}</p>
//             <p className="truncate">{item.gpu || item.specs.type || item.specs.диагональ}</p>
//             <p className="truncate">{item.ram || item.specs.features || item.specs.технологии}</p>
//           </div>
//         </div>
//         <div className="mt-5">
//           <div className="flex items-baseline justify-between mb-4">
//             <span className="text-2xl font-black text-slate-100">${item.price}</span>
//             <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">В наличии</span>
//           </div>
//           <div className="grid grid-cols-3 gap-2">
//             <button 
//               onClick={() => setSelectedProduct(item)}
//               className="bg-slate-800 hover:bg-slate-700 text-slate-200 p-2 rounded-lg transition-colors flex items-center justify-center border border-slate-700"
//               title="Характеристики"
//             >
//               <Info className="w-4 h-4" />
//             </button>
//             <button 
//               onClick={() => addToCart(item)}
//               className="col-span-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
//             >
//               <ShoppingCart className="w-4 h-4" />
//               {cart.some(c => c.id === item.id) ? 'В корзине' : 'Купить'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
//       {/* --- ШАПКА / НАВИГАЦИЯ --- */}
//       <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('catalog')}>
//             <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
//             <span className="font-black text-xl tracking-wider text-slate-100 uppercase">Cyber<span className="text-cyan-400">Tech</span></span>
//           </div>
          
//           <nav className="hidden md:flex items-center gap-1">
//             <button 
//               onClick={() => setActiveTab('catalog')} 
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'catalog' ? 'bg-slate-900 text-cyan-400 border border-slate-800' : 'text-slate-400 hover:text-slate-200'}`}
//             >
//               Каталог товаров
//             </button>
//             <button 
//               onClick={() => setActiveTab('repair')} 
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'repair' ? 'bg-slate-900 text-cyan-400 border border-slate-800' : 'text-slate-400 hover:text-slate-200'}`}
//             >
//               Мастера по ремонту
//             </button>
//             <button 
//               onClick={() => setActiveTab('support')} 
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'support' ? 'bg-slate-900 text-cyan-400 border border-slate-800' : 'text-slate-400 hover:text-slate-200'}`}
//             >
//               Служба поддержки
//             </button>
//           </nav>

//           <div className="flex items-center gap-2">
//             <button onClick={() => setActiveTab('favorites')} className="p-2 text-slate-400 hover:text-pink-500 relative transition-colors">
//               <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-pink-500 text-pink-500' : ''}`} />
//               {favorites.length > 0 && <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{favorites.length}</span>}
//             </button>
//             <button onClick={() => setActiveTab('cart')} className="p-2 text-slate-400 hover:text-cyan-400 relative transition-colors">
//               <ShoppingCart className={`w-5 h-5 ${cart.length > 0 ? 'text-cyan-400' : ''}`} />
//               {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-cyan-400 text-slate-950 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cart.length}</span>}
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-8">
        
//         {/* ================= СТРАНИЦА КАТАЛОГА ================= */}
//         {activeTab === 'catalog' && (
//           <div>
//             {/* ПОДСТРАНИЦЫ / ТАБЫ КАТАЛОГА */}
//             <div className="flex border-b border-slate-900 mb-6 gap-2">
//               <button 
//                 onClick={() => setCatalogSubTab('computers')}
//                 className={`pb-3 px-4 flex items-center gap-2 border-b-2 font-bold text-sm transition-colors ${catalogSubTab === 'computers' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
//               >
//                 <Laptop className="w-4 h-4" />
//                 Компьютеры и Ноутбуки
//               </button>
//               <button 
//                 onClick={() => setCatalogSubTab('keyboards')}
//                 className={`pb-3 px-4 flex items-center gap-2 border-b-2 font-bold text-sm transition-colors ${catalogSubTab === 'keyboards' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
//               >
//                 <Keyboard className="w-4 h-4" />
//                 Клавиатуры
//               </button>
//               <button 
//                 onClick={() => setCatalogSubTab('monitors')}
//                 className={`pb-3 px-4 flex items-center gap-2 border-b-2 font-bold text-sm transition-colors ${catalogSubTab === 'monitors' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
//               >
//                 <Monitor className="w-4 h-4" />
//                 Мониторы
//               </button>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* ФИЛЬТРЫ */}
//               <div className="w-full lg:w-64 shrink-0 space-y-6">
//                 <div className="bg-slate-900 border border-slate-900 rounded-xl p-5 shadow-sm">
//                   <div className="flex items-center gap-2 text-slate-100 font-bold mb-4">
//                     <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
//                     <span>Фильтры цен</span>
//                   </div>
//                   <div>
//                     <label className="text-xs text-slate-400 flex justify-between mb-2">
//                       <span>Макс. цена:</span>
//                       <span className="font-bold text-slate-200">${maxPrice}</span>
//                     </label>
//                     <input 
//                       type="range" min="100" max="4000" step="50"
//                       value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
//                       className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
//                     />
//                   </div>

//                   {catalogSubTab === 'computers' && (
//                     <div className="mt-6 pt-6 border-t border-slate-800">
//                       <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">Категория ПК</span>
//                       <div className="space-y-2">
//                         {['all', 'gaming-laptop', 'gaming-pc', 'office-laptop', 'office-pc'].map((cat) => (
//                           <button
//                             key={cat} onClick={() => setSelectedCategory(cat)}
//                             className={`w-full text-left px-3 py-1.5 rounded text-xs capitalize transition-colors ${selectedCategory === cat ? 'bg-cyan-500/10 text-cyan-400 font-medium border border-cyan-500/20' : 'hover:bg-slate-800 text-slate-400'}`}
//                           >
//                             {cat === 'all' ? 'Все устройства' : cat.replace('-', ' ')}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* СЕТКА ТОВАРОВ */}
//               <div className="flex-1">
//                 {getFilteredProducts().length === 0 ? (
//                   <div className="text-center py-20 bg-slate-900/50 border border-dashed border-slate-800 rounded-2xl">
//                     <p className="text-slate-400 font-medium">Нет товаров, соответствующих выбранным критериям.</p>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//                     {getFilteredProducts().map(renderProductCard)}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ================= СТРАНИЦА МАСТЕРОВ ПО РЕМОНТУ ================= */}
//         {activeTab === 'repair' && (
//           <div>
//             <div className="mb-8">
//               <h2 className="text-3xl font-black text-slate-100 flex items-center gap-3">
//                 <Wrench className="w-8 h-8 text-cyan-400" /> Наш штат мастеров по ремонту
//               </h2>
//               <p className="text-slate-400 mt-2">Проверенные специалисты по восстановлению, обслуживанию и кастомизации вашей техники.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {repairMasters.map(master => (
//                 <div key={master.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
//                   <div>
//                     <div className="flex justify-between items-start mb-4">
//                       <div>
//                         <h3 className="text-xl font-bold text-slate-100">{master.name}</h3>
//                         <p className="text-xs text-cyan-400 font-semibold mt-1">Опыт работы: {master.experience}</p>
//                       </div>
//                       <span className="bg-slate-950 border border-slate-800 text-[11px] px-2 py-1 rounded text-slate-400 font-mono">ID: 0{master.id}</span>
//                     </div>
                    
//                     <div className="mb-4">
//                       <span className="text-xs text-slate-500 block mb-1 uppercase font-bold tracking-wider">Специализация:</span>
//                       <p className="text-sm text-slate-300 font-medium">{master.special}</p>
//                     </div>

//                     <div className="mb-6">
//                       <span className="text-xs text-slate-500 block mb-1 uppercase font-bold tracking-wider">Подробный опыт и био:</span>
//                       <p className="text-xs text-slate-400 leading-relaxed">{master.bio}</p>
//                     </div>
//                   </div>

//                   <a 
//                     href={`tel:${master.phone}`}
//                     className="w-full bg-slate-950 hover:bg-slate-800 text-cyan-400 border border-slate-800 font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors mt-auto"
//                   >
//                     <Phone className="w-4 h-4" />
//                     {master.phone}
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ================= СТРАНИЦА СЛУЖБЫ ПОДДЕРЖКИ ================= */}
//         {activeTab === 'support' && (
//           <div className="space-y-12">
//             <div className="mb-4">
//               <h2 className="text-3xl font-black text-slate-100 flex items-center gap-3">
//                 <HelpCircle className="w-8 h-8 text-cyan-400" /> Центр поддержки пользователей
//               </h2>
//               <p className="text-slate-400 mt-2">Инструкции на экстренный случай, правила бережного ухода и гайд для новичков.</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
//               {/* ЭКСТРЕННЫЕ СЛУЧАИ */}
//               <div className="bg-slate-900/60 border-2 border-red-900/40 rounded-xl p-6 shadow-xl space-y-4">
//                 <div className="flex items-center gap-3 text-red-400 font-bold text-lg border-b border-red-950 pb-3">
//                   <AlertTriangle className="w-5 h-5 text-red-500" />
//                   <span>Экстренные случаи</span>
//                 </div>
                
//                 <div className="space-y-4 text-xs">
//                   <div>
//                     <h4 className="text-slate-200 font-bold mb-1 text-sm">1. Залили компьютер / ноутбук жидкостью:</h4>
//                     <p className="text-slate-400 leading-relaxed">
//                       <strong className="text-red-400">НЕМЕДЛЕННО</strong> выдерните шнур питания из сети или зажмите кнопку включения на ноутбуке на 10 секунд до полного отключения. Не пытайтесь сохранить файлы! Переверните устройство клавиатурой вниз, чтобы жидкость не потекла к материнской плате, и срочно звоните мастеру.
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="text-slate-200 font-bold mb-1 text-sm">2. Пошел запах гари или дым:</h4>
//                     <p className="text-slate-400 leading-relaxed">
//                       Выключите пилот/розетку из сети. Не прикасайтесь к оголенным проводам. Запах гари означает критический пробой блока питания или цепей питания. Пользоваться устройством до осмотра мастером строго запрещено.
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="text-slate-200 font-bold mb-1 text-sm">3. Экран застыл и гудит кулер:</h4>
//                     <p className="text-slate-400 leading-relaxed">
//                       Это мертвый завис (фриз). Зажмите физическую кнопку включения ПК на несколько секунд для принудительной перезагрузки. Если это повторяется — возможен перегрев или сбой видеокарты.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* СОВЕТЫ ПО АККУРАТНОМУ ИСПОЛЬЗОВАНИЮ */}
//               <div className="bg-slate-900 border border-slate-900 rounded-xl p-6 shadow-xl space-y-4">
//                 <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg border-b border-slate-800 pb-3">
//                   <ShieldCheck className="w-5 h-5" />
//                   <span>Правильный уход</span>
//                 </div>
                
//                 <ul className="space-y-3 text-xs text-slate-400 list-none pl-0">
//                   <li className="flex gap-2">
//                     <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
//                     <span><strong>Не ставьте ноутбук на кровать.</strong> Мягкие пледы перекрывают вентиляционные отверстия на дне, из-за чего процессор моментально перегревается и деградирует. Используйте твердые подставки.</span>
//                   </li>
//                   <li className="flex gap-2">
//                     <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
//                     <span><strong>Чистка от пыли.</strong> Производите замену термопасты и продувку радиаторов раз в 1-2 года. Пыль работает как шуба, удерживая тепло внутри чипов.</span>
//                   </li>
//                   <li className="flex gap-2">
//                     <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
//                     <span><strong>Стабильное электропитание.</strong> Подключайте дорогие системные блоки и мониторы через сетевые фильтры, а лучше через ИБП (источники бесперебойного питания) во избежание сгорания техники при скачках напряжения.</span>
//                   </li>
//                 </ul>
//               </div>

//               {/* ИНСТРУКЦИЯ ДЛЯ НОВИЧКОВ */}
//               <div className="bg-slate-900 border border-slate-900 rounded-xl p-6 shadow-xl space-y-4">
//                 <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg border-b border-slate-800 pb-3">
//                   <BookOpen className="w-5 h-5" />
//                   <span>Инструкция для новичков</span>
//                 </div>
                
//                 <div className="space-y-4 text-xs text-slate-400">
//                   <p>Если вы впервые приобрели современный ПК или ноутбук, запомните базовые шаги:</p>
//                   <ol className="list-decimal pl-4 space-y-2">
//                     <li><strong>Корректное выключение:</strong> Всегда выключайте систему через меню <span className="text-slate-200 font-semibold">«Пуск» -> «Выключение»</span> (или Apple -> Выключить). Выдергивание вилки из розетки во время работы ломает операционную систему.</li>
//                     <li><strong>Аккумулятор ноутбука:</strong> Не бойтесь держать ноутбук постоянно на зарядке во время игр или работы. Современные контроллеры защищают батарею от перезаряда.</li>
//                     <li><strong>Осторожно с программами:</strong> Не скачивайте сомнительные файлы и «активаторы». Пользуйтесь встроенным защитником Windows (Defender) и держите его включенным.</li>
//                   </ol>
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}

//         {/* ================= СТРАНИЦА ИЗБРАННОГО ================= */}
//         {activeTab === 'favorites' && (
//           <div>
//             <h2 className="text-2xl font-black text-slate-100 mb-6">Избранные товары</h2>
//             {favorites.length === 0 ? (
//               <p className="text-slate-500">У вас пока нет избранных товаров.</p>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {favorites.map(renderProductCard)}
//               </div>
//             )}
//           </div>
//         )}

//         {/* ================= СТРАНИЦА КОРЗИНЫ ================= */}
//         {activeTab === 'cart' && (
//           <div>
//             <h2 className="text-2xl font-black text-slate-100 mb-6">Ваша корзина</h2>
//             {orderStatus === 'success' ? (
//               <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-xl text-center">
//                 <h3 className="text-lg font-bold mb-2">Заказ успешно оформлен!</h3>
//                 <p className="text-sm">Наши менеджеры свяжутся с вами в ближайшее время. Очистка корзины...</p>
//               </div>
//             ) : cart.length === 0 ? (
//               <p className="text-slate-500">Корзина пуста.</p>
//             ) : (
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* Список товаров в корзине */}
//                 <div className="lg:col-span-2 space-y-4">
//                   {cart.map(item => (
//                     <div key={item.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between gap-4">
//                       <img src={item.image} alt={item.name} className="w-20 h-14 object-cover rounded-lg bg-slate-950" />
//                       <div className="flex-1 min-w-0">
//                         <h4 className="text-slate-200 font-bold text-sm truncate">{item.name}</h4>
//                         <p className="text-xs text-cyan-400 font-medium">${item.price}</p>
//                       </div>
//                       <button onClick={() => removeFromCart(item.id)} className="p-2 text-slate-500 hover:text-red-400">
//                         <X className="w-5 h-5" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Форма оформления заказа */}
//                 <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl h-fit">
//                   <h3 className="text-lg font-bold text-slate-100 mb-4">Оформление доставки</h3>
//                   <div className="text-sm mb-4 flex justify-between font-bold text-slate-200">
//                     <span>Итого к оплате:</span>
//                     <span className="text-cyan-400 text-lg">${cart.reduce((sum, item) => sum + item.price, 0)}</span>
//                   </div>
//                   <form onSubmit={handleCheckout} className="space-y-4 text-xs">
//                     <div>
//                       <label className="block text-slate-400 mb-1">Адрес доставки</label>
//                       <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:outline-none focus:border-cyan-500" placeholder="Город, улица, дом, кв" />
//                     </div>
//                     <div>
//                       <label className="block text-slate-400 mb-1">Номер телефона</label>
//                       <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:outline-none focus:border-cyan-500" placeholder="+7 (___) ___-__-__" />
//                     </div>
//                     <div>
//                       <label className="block text-slate-400 mb-1">Номер карты для оплаты</label>
//                       <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:outline-none focus:border-cyan-500" placeholder="4000 0000 0000 0000" />
//                     </div>
//                     <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-bold py-2.5 rounded text-sm transition-colors mt-2">
//                       Подтвердить и оплатить
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//       </main>

//       {/* ================= МОДАЛЬНОЕ ОКНО С ПОЛНОЙ ИНФОРМАЦИЕЙ (FULL INFO) ================= */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-slate-900 border border-slate-800 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative my-8">
//             <button 
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-4 right-4 p-2 bg-slate-950/60 rounded-full border border-slate-800 text-slate-400 hover:text-slate-100 transition-colors z-10"
//             >
//               <X className="w-4 h-4" />
//             </button>
//             <div className="aspect-video w-full bg-slate-950">
//               <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Спецификация устройства</span>
//               <h3 className="text-2xl font-black text-slate-100 mt-1 mb-4">{selectedProduct.name}</h3>
              
//               <div className="bg-slate-950 border border-slate-800/60 rounded-xl p-4 overflow-hidden">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs">
//                   {Object.entries(selectedProduct.specs).map(([key, value]) => (
//                     <div key={key} className="border-b border-slate-900 py-1.5 flex justify-between gap-4">
//                       <span className="text-slate-500 capitalize shrink-0 font-medium">{key}:</span>
//                       <span className="text-slate-300 text-right font-mono">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-slate-800">
//                 <span className="text-3xl font-black text-slate-100">${selectedProduct.price}</span>
//                 <div className="flex gap-2">
//                   <button 
//                     onClick={() => toggleFavorite(selectedProduct)}
//                     className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors border border-slate-700"
//                   >
//                     <Heart className={`w-4 h-4 ${favorites.some(f => f.id === selectedProduct.id) ? 'fill-pink-500 text-pink-500' : ''}`} />
//                   </button>
//                   <button 
//                     onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
//                     className="bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors text-sm flex items-center gap-2"
//                   >
//                     <ShoppingCart className="w-4 h-4" />
//                     Добавить в корзину
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }