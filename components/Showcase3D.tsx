
import React, { useState } from 'react';

const MINIATURES = [
  {
    id: 'm1',
    name: 'Phantom Zenith',
    brand: 'Seri Rolls Royce',
    image: 'https://images.unsplash.com/photo-1638845892011-89d9703f8361?auto=format&fit=crop&q=80&w=800',
    color: '#E5E7EB',
    scale: 'Skala 1:18',
    desc: 'Interpretasi miniatur paling murni dari kemewahan abadi, menampilkan aksen perak satin dan interior kulit tiruan yang dijahit tangan.'
  },
  {
    id: 'm2',
    name: 'Continental V8',
    brand: 'Seri Bentley',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800',
    color: '#FFFFFF',
    scale: 'Skala 1:24',
    desc: 'Edisi kolektor Continental V8 ini dibuat dengan presisi teknis tinggi, menampilkan detail interior yang mewah dan pengerjaan cat premium.'
  },
  {
    id: 'm3',
    name: 'Revuelto Pure',
    brand: 'Seri Lamborghini',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
    color: '#F3F4F6',
    scale: 'Skala 1:18',
    desc: 'Menangkap siluet agresif dari era baru hybrid Lamborghini dalam balutan warna putih mutiara yang elegan dan detail mesin yang terlihat.'
  }
];

const Showcase3D: React.FC = () => {
  const [activeId, setActiveId] = useState(MINIATURES[1].id);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center min-h-[550px]">
      {MINIATURES.map((min) => (
        <div 
          key={min.id}
          onClick={() => setActiveId(min.id)}
          className={`relative group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            activeId === min.id ? 'w-full md:w-[500px]' : 'w-full md:w-48'
          }`}
        >
          <div className={`relative overflow-hidden rounded-[2.5rem] h-[500px] transition-all duration-700 ${
            activeId === min.id ? 'shadow-2xl' : 'shadow-lg grayscale hover:grayscale-0 opacity-60 hover:opacity-100'
          }`}>
            <img 
              src={min.image} 
              alt={min.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 ${
              activeId === min.id ? 'opacity-80' : 'opacity-40'
            }`}></div>
            
            {/* Content Container */}
            <div className="absolute bottom-0 left-0 p-8 w-full text-white overflow-hidden">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 block mb-2 transform transition-transform duration-700">
                {min.brand}
              </span>
              
              <h3 className={`font-playfair leading-tight transition-all duration-700 ${
                activeId === min.id ? 'text-3xl mb-3' : 'text-xl mb-0 rotate-[-90deg] md:rotate-0 origin-left translate-y-[-100px] md:translate-y-0'
              }`}>
                {min.name}
              </h3>
              
              <div className={`transition-all duration-700 ease-in-out ${
                activeId === min.id ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 translate-y-10'
              }`}>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {min.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium border-l-2 border-white pl-3 uppercase tracking-widest">
                    {min.scale}
                  </span>
                  <button className="px-5 py-2 bg-white text-gray-900 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-lg">
                    Lihat Koleksi
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Shadow effect under the active card */}
          {activeId === min.id && (
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-gray-900/10 blur-3xl rounded-full scale-y-50 animate-pulse"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Showcase3D;
