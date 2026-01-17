
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase3D from './components/Showcase3D';
import Inventory from './components/Inventory';
import ConciergeChat from './components/ConciergeChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="showcase" className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-gray-800">Seri Miniatur 3D</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Jelajahi koleksi mahakarya teknik pilihan kami dalam miniatur interaktif dengan detail tinggi.</p>
            </div>
            <Showcase3D />
          </div>
        </section>

        <Inventory />

        <section id="concierge" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair mb-6">Concierge Otomotif Pribadi Anda</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tingkatkan pengalaman pembelian mobil Anda di Hiy Yan Motors. Concierge Yan Motors kami yang didukung AI menggunakan kecerdasan tercanggih untuk memandu Anda melalui seluk-beluk kemewahan otomotif, membantu Anda memilih kendaraan yang bukan sekadar mesin, melainkan pernyataan jiwa Anda.
              </p>
              <div className="flex gap-4">
                <div className="p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50 w-full">
                  <span className="block text-2xl font-bold text-gray-800">24/7</span>
                  <span className="text-sm text-gray-500">Dukungan Elit</span>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50 w-full">
                  <span className="block text-2xl font-bold text-gray-800">Global</span>
                  <span className="text-sm text-gray-500">Jaringan Pengiriman</span>
                </div>
              </div>
            </div>
            <ConciergeChat />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
