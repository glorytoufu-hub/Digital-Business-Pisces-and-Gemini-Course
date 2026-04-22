import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, ArrowRight, ShieldCheck, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary-50 rounded-bl-[100px] hidden md:block" />
      <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-primary-100/50 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse" />
            Platform Edukasi Digital Nomor #1 di Indonesia
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-gray-900 leading-[1.1] mb-6">
            Kuasai Bisnis Digital Bersama <span className="text-primary-600">Pisces & Gemini</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Tingkatkan keahlian digital Anda mulai dari pemasaran, analisis bisnis, hingga menjadi konten kreator profesional. Belajar dari rumah, sukses di mana saja.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/courses" className="btn-primary flex items-center justify-center gap-2 group">
              Lihat Kursus <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <PlayCircle className="text-primary-600" /> Demo Video
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-100">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary-600">
                <Users size={20} />
                <span className="font-bold text-xl text-gray-900">10k+</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Alumni</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary-600">
                <Trophy size={20} />
                <span className="font-bold text-xl text-gray-900">4.9/5</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Rating</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary-600">
                <ShieldCheck size={20} />
                <span className="font-bold text-xl text-gray-900">Sertifikat</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Resmi</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=1200"
              alt="Professional person working at home with laptop"
              className="w-full h-auto object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
              <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-4 text-white">
                <p className="text-sm font-medium">"Berkat kursus ini, saya sekarang bisa bekerja remote sebagai Business Analyst di perusahaan Singapura!"</p>
                <p className="text-xs mt-2 opacity-80">— Rina S., Alumni Startup Bootcamp</p>
              </div>
            </div>
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce shadow-primary-200">
            <div className="bg-green-100 text-green-600 p-2 rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Materi Terupdate</p>
              <p className="text-sm font-bold text-gray-900">Update 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
