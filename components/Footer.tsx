
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
              <span className="text-gray-900 font-bold italic text-sm">H</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">HIY YAN<span className="text-gray-500 font-light italic ml-1">MOTORS</span></span>
          </div>
          <p className="text-sm leading-relaxed mb-8">
            Menetapkan standar untuk distribusi otomotif mewah. Sejak 1992, Hiy Yan Motors hanya mengkurasi mahakarya teknik terbaik bagi klien kami yang paling pemilih.
          </p>
          <div className="flex gap-4">
            {['fb', 'tw', 'ig', 'li'].map(s => (
              <a key={s} href="#" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all">
                <span className="text-[10px] font-bold uppercase">{s}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Showroom</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Mayfair, London</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Beverly Hills, CA</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dubai Marina, UAE</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ginza, Tokyo</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Layanan</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Kustom Bespoke</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Logistik Global</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pencarian Kendaraan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Perawatan Berkala</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Kontak</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-white font-medium">E:</span> 
              <a href="mailto:ianfirman06@gmail.com" className="hover:text-white transition-colors">ianfirman06@gmail.com</a>
            </li>
            <li className="flex gap-3">
              <span className="text-white font-medium">WA:</span> 
              <a href="https://wa.me/6285710271503" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+62 857 1027 1503</a>
            </li>
          </ul>
          <div className="mt-8">
            <label className="text-[10px] uppercase font-bold tracking-widest mb-2 block">Buletin</label>
            <div className="flex">
              <input type="email" placeholder="Email Anda" className="bg-transparent border border-gray-800 px-4 py-2 text-sm w-full outline-none focus:border-white transition-all" />
              <button className="bg-white text-gray-900 px-4 py-2 text-xs font-bold uppercase">Gabung</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold">
        <p>© 2025 Hiy Yan Motors Group Ltd. Hak Cipta Dilindungi Undang-Undang.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
