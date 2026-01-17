
import React from 'react';

const CARS = [
  {
    name: 'Phantom VIII',
    brand: 'Rolls Royce',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=2070',
    stats: ['Mesin V12', '563 HP', '0-60: 5.1d']
  },
  {
    name: 'Continental GT Mulliner',
    brand: 'Bentley',
    price: '$320,000',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2070',
    stats: ['W12 Twin-Turbo', '650 HP', '0-60: 3.5d']
  },
  {
    name: 'Huracán Sterrato',
    brand: 'Lamborghini',
    price: '$275,000',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2070',
    stats: ['V10 Natural', '610 HP', '0-60: 3.4d']
  },
  {
    name: 'DBS Superleggera',
    brand: 'Aston Martin',
    price: '$315,000',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=2070',
    stats: ['V12 Twin-Turbo', '715 HP', '0-60: 3.2d']
  }
];

const Inventory: React.FC = () => {
  return (
    <section id="inventory" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-2">Koleksi Kami</span>
            <h2 className="text-4xl font-playfair">Inventaris Eksklusif</h2>
          </div>
          <button className="text-sm font-bold border-b border-gray-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
            Lihat Semua Stok
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CARS.map((car, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 bg-gray-100">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Baru
                </div>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{car.brand}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{car.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{car.price}</p>
                <div className="flex flex-wrap gap-2">
                  {car.stats.map((stat, sIdx) => (
                    <span key={sIdx} className="text-[9px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded uppercase font-medium">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
