import React, { useState } from 'react';
import { 
  SlidersHorizontal, Laptop, Cpu, Heart, ShoppingCart, Info, X, 
  Monitor, Keyboard, ShieldCheck, Wrench, HelpCircle, Phone, 
  AlertTriangle, BookOpen, CheckCircle, Percent, Recycle
} from 'lucide-react';

// ================= БАЗА ДАННЫХ CyberTech (64 ПОЗИЦИИ) =================
const computersData = [
  // --- ИГРОВЫЕ СИСТЕМЫ ---
  // Ноутбуки (10 шт)
  {
    id: 1, name: "ASUS ROG Strix SCAR 18 (2024)", category: "gaming-laptop", type: "computer", price: 3499,
    gpu: "NVIDIA RTX 4090 Laptop 16GB", cpu: "Intel Core i9-14900HX", ram: "32GB DDR5 5600MHz",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "2TB PCIe 4.0 NVMe M.2", cooling: "ROG Intelligent Cooling", case: "Алюминий + RGB", os: "Windows 11 Home", warranty: "24 месяца" }
  },
  {
    id: 2, name: "MSI Raider GE78 HX", category: "gaming-laptop", type: "computer", price: 2999,
    gpu: "NVIDIA RTX 4080 Laptop 12GB", cpu: "Intel Core i9-13980HX", ram: "32GB DDR5 5200MHz",
    image: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/0e6d6c33a9144ff175528d3f2c74fe7220260326175418243122bGTlUbcCx.png.webp",
    specs: { ssd: "2TB NVMe PCIe Gen4", cooling: "Cooler Boost 5", case: "Металлический топкейс", os: "Windows 11 Pro", warranty: "12 месяцев" }
  },
  {
    id: 3, name: "Lenovo Legion Pro 7 Gen 8", category: "gaming-laptop", type: "computer", price: 2399,
    gpu: "NVIDIA RTX 4070 Laptop 8GB", cpu: "AMD Ryzen 9 7945HX", ram: "32GB DDR5 4800MHz",
    image: "https://technochain.uz/api/app/project_files/product_img/14d9b72e-ROG%20Strix%20SCAR%2016%20G635LX-RW189W%20(1).png",
    specs: { ssd: "1TB SSD M.2 PCIe Gen4", cooling: "Legion Coldfront 5.0", case: "Алюминий (Onyx Grey)", os: "Windows 11 Home", warranty: "24 месяца" }
  },
  {
    id: 4, name: "Razer Blade 16 (2024)", category: "gaming-laptop", type: "computer", price: 2999,
    gpu: "NVIDIA RTX 4070 Laptop 8GB", cpu: "Intel Core i9-14900HX", ram: "16GB DDR5 5600MHz",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "1TB PCIe 4.0 NVMe", cooling: "Испарительная камера", case: "ЧПУ-алюминий", os: "Windows 11 Home", warranty: "12 месяцев" }
  },
  {
    id: 5, name: "Acer Nitro 16 AN16-41", category: "gaming-laptop", type: "computer", price: 1350,
    gpu: "NVIDIA RTX 4060 Laptop 8GB", cpu: "AMD Ryzen 7 7735HS", ram: "16GB DDR5 4800MHz",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB PCIe NVMe M.2", cooling: "Два вентилятора, жидкий металл", case: "Пластик повышенной прочности", os: "Без ОС", warranty: "12 месяцев" }
  },
  {
    id: 6, name: "ASUS TUF Gaming A15 (2023)", category: "gaming-laptop", type: "computer", price: 1150,
    gpu: "NVIDIA RTX 4050 Laptop 6GB", cpu: "AMD Ryzen 5 7535HS", ram: "16GB DDR5 4800MHz",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB NVMe PCIe 4.0", cooling: "Arc Flow Fans", case: "Пластик + металл крышка", os: "Windows 11 Home", warranty: "12 месяцев" }
  },
  {
    id: 7, name: "HP Omen 16 (2024)", category: "gaming-laptop", type: "computer", price: 1750,
    gpu: "NVIDIA RTX 4070 Laptop 8GB", cpu: "Intel Core i7-14700HX", ram: "32GB DDR5 5600MHz",
    image: "https://minapi.beemarket.uz/prod-media/productImages/1760678411zxZG6ZONgxRo.webp",
    specs: { ssd: "1TB WD PC SN810", cooling: "OMEN Tempest Cooling", case: "Композит (Черный)", os: "Windows 11 Home", warranty: "12 месяцев" }
  },
  {
    id: 8, name: "GIGABYTE G6 KF (2024)", category: "gaming-laptop", type: "computer", price: 1099,
    gpu: "NVIDIA RTX 4060 Laptop 8GB", cpu: "Intel Core i7-13620H", ram: "16GB DDR5 4800MHz",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB Gen4 M.2 SSD", cooling: "WINDFORCE Technology", case: "Конструкционный пластик", os: "Без ОС", warranty: "12 месяцев" }
  },
  {
    id: 9, name: "Alienware m18 R2", category: "gaming-laptop", type: "computer", price: 3299,
    gpu: "NVIDIA RTX 4090 Laptop 16GB", cpu: "Intel Core i9-14900HX", ram: "64GB DDR5 5200MHz",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
    specs: { ssd: "4TB (2x 2TB NVMe)", cooling: "Cryo-tech (Галлиевый элемент)", case: "Анодированный алюминий", os: "Windows 11 Pro", warranty: "24 месяца" }
  },
  {
    id: 10, name: "LOQ 15IRH8", category: "gaming-laptop", type: "computer", price: 899,
    gpu: "NVIDIA RTX 4050 Laptop 6GB", cpu: "Intel Core i5-13420H", ram: "16GB DDR5 5200MHz",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB M.2 PCIe 4.0", cooling: "Двухпоточный кулер", case: "Высокопрочный поликарбонат", os: "Без ОС", warranty: "12 месяцев" }
  },

  // ПК (10 шт)
  {
    id: 11, name: "MSI Infinite X2 14th", category: "gaming-pc", type: "computer", price: 3899,
    gpu: "MSI RTX 4090 Ventus 24GB", cpu: "Intel Core i9-14900KF", ram: "64GB DDR5 5600MHz",
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "2TB PCIe 4.0", motherboard: "MSI PRO Z790-P", power: "1000W 80+ Gold", cooling: "СЖО MSI 240mm", warranty: "36 месяцев" }
  },
  {
    id: 12, name: "ASUS ROG Strix G16CH", category: "gaming-pc", type: "computer", price: 2199,
    gpu: "ASUS Dual RTX 4070 12GB", cpu: "Intel Core i7-13700F", ram: "32GB DDR5 4800MHz",
    image: "https://rog.asus.com/media/1644549597584.jpg",
    specs: { ssd: "1TB NVMe M.2", motherboard: "ASUS ROG B760-G", power: "700W 80+", cooling: "Башня 120мм", warranty: "24 месяца" }
  },
  {
    id: 13, name: "Acer Predator Orion 3000", category: "gaming-pc", type: "computer", price: 1599,
    gpu: "Predator RTX 4060 Ti 8GB", cpu: "Intel Core i5-13400F", ram: "16GB DDR5 4800MHz",
    image: "https://m.media-amazon.com/images/I/81EFH6sT5CL._AC_SL1500_.jpg",
    specs: { ssd: "1TB NVMe M.2", motherboard: "Acer B760 Custom", power: "500W 80+ Gold", cooling: "FrostBlade 2.0 RGB", warranty: "24 месяца" }
  },
  {
    id: 14, name: "Lenovo Legion Tower 5i Gen 8", category: "gaming-pc", type: "computer", price: 1450,
    gpu: "Lenovo OEM RTX 4060 8GB", cpu: "Intel Core i5-13400F", ram: "16GB DDR5 5600MHz",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB M.2 PCIe", motherboard: "Lenovo Intel B760", power: "500W 85%", cooling: "Legion 150W Air", warranty: "12 месяцев" }
  },
  {
    id: 15, name: "HP Omen 40L GT21", category: "gaming-pc", type: "computer", price: 2499,
    gpu: "HP OEM RTX 4080 16GB", cpu: "AMD Ryzen 7 7700X", ram: "32GB DDR5 5200MHz",
    image: "https://image.coolblue.nl/content/3825293fe8cdd871ced381088c762d44",
    specs: { ssd: "1TB WD Black", motherboard: "HP Blizzard B650", power: "800W 80+ Gold", cooling: "СЖО 120мм", warranty: "12 месяцев" }
  },
  {
    id: 16, name: "CyberPowerPC Gamer Master", category: "gaming-pc", type: "computer", price: 999,
    gpu: "AMD Radeon RX 7600 8GB", cpu: "AMD Ryzen 5 7600", ram: "16GB DDR5 5200MHz",
    image: "https://dlcdnrog.asus.com/rog/media/172782111228.webp",
    specs: { ssd: "512GB NVMe Gen4", motherboard: "ASRock B650M-C", power: "600W Certified", cooling: "Wraith Stealth", warranty: "12 месяцев" }
  },
  {
    id: 17, name: "Skytech Chronos Gaming", category: "gaming-pc", type: "computer", price: 1850,
    gpu: "RTX 4070 Ti Super 16GB", cpu: "AMD Ryzen 7 7800X3D", ram: "32GB DDR5 5600MHz",
    image: "https://www.pcworld.com/wp-content/uploads/2025/10/pcw07_GamingSetup_RGBeci.jpg?quality=50&strip=all",
    specs: { ssd: "2TB NVMe M.2", motherboard: "MSI PRO B650M-A", power: "750W 80+ Gold", cooling: "СЖО 240мм AIO", warranty: "12 месяцев" }
  },
  {
    id: 18, name: "Thermaltake LCGS View 390", category: "gaming-pc", type: "computer", price: 2799,
    gpu: "RTX 4080 Super 16GB", cpu: "AMD Ryzen 9 7900X", ram: "32GB DDR5 Toughram",
    image: "https://frankfurt.apollo.olxcdn.com/v1/files/tcqvbyut0ait-UZ/image",
    specs: { ssd: "2TB M.2 NVMe", motherboard: "ASUS PRIME X670-P", power: "850W ATX 3.0", cooling: "TH360 ARGB СЖО", warranty: "24 месяца" }
  },
  {
    id: 19, name: "iBUYPOWER Y60 SlateMesh", category: "gaming-pc", type: "computer", price: 1699,
    gpu: "NVIDIA RTX 4070 12GB", cpu: "Intel Core i7-14700F", ram: "32GB DDR5 5600MHz",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/210104111236-beginner-gaming-pc.jpg?q=w_2065,h_1162,x_0,y_0,c_fill",
    specs: { ssd: "2TB PCIe NVMe", motherboard: "ASUS PRIME B760", power: "750W 80+ Gold", cooling: "iBUYPOWER 240mm", warranty: "12 месяцев" }
  },
  {
    id: 20, name: "Corsair One i500 Custom", category: "gaming-pc", type: "computer", price: 3599,
    gpu: "Corsair Liquid RTX 4090 24GB", cpu: "Intel Core i9-14900K", ram: "64GB DDR5 Corsair",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3FVx-ZS0usLdS5WRAhItjgtRymBH3gGhJEn45AjyL92mI21lCLBliXM&s=10",
    specs: { ssd: "2TB MP600 Gen4", motherboard: "Corsair Z790 Custom", power: "1000W Gold SFX", cooling: "Двойная раздельная СЖО", warranty: "24 месяца" }
  },

  // --- ОФИСНЫЕ СИСТЕМЫ ---
  // Ноутбуки (10 шт)
  {
    id: 21, name: "Apple MacBook Air 13 M3 (2024)", category: "office-laptop", type: "computer", price: 1099,
    gpu: "Apple 8-core GPU", cpu: "Apple M3 (8 ядер)", ram: "16GB Unified Memory",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB Apple Flash", cooling: "Пассивное бесшумное", case: "Цельный алюминий", os: "macOS Sonoma", warranty: "12 месяцев" }
  },
  {
    id: 22, name: "ASUS Zenbook 14 OLED UX3405", category: "office-laptop", type: "computer", price: 1299,
    gpu: "Intel Arc Graphics", cpu: "Intel Core Ultra 7 155H", ram: "16GB LPDDR5X",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "1TB M.2 NVMe", cooling: "ASUS IceCool single-fan", case: "Алюминиевый эко-сплав", os: "Windows 11 Pro", warranty: "12 месяцев" }
  },
  {
    id: 23, name: "Huawei MateBook X Pro (2024)", category: "office-laptop", type: "computer", price: 1999,
    gpu: "Intel Arc Integrated", cpu: "Intel Core Ultra 9 185H", ram: "32GB LPDDR5X",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXctb5t0vFOV-BzkuySF_3LYk-AjUXkx_aqMtufApBg&s=10",
    specs: { ssd: "2TB NVMe PCIe", cooling: "Shark Fin тонкие кулеры", case: "Магниевый сверхлегкий сплав", os: "Windows 11 Home", warranty: "12 месяцев" }
  },
  {
    id: 24, name: "Dell XPS 13 9340 (2024)", category: "office-laptop", type: "computer", price: 1499,
    gpu: "Intel Arc Graphics", cpu: "Intel Core Ultra 7 155H", ram: "16GB LPDDR5X",
    image: "https://technochain.uz/api/app/project_files/product_img/4bd3e40e-Asus%20Zenbook%20A14%20OLED%20UX3407RA%20(1).png",
    specs: { ssd: "512GB PCIe 4.0", cooling: "Парные кулеры", case: "ЧПУ алюминий", os: "Windows 11 Pro", warranty: "12 месяцев" }
  },
  {
    id: 25, name: "HP Laptop 15-fd0000", category: "office-laptop", type: "computer", price: 550,
    gpu: "Intel Iris Xe Graphics", cpu: "Intel Core i5-1335U", ram: "8GB DDR4 3200MHz",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB PCIe NVMe", cooling: "Классический однокулерный", case: "Матовый пластик", os: "Windows 11 Home", warranty: "12 месяцев" }
  },
  {
    id: 26, name: "Lenovo ThinkPad E14 Gen 5", category: "office-laptop", type: "computer", price: 850,
    gpu: "AMD Radeon 610M", cpu: "AMD Ryzen 5 7530U", ram: "16GB DDR4 3200MHz",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB SSD M.2", cooling: "Owl-Wing Сверхтихий", case: "Алюминий, стандарт MIL-STD", os: "Windows 11 Pro", warranty: "12 месяцев" }
  },
  {
    id: 27, name: "Acer Swift Go 14 SFG14", category: "office-laptop", type: "computer", price: 799,
    gpu: "Intel Iris Xe Graphics", cpu: "Intel Core i5-13500H", ram: "16GB LPDDR5",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB PCIe NVMe", cooling: "TwinAir Performance", case: "Авиационный алюминий", os: "Без ОС", warranty: "12 месяцев" }
  },
  {
    id: 28, name: "Microsoft Surface Laptop 5", category: "office-laptop", type: "computer", price: 1199,
    gpu: "Intel Iris Xe Graphics", cpu: "Intel Core i7-1255U", ram: "16GB LPDDR5x",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB Съемный модуль", cooling: "Гидроподшипниковые радиаторы", case: "Алюминий + Alcantara", os: "Windows 11 Home", warranty: "12 месяцев" }
  },
  {
    id: 29, name: "LG Gram 16 (2024)", category: "office-laptop", type: "computer", price: 1399,
    gpu: "Intel Ultra Graphics", cpu: "Intel Core Ultra 5 125H", ram: "16GB LPDDR5X",
    image: "https://asset.openshop.uz/uploads/products/photos/202605/k6HLN8YfsjUW8mS0aJEqVevKjLqKZCQw.png",
    specs: { ssd: "1TB NVMe M.2", cooling: "Mega Cooling System", case: "Углеродно-магниевый сплав", os: "Windows 11 Home", warranty: "12 месяцев" }
  },
  {
    id: 30, name: "Lenovo IdeaPad Slim 3 15", category: "office-laptop", type: "computer", price: 470,
    gpu: "AMD Radeon 610M", cpu: "AMD Ryzen 3 7320U", ram: "8GB LPDDR5 5500MHz",
    image: "https://technochain.uz/api/app/project_files/product_img/0de9c61d-Lenovo%20Yoga%207%202-in-1%2014AKP10(4).avif",
    specs: { ssd: "256GB SSD M.2", cooling: "Smart Power выдув", case: "Практичный полимер", os: "Без ОС", warranty: "12 месяцев" }
  },

  // ПК (10 шт)
  {
    id: 31, name: "Apple Mac mini M4 (2024)", category: "office-pc", type: "computer", price: 599,
    gpu: "Apple 10-core GPU", cpu: "Apple M4 (10 ядер)", ram: "16GB Unified Memory",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2bUGo9mDiflmOElzR_dkvWej4XxrsnmLbgcUmlDhRw&s=10",
    specs: { ssd: "512GB Apple PCIe", cooling: "Внутренняя турбина", case: "Мини-алюминий 12см", os: "macOS Sequoia", warranty: "12 месяцев" }
  },
  {
    id: 32, name: "HP Pro SFF 400 G9", category: "office-pc", type: "computer", price: 720,
    gpu: "Intel UHD Graphics 730", cpu: "Intel Core i3-13100", ram: "8GB DDR4 3200MHz",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSettQ3l3_APhdtneYxzNEyF_ZED_QuXpGbyY_Uif1Q&s=10",
    specs: { ssd: "256GB NVMe M.2", motherboard: "HP Intel Q670", power: "180W Active PFC", cooling: "Low Profile HP", warranty: "36 месяцев" }
  },
  {
    id: 33, name: "Dell OptiPlex SFF (7010)", category: "office-pc", type: "computer", price: 890,
    gpu: "Intel UHD Graphics 770", cpu: "Intel Core i5-13500", ram: "16GB DDR5 4800MHz",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrWTEYsoTzZAjKVXOhTS8BFfedZl5pTktPVg3W5FUTuo0cj9M51omddE&s=10",
    specs: { ssd: "512GB PCIe NVMe", motherboard: "Dell Intel Q670", power: "260W Internal", cooling: "Вентилятор 80мм", warranty: "36 месяцев" }
  },
  {
    id: 34, name: "Lenovo ThinkCentre M70q Tiny", category: "office-pc", type: "computer", price: 680,
    gpu: "Intel UHD 730", cpu: "Intel Core i5-13400T", ram: "16GB DDR4 3200MHz",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTykvnM_4d7dfmxXXTebe9oJnidGv1WRa6v-MieEaCr4cxxqONt3jMfbfD&s=10",
    specs: { ssd: "512GB M.2 NVMe", motherboard: "Lenovo Intel Q670", power: "90W Внешний БП", cooling: "Микротурбинная система", warranty: "12 месяцев" }
  },
  {
    id: 35, name: "ASUS ExpertCenter D7 SFF", category: "office-pc", type: "computer", price: 799,
    gpu: "Intel UHD Graphics 730", cpu: "Intel Core i5-12400", ram: "16GB DDR4 3200MHz",
    image: "https://www.pcworld.com/wp-content/uploads/2026/05/acer-k242hyl-2.jpg?quality=50&strip=all",
    specs: { ssd: "512GB M.2 NVMe", motherboard: "ASUS B660 Board", power: "300W TFX Platinum", cooling: "Умный контроль вентилятора", warranty: "36 месяцев" }
  },
  {
    id: 36, name: "HP Elite Mini 800 G9", category: "office-pc", type: "computer", price: 1150,
    gpu: "Intel UHD Graphics 770", cpu: "Intel Core i7-13700T", ram: "16GB DDR5 4800MHz",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/dell/ecs1250/pdp/dell-desktop-ecs1250-pdp-module-business.psd?fmt=jpg&wid=2000&hei=1147",
    specs: { ssd: "512GB PCIe NVMe", motherboard: "HP Intel Q670 vPro", power: "90W Внешний", cooling: "Advanced ультратихая турбина", warranty: "36 месяцев" }
  },
  {
    id: 37, name: "Dell OptiPlex Micro (7010)", category: "office-pc", type: "computer", price: 540,
    gpu: "Intel UHD Graphics 710", cpu: "Intel Core i3-13100T", ram: "8GB DDR4 3200MHz",
    image: "https://m.media-amazon.com/images/I/71z+eqPF+XL._AC_UF1000,1000_QL80_.jpg",
    specs: { ssd: "256GB PCIe NVMe", motherboard: "Dell Q670 Micro", power: "65W Адаптер", cooling: "Микрорадиатор выдува", warranty: "12 месяцев" }
  },
  {
    id: 38, name: "Intel NUC 13 Pro Arena", category: "office-pc", type: "computer", price: 920,
    gpu: "Intel Iris Xe Graphics", cpu: "Intel Core i7-1360P", ram: "32GB DDR4 3200MHz",
    image: "https://c1.neweggimages.com/productimage/nb640/BRYRS2601140LH2DDE3.jpg",
    specs: { ssd: "1TB Gen4 SSD", motherboard: "Intel NUC13ANK", power: "120W Wall БП", cooling: "NUC Pro активное", warranty: "36 месяцев" }
  },
  {
    id: 39, name: "Lenovo ThinkCentre Neo 50t", category: "office-pc", type: "computer", price: 650,
    gpu: "Intel UHD 730", cpu: "Intel Core i5-13400", ram: "8GB DDR4 3200MHz",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB SSD M.2", motherboard: "Lenovo Intel B760", power: "260W (85%)", cooling: "Корпусный + процессорный кулеры", warranty: "12 месяцев" }
  },
  {
    id: 40, name: "Apple Mac Studio M2 Max", category: "office-pc", type: "computer", price: 1999,
    gpu: "Apple 30-core GPU", cpu: "Apple M2 Max (12 ядер)", ram: "32GB Unified Memory",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=500",
    specs: { ssd: "512GB High-Speed", power: "370W Встроенный", cooling: "Двухсторонняя турбинная система", os: "macOS Sonoma", warranty: "12 месяцев" }
  }
];

// КЛАВИАТУРЫ (12 штук)
const keyboardsData = [
  { id: 101, name: "Logitech G Pro X TKL", type: "keyboard", price: 199, gpu: "Свитчи: GX Brown Tactile", cpu: "LIGHTSYNC RGB", ram: "Радиоканал / BT / USB", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500", specs: { type: "Механика", layout: "TKL (80%)", keycaps: "PBT Double-shot", battery: "До 50 ч", weight: "930 г" } },
  { id: 102, name: "Razer BlackWidow V4 Pro", type: "keyboard", price: 229, gpu: "Свитчи: Razer Green", cpu: "Razer Chroma RGB", ram: "Проводной Type-C", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=500", specs: { type: "Механика", layout: "Full-size (100%)", macro: "5 выделенных кнопок", weight: "1250 г" } },
  { id: 103, name: "Keychron Q1 Pro", type: "keyboard", price: 189, gpu: "Свитчи: K Pro Banana", cpu: "Full Алюминий корпус", ram: "Bluetooth 5.1 / Кабель", image: "https://images.unsplash.com/photo-1626958011299-47a329d56417?auto=format&fit=crop&q=80&w=500", specs: { type: "Кастомная Механика", layout: "75%", hotSwap: "Есть (3/5 pin)", structure: "Gasket Mount" } },
  { id: 104, name: "SteelSeries Apex Pro TKL", type: "keyboard", price: 249, gpu: "Свитчи: OmniPoint 2.0 (Магнитные)", cpu: "OLED Smart дисплей", ram: "Проводной съемный", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=500", specs: { type: "Аналоговая магнитная", layout: "TKL", response: "0.54ms", lifespan: "100 млн кликов" } },
  { id: 105, name: "Corsair K100 RGB Air", type: "keyboard", price: 279, gpu: "Свитчи: Cherry MX Ultra Low Profile", cpu: "Толщина всего 11 мм", ram: "Slipstream Wireless / BT / USB", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500", specs: { type: "Ультратонкая механика", layout: "100%", pollingRate: "8000Hz Axon", battery: "До 200 ч без RGB" } },
  { id: 106, name: "ASUS ROG Azoth", type: "keyboard", price: 249, gpu: "Свитчи: ROG NX Snow", cpu: "OLED-экран 2 дюйма", ram: "Сверхнадежный беспроводной линк", image: "https://images.unsplash.com/photo-1626958011299-47a329d56417?auto=format&fit=crop&q=80&w=500", specs: { type: "Премиум-кастом", layout: "75%", смазка: "Заводская Krytox", шумка: "3 слоя силикона" } },
  { id: 107, name: "Varmilo VA87M Moonlight", type: "keyboard", price: 165, gpu: "Свитчи: Cherry MX Red", cpu: "White LED статичная", ram: "Проводная (Mini-USB)", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=500", specs: { type: "Классическая механика", layout: "TKL", keycaps: "Varmilo Premium PBT", дизайнеры: "Moonlight Edition" } },
  { id: 108, name: "Dark Project KD87A", type: "keyboard", price: 95, gpu: "Свитчи: Gateron Cap Teal смазанные", cpu: "RGB кастомизируемая", ram: "Проводная Type-C", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=500", specs: { type: "Игровая механика", layout: "TKL Side-print", стабы: "Слесарно смазанные", кейкапы: "PBT Side-Print" } },
  { id: 109, name: "NuPhy Air75 V2", type: "keyboard", price: 139, gpu: "Свитчи: Gateron Low-Profile Aloe", cpu: "RGB подсветка днища и клавиш", ram: "2.4Ghz / Bluetooth 5.1", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500", specs: { type: "Низкопрофильный кастом", layout: "75%", батарея: "4000 mAh", вес: "590 г" } },
  { id: 110, name: "HyperX Alloy Origins Core", type: "keyboard", price: 89, gpu: "Свитчи: HyperX Red Linear", cpu: "RGB с софтом NGENUITY", ram: "Проводной кабель USB-C", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=500", specs: { type: "Скелетон механика", layout: "TKL", корпус: "Авиационный алюминий", профили: "3 встроенных пресета" } },
  { id: 111, name: "Ducky One 3 TKL Daybreak", type: "keyboard", price: 149, gpu: "Свитчи: Cherry MX Speed Silver", cpu: "Quack Mechanics инженерия", ram: "Съемный Type-C", image: "https://images.unsplash.com/photo-1626958011299-47a329d56417?auto=format&fit=crop&q=80&w=500", specs: { type: "Энтузиаст-класс", layout: "TKL", плата: "Многослойная Hot-Swap", стабы: "Ducky V2 смазанные" } },
  { id: 112, name: "Logitech MX Keys S", type: "keyboard", price: 119, gpu: "Свитчи: Ножничные Perfect Stroke", cpu: "Умная белая подсветка рук", ram: "Logi Bolt / Bluetooth", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500", specs: { type: "Офисная мембранно-ножничная", layout: "100% Слим", зарядка: "Быстрая Type-C", софт: "Logi Options+ макросы" } }
];

// МОНИТОРЫ (12 штук)
const monitorsData = [
  { id: 201, name: "ASUS ROG Swift OLED PG27AQDM", type: "monitor", price: 899, gpu: "Матрица: WOLED (Глянец)", cpu: "2K QHD (2560x1440)", ram: "240Hz / 0.03ms отклик", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "26.5\"", яркость: "1000 нит пик", контраст: "1.5M:1", технологии: "G-Sync Compatible" } },
  { id: 202, name: "Samsung Odyssey G7 32\"", type: "monitor", price: 699, gpu: "Матрица: VA Curved 1000R", cpu: "2K QHD Widescreen", ram: "240Hz / 1ms GtG", image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "31.5\"", подсветка: "Quantum Dot (QLED)", HDR: "Vesa DisplayHDR 600" } },
  { id: 203, name: "LG UltraGear 27GR95QE", type: "monitor", price: 799, gpu: "Матрица: OLED антиблик", cpu: "2K 2560x1440 разрешение", ram: "240Hz / HDMI 2.1 порты", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "27\"", цветопередача: "DCI-P3 98.5%", пульт: "Дистанционное управление игровыми пресетами" } },
  { id: 204, name: "Gigabyte M27Q X", type: "monitor", price: 429, gpu: "Матрица: Super Speed IPS", cpu: "2K QHD разрешение", ram: "240Hz / KVM переключатель", image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "27\"", яркость: "400 нит", KVM: "Управление 2 ПК одной мышкой и клавой" } },
  { id: 205, name: "MSI Optix MAG274QRF-QD", type: "monitor", price: 379, gpu: "Матрица: Rapid IPS Quantum Dot", cpu: "2K Игровой полуглянец", ram: "165Hz / 1ms GtG", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "27\"", цвета: "1.07 Миллиарда цветов", ножка: "Полная регулировка Pivot" } },
  { id: 206, name: "Dell Alienware AW3423DWF", type: "monitor", price: 999, gpu: "Матрица: QD-OLED Изогнутый", cpu: "UWQHD (3440x1440) 21:9", ram: "165Hz / Истинный черный цвет", image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "34\" Ультраширокий", радиус: "1800R", гарантия: "3 года от выгорания OLED" } },
  { id: 207, name: "BenQ ZOWIE XL2546K", type: "monitor", price: 499, gpu: "Матрица: Fast TN (Киберспорт)", cpu: "FHD (1920x1080) турнирный", ram: "240Hz / DyAc+ Сглаживание", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "24.5\"", щитки: "Боковые антибликовые шторки", фокус: "Для профессиональных шутеров CS/Valorant" } },
  { id: 208, name: "ASUS TUF Gaming VG27AQ", type: "monitor", price: 299, gpu: "Матрица: IPS IPS Классика", cpu: "2K (2560x1440)", ram: "165Hz / ELMB Sync комбо", image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "27\"", технологии: "FreeSync / G-Sync Ready", колонки: "Встроенные стерео 2W x2" } },
  { id: 209, name: "Xiaomi Mi Desktop Monitor 1C", type: "monitor", price: 119, gpu: "Матрица: IPS Матовая", cpu: "FHD 1080p Офисный", ram: "60Hz / Тонкие рамки 3мм", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "23.8\"", углы: "178 градусов", порты: "1x HDMI, 1x VGA" } },
  { id: 210, name: "Samsung Odyssey Neo G9", type: "monitor", price: 1699, gpu: "Матрица: Mini-LED (2048 зон)", cpu: "5120x1440 Dual QHD 32:9", ram: "240Hz / 1000R Кривизна", image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "49\" Сверхширокий", яркость: "2000 нит пик", HDR: "Quantum HDR 2000" } },
  { id: 211, name: "Huawei MateView GT 34", type: "monitor", price: 460, gpu: "Матрица: VA Изогнутая", cpu: "3440x1440 UWQHD", ram: "165Hz / Саундбар в ножке", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "34\"", микрофоны: "Студийные с шумоподавлением", саундбар: "5W x2 стерео, сенсорная полоса" } },
  { id: 212, name: "AOC Gaming 24G2SP", type: "monitor", price: 159, gpu: "Матрица: IPS Насыщенная", cpu: "FHD Игровой бюджетник", ram: "165Hz / Время отклика 1ms", image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=500", specs: { диагональ: "23.8\"", подставка: "Регулировка высоты, наклона", охват: "sRGB 125%" } }
];

// --- АКЦИИ И СКИДКИ (ГОРЯЧИЕ ТОВАРЫ) ---
const promoData = [
  { id: 301, name: "Игровой ПК CyberForce V1", type: "promo", price: 1250, oldPrice: 1550, gpu: "GeForce RTX 4060 Ti 8GB", cpu: "Intel Core i5-13400F", ram: "32GB DDR5 RAM", image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&q=80&w=500", specs: { скидка: "Скидка $300!", ssd: "1TB NVMe SSD M.2", power: "650W 80+ Bronze", cooling: "Tower RGB 4 трубки" } },
  { id: 302, name: "Клавиатура HyperX Alloy FPS", type: "promo", price: 65, oldPrice: 95, gpu: "Свитчи: Cherry MX Blue", cpu: "Красная классическая LED", ram: "Проводной усиленный кабель", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=500", specs: { скидка: "Скидка $30!", металл: "Стальная жесткая рама", кейкапы: "ABS Laser engraved" } },
  { id: 303, name: "Монитор MSI Optix G241V", type: "promo", price: 105, oldPrice: 145, gpu: "Матрица: IPS яркая", cpu: "FullHD 1920x1080", ram: "75Hz / Время отклика 4ms", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500", specs: { скидка: "Распродажа линейки!", технологии: "AMD FreeSync, Less Blue Light" } }
];

// --- Б/У И УЦЕНЕННАЯ ТЕХНИКА (REFURBISHED) ---
const secondhandData = [
  { id: 401, name: "Б/У ASUS ROG Zephyrus G14", type: "secondhand", price: 850, condition: "Отличное (9/10)", reason: "Trade-In, легкие потертости на нижней крышке. Батарея 88%.", gpu: "RTX 3060 Laptop 6GB", cpu: "AMD Ryzen 7 5800HS", ram: "16GB DDR4", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=500", specs: { ssd: "512GB NVMe", экран: "14\" IPS 144Hz", обслуживание: "Полностью обслужен, заменена термопаста у мастера ID:01", гарантия: "3 месяца от магазина" } },
  { id: 402, name: "Б/У MacBook Pro 16\" M1 Pro", type: "secondhand", price: 1390, condition: "Идеальное (10/10)", reason: "Корпоративный возврат. Износ батареи всего 4%.", gpu: "Apple 16-core GPU", cpu: "M1 Pro (10 ядер)", ram: "16GB Unified", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=500", specs: { ssd: "512GB Apple SSD", комплект: "Оригинальный блок 140W и коробка", циклы: "42 цикла зарядки" } },
  { id: 403, name: "Б/У Игровой Монитор Acer Nitro", type: "secondhand", price: 110, condition: "Хорошее (8/10)", reason: "Витринный экземпляр, один битый пиксель в левом нижнем углу.", gpu: "Матрица: IPS панель", cpu: "Full HD 1080p", ram: "144Hz игровое развертывание", image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=500", specs: { дефект: "Битый пиксель не мешает в играх", порты: "HDMI, DisplayPort", комплект: "Без заводской коробки, кабели в комплекте" } }
];

// --- ДАННЫЕ О МАСТЕРАХ ПО РЕМОНТУ ---
const repairMasters = [
  { id: 1, name: "Александр Громов", experience: "8 лет", phone: "+7 (999) 123-45-67", special: "Компонентный ремонт плат, пайка BGA, чистка от залитий.", bio: "Бывший инженер ASUS. Находит КЗ там, где другие сдаются.", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" },
  { id: 2, name: "Михаил Левин", experience: "12 лет", phone: "+7 (999) 765-43-21", special: "Кастомные СЖО, скальпирование, сборка сложных серверов.", bio: "Построит СЖО мечты. Выжмет максимум из процессора и памяти.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
  { id: 3, name: "Дмитрий Серов", experience: "5 лет", phone: "+7 (999) 444-55-66", special: "Модульный ремонт, замена термопасты/жидкого металла, апгрейд.", bio: "Ускорит ваш старый ноутбук за час. Работает быстро и на выезд.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('catalog'); 
  const [catalogSubTab, setCatalogSubTab] = useState('computers'); 
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [maxPrice, setMaxPrice] = useState(4000);

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const getFilteredProducts = () => {
    if (activeTab === 'catalog') {
      if (catalogSubTab === 'computers') {
        return computersData.filter(pc => (selectedCategory === 'all' || pc.category === selectedCategory) && pc.price <= maxPrice);
      } else if (catalogSubTab === 'keyboards') {
        return keyboardsData.filter(kb => kb.price <= maxPrice);
      } else if (catalogSubTab === 'monitors') {
        return monitorsData.filter(mon => mon.price <= maxPrice);
      }
    } else if (activeTab === 'promo') {
      return promoData.filter(p => p.price <= maxPrice);
    } else if (activeTab === 'secondhand') {
      return secondhandData.filter(s => s.price <= maxPrice);
    }
    return [];
  };

  const toggleFavorite = (item) => {
    if (favorites.some(f => f.id === item.id)) {
      setFavorites(favorites.filter(f => f.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const addToCart = (item) => {
    if (!cart.some(c => c.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!address || !cardNumber || !phone) return alert('Заполните поля!');
    setOrderStatus('success');
    setTimeout(() => {
      setCart([]); setAddress(''); setCardNumber(''); setPhone(''); setOrderStatus(null); setActiveTab('catalog');
    }, 3000);
  };

  const renderProductCard = (item) => (
    <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        
        {/* Лейблы спец-страниц */}
        {item.type === 'promo' && <span className="absolute top-3 left-3 bg-red-600 text-white font-bold text-xs px-2.5 py-1 rounded shadow-lg">АКЦИЯ</span>}
        {item.type === 'secondhand' && <span className="absolute top-3 left-3 bg-amber-600 text-white font-bold text-xs px-2.5 py-1 rounded shadow-lg">Б/У: {item.condition}</span>}

        <button 
          onClick={(e) => { e.stopPropagation(); toggleFavorite(item); }} 
          className="absolute top-3 right-3 p-2 bg-slate-950/60 backdrop-blur-md rounded-full border border-slate-800 text-slate-100"
        >
          <Heart className={`w-4 h-4 ${favorites.some(f => f.id === item.id) ? 'fill-pink-500 text-pink-500' : 'text-slate-400'}`} />
        </button>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
            {item.type === 'keyboard' ? 'Клавиатура' : item.type === 'monitor' ? 'Монитор' : item.type === 'secondhand' ? 'Уценённый ноутбук/ПК' : 'Компьютер / Ноутбук'}
          </span>
          <h3 className="text-lg font-bold text-slate-100 line-clamp-1">{item.name}</h3>
          
          {item.reason && <p className="text-xs text-amber-400 mt-1 line-clamp-2 italic bg-amber-500/5 p-1.5 rounded border border-amber-500/10">Причина уценки: {item.reason}</p>}
          
          <div className="mt-3 space-y-1 text-xs text-slate-400">
            <p className="truncate">{item.cpu}</p>
            <p className="truncate">{item.gpu}</p>
            <p className="truncate">{item.ram}</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-baseline justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-100">${item.price}</span>
              {item.oldPrice && <span className="text-xs text-slate-500 line-through">${item.oldPrice}</span>}
            </div>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">В наличии</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => setSelectedProduct(item)} className="bg-slate-800 hover:bg-slate-700 text-slate-200 p-2 rounded-lg flex items-center justify-center border border-slate-700"><Info className="w-4 h-4" /></button>
            <button onClick={() => addToCart(item)} className="col-span-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg text-sm flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              {cart.some(c => c.id === item.id) ? 'В корзине' : 'Купить'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* ВЕРХНЯЯ ШАПКА */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setActiveTab('catalog'); setCatalogSubTab('computers'); }}>
            <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="font-black text-xl tracking-wider text-slate-100 uppercase">Cyber<span className="text-cyan-400">Tech</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            <button onClick={() => setActiveTab('catalog')} className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'catalog' ? 'bg-slate-900 text-cyan-400 border border-slate-800' : 'text-slate-400 hover:text-slate-200'}`}>Каталог</button>
            <button onClick={() => setActiveTab('promo')} className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${activeTab === 'promo' ? 'bg-red-950/40 text-red-400 border border-red-900/40' : 'text-slate-400 hover:text-red-400'}`}><Percent className="w-3.5 h-3.5" /> Акции и Скидки</button>
            <button onClick={() => setActiveTab('secondhand')} className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${activeTab === 'secondhand' ? 'bg-amber-950/40 text-amber-400 border border-amber-900/40' : 'text-slate-400 hover:text-amber-400'}`}><Recycle className="w-3.5 h-3.5" /> Б/У Техника</button>
            <button onClick={() => setActiveTab('repair')} className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'repair' ? 'bg-slate-900 text-cyan-400 border border-slate-800' : 'text-slate-400 hover:text-slate-200'}`}>Мастера</button>
            <button onClick={() => setActiveTab('support')} className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'support' ? 'bg-slate-900 text-cyan-400 border border-slate-800' : 'text-slate-400 hover:text-slate-200'}`}>Поддержка</button>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setActiveTab('favorites')} className="p-2 text-slate-400 hover:text-pink-500 relative">
              <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-pink-500 text-pink-500' : ''}`} />
              {favorites.length > 0 && <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{favorites.length}</span>}
            </button>
            <button onClick={() => setActiveTab('cart')} className="p-2 text-slate-400 hover:text-cyan-400 relative">
              <ShoppingCart className={`w-5 h-5 ${cart.length > 0 ? 'text-cyan-400' : ''}`} />
              {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-cyan-400 text-slate-950 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cart.length}</span>}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* КАТАЛОГ (ГЛАВНЫЙ) */}
        {activeTab === 'catalog' && (
          <div>
            <div className="flex border-b border-slate-900 mb-6 gap-2 overflow-x-auto">
              <button onClick={() => setCatalogSubTab('computers')} className={`pb-3 px-4 flex items-center gap-2 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${catalogSubTab === 'computers' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-500'}`}><Laptop className="w-4 h-4" /> Компьютеры & Ноутбуки ({computersData.length})</button>
              <button onClick={() => setCatalogSubTab('keyboards')} className={`pb-3 px-4 flex items-center gap-2 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${catalogSubTab === 'keyboards' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-500'}`}><Keyboard className="w-4 h-4" /> Клавиатуры ({keyboardsData.length})</button>
              <button onClick={() => setCatalogSubTab('monitors')} className={`pb-3 px-4 flex items-center gap-2 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${catalogSubTab === 'monitors' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-500'}`}><Monitor className="w-4 h-4" /> Мониторы ({monitorsData.length})</button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-64 shrink-0 space-y-6">
                <div className="bg-slate-900 rounded-xl p-5 border border-slate-900">
                  <span className="text-xs font-bold text-slate-100 flex items-center gap-2 mb-4"><SlidersHorizontal className="w-4 h-4 text-cyan-400" /> Ценовой порог</span>
                  <input type="range" min="50" max="4000" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
                  <div className="text-xs text-slate-400 mt-2 text-right">До: <span className="text-slate-200 font-bold">${maxPrice}</span></div>
                  
                  {catalogSubTab === 'computers' && (
                    <div className="mt-6 pt-6 border-t border-slate-800 space-y-1.5">
                      {['all', 'gaming-laptop', 'gaming-pc', 'office-laptop', 'office-pc'].map((cat) => (
                        <button key={cat} onClick={() => setSelectedCategory(cat)} className={`w-full text-left px-3 py-1.5 rounded text-xs capitalize ${selectedCategory === cat ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium' : 'text-slate-400 hover:bg-slate-800'}`}>{cat === 'all' ? 'Все системы' : cat.replace('-', ' ')}</button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">{getFilteredProducts().map(renderProductCard)}</div>
              </div>
            </div>
          </div>
        )}

        {/* СТРАНИЦА АКЦИЙ */}
        {activeTab === 'promo' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-100 flex items-center gap-3"><Percent className="w-8 h-8 text-red-500" /> Горячие Скидки & Ликвидация Склада</h2>
              <p className="text-slate-400 mt-1">Ограниченные предложения по самым низким ценам. Успейте урвать выгоду!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">{getFilteredProducts().map(renderProductCard)}</div>
          </div>
        )}
    

        {/* СТРАНИЦА Б/У ТЕХНИКИ */}
        {activeTab === 'secondhand' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-100 flex items-center gap-3"><Recycle className="w-8 h-8 text-amber-500" /> Б/У Устройства и Уценённые товары (Refurbished)</h2>
              <p className="text-slate-400 mt-1">Все девайсы прошли строгую полную проверку нашими мастерами, почищены от пыли и готовы к работе.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">{getFilteredProducts().map(renderProductCard)}</div>
          </div>
        )}

        {/* СТРАНИЦА МАСТЕРОВ */}
        {activeTab === 'repair' && (
          <div>
            <h2 className="text-3xl font-black text-slate-100 flex items-center gap-3 mb-8"><Wrench className="w-8 h-8 text-cyan-400" /> Инженеры Нашего Сервиса</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {repairMasters.map(m => (
                <div key={m.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl flex flex-col">
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">{m.name} (Опыт: {m.experience})</h3>
                      <p className="text-xs text-cyan-400 font-medium mt-1">{m.special}</p>
                      <p className="text-xs text-slate-400 mt-3 leading-relaxed">{m.bio}</p>
                    </div>
                    <a href={`tel:${m.phone}`} className="mt-5 w-full bg-slate-950 hover:bg-slate-800 text-cyan-400 text-center font-bold py-2 border border-slate-800 rounded-lg flex items-center justify-center gap-2 text-xs"><Phone className="w-3.5 h-3.5" /> {m.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* СЛУЖБА ПОДДЕРЖКИ */}
        {activeTab === 'support' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-red-950 p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-bold"><AlertTriangle className="w-5 h-5" /> ЧП Ситуации</div>
              <p className="text-xs text-slate-400 leading-relaxed">При залитии устройства — мгновенно выключайте его, переверните клавиатурой вниз и везите в сервис. Спешка спасет плату от сквозной коррозии.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold"><ShieldCheck className="w-5 h-5" /> Уход за железом</div>
              <p className="text-xs text-slate-400 leading-relaxed">Никогда не перекрывайте вентиляцию ноутбуков пледами на кровати. Делайте чистку и замену пасты раз в 1.5 года.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold"><BookOpen className="w-5 h-5" /> Для новичков</div>
              <p className="text-xs text-slate-400 leading-relaxed">Выключайте ПК строго через меню «Пуск». Используйте сетевые фильтры или ИБП, чтобы защитить блоки питания от скачков электросети.</p>
            </div>
          </div>
        )}

        {/* ИЗБРАННОЕ */}
        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-2xl font-black text-slate-100 mb-6">Избранное ({favorites.length})</h2>
            {favorites.length === 0 ? <p className="text-slate-500 text-sm">У вас пока нет сохраненных товаров.</p> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{favorites.map(renderProductCard)}</div>}
          </div>
        )}

        {/* КОРЗИНА И ОФОРМЛЕНИЕ */}
        {activeTab === 'cart' && (
          <div>
            <h2 className="text-2xl font-black text-slate-100 mb-6">Оформление Заказа</h2>
            {orderStatus === 'success' ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-8 rounded-xl text-center font-bold">Заказ успешно сформирован! Менеджеры перезванивают...</div>
            ) : cart.length === 0 ? (
              <p className="text-slate-500 text-sm">Ваша корзина пуста.</p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-3">
                  {cart.map(c => (
                    <div key={c.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img src={c.image} alt={c.name} className="w-16 h-12 object-cover rounded bg-slate-950" />
                        <div><h4 className="text-slate-200 font-bold text-sm">{c.name}</h4><p className="text-xs text-cyan-400">${c.price}</p></div>
                      </div>
                      <button onClick={() => setCart(cart.filter(x => x.id !== c.id))} className="text-slate-500 hover:text-red-400 p-2"><X className="w-5 h-5" /></button>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-fit space-y-4">
                  <div className="flex justify-between font-black text-slate-200 text-sm"><span>Сумма к оплате:</span><span className="text-cyan-400 text-lg">${cart.reduce((s, i) => s + i.price, 0)}</span></div>
                  <form onSubmit={handleCheckout} className="space-y-3 text-xs">
                    <input type="text" required value={address} onChange={e => setAddress(e.target.value)} placeholder="Адрес доставки курьером" className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:border-cyan-500 outline-none" />
                    <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="Контактный телефон" className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:border-cyan-500 outline-none" />
                    <input type="text" required value={cardNumber} onChange={e => setCardNumber(e.target.value)} placeholder="Номер карты для списания средств" className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:border-cyan-500 outline-none" />
                    <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-bold py-2.5 rounded text-sm transition-all">Подтвердить транзакцию</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      {/* МОДАЛЬНОЕ ОКНО ТЕХНИЧЕСКИХ ХАРАКТЕРИСТИК (СПЕЦИФИКАЦИЯ) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 max-w-xl w-full rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 p-2 bg-slate-950/60 rounded-full border border-slate-800 text-slate-400 hover:text-slate-100"><X className="w-4 h-4" /></button>
            <h3 className="text-xl font-black text-slate-100 mb-4">{selectedProduct.name}</h3>
            <div className="bg-slate-950 rounded-xl p-4 space-y-2 text-xs">
              {selectedProduct.specs && Object.entries(selectedProduct.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-slate-900 py-1.5"><span className="text-slate-500 capitalize">{k}:</span><span className="text-slate-300 font-mono text-right">{v}</span></div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-2xl font-black text-slate-100">${selectedProduct.price}</span>
              <button onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }} className="bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs flex items-center gap-2"><ShoppingCart className="w-4 h-4" /> В корзину</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}