
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white transform skew-x-12 translate-x-32 hidden md:block"></div>
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2070" 
          alt="Showroom Mobil Mewah" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 items-center">
        <div className="text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in">
            Koleksi Terbaru 2025
          </span>
          
          <p className="text-gray-800 text-2xl md:text-3xl font-playfair max-w-md mb-4 leading-relaxed italic">
            "Definisi baru dari kemewahan otomotif."
          </p>
          
          <p className="text-gray-600 text-lg max-w-md mb-10 leading-relaxed">
            Rasakan pertemuan antara performa tinggi dan desain murni. Temukan koleksi kendaraan kelas dunia yang dirancang bagi mereka yang menghargai setiap detail kesempurnaan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all rounded shadow-xl">
              Jelajahi Koleksi
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-800 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-all rounded">
              Atur Pertemuan
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-end relative">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-80 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
              className="w-full h-48 object-cover rounded-xl mb-4"
              alt="Mobil Unggulan"
            />
            <h3 className="text-xl font-bold text-gray-900">Silver Specter GT</h3>
            <p className="text-gray-500 text-sm mb-4">Ekspresi pamungkas dari kekuatan dan keanggunan.</p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-lg font-bold text-gray-900">$285,000</span>
              <button className="text-xs font-bold text-gray-400 hover:text-gray-900">Lihat Spesifikasi →</button>
            </div>
          </div>
          
          <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50 z-[-1]"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-900">Gulir</span>
        <div className="w-[1px] h-10 bg-gray-900"></div>
      </div>
    </section>
  );
};

export default Hero;
