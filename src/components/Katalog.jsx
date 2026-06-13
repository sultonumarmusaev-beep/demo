// src/pages/Catalog.jsx
import React from 'react';
import { Laptop, Cpu, ShoppingCart, Heart } from 'lucide-react';

// 1. Создаем ОДИН массив данных. Сюда ты можешь прописать хоть 40, хоть 100 компьютеров.
const computersData = [
  { id: 1, name: "Игровой ПК Monolog Альфа", price: "75 000 руб", cpu: "Intel i5", type: "pc" },
  { id: 2, name: "Ноутбук Monolog Nitro", price: "95 000 руб", cpu: "AMD Ryzen 7", type: "laptop" },
  { id: 3, name: "Кастомная сборка Monolog Beast", price: "150 000 руб", cpu: "Intel i9", type: "pc" },
  // ... и так далее до 40 штук. Просто добавляй объекты через запятую:
  { id: 4, name: "Офисный ПК Monolog Office", price: "35 000 руб", cpu: "Intel i3", type: "pc" },
  // { id: 5, name: "...", price: "...", cpu: "...", type: "..." },
];

const Katalog = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Каталог компьютеров ({computersData.length} моделей)</h2>
      
      {/* Сетка для карточек */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        
        {/* 2. Магия React: этот цикл сам превратит массив данных в 40 красивых карточек */}
        {computersData.map((comp) => (
          <div key={comp.id} style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '12px', 
            padding: '20px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            position: 'relative'
          }}>
            {/* Иконка меняется в зависимости от типа устройства */}
            <div style={{ marginBottom: '15px', color: '#3b82f6' }}>
              {comp.type === 'laptop' ? <Laptop size={40} /> : <Cpu size={40} />}
            </div>

            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{comp.name}</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Процессор: {comp.cpu}</p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginTop: '20px' 
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#10b981' }}>{comp.price}</span>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="В избранное">
                  <Heart size={20} color="#ef4444" />
                </button>
                <button style={{ 
                  background: '#3b82f6', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '8px 12px', 
                  borderRadius: '6px', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <ShoppingCart size={16} /> Купить
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Katalog;