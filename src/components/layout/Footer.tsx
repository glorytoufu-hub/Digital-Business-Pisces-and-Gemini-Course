import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary-400 w-8 h-8" />
            <span className="text-2xl font-display font-bold text-white tracking-tight">
              Pisces<span className="text-primary-400">&</span>Gemini
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Platform edukasi bisnis digital terpercaya untuk membantu Anda meraih sukses di era ekonomi baru. Belajar dari praktisi langsung.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-primary-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Navigasi</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Kursus</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Kursus Populer</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/courses" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Business Analyst</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Startup Academy</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Remote Worker</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Dapatkan tips bisnis digital gratis setiap minggu.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email Anda" 
              className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-600 hover:bg-primary-700 p-2 rounded-lg text-white transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:row items-center justify-between gap-4 text-xs">
        <p>© 2026 Pisces and Gemini. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
