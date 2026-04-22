import React from 'react';
import Hero from '../components/home/Hero';
import { COURSES } from '../constants';
import CourseCard from '../components/ui/CourseCard';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap, Target, BookOpen, UserCheck } from 'lucide-react';

const Home = () => {
  const featuredCourses = COURSES.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 mb-4">Kenapa Belajar di Pisces & Gemini?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto italic font-medium">Platform edukasi dengan kurikulum paling praktis untuk kebutuhan masa kini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Pembelajaran Cepat", desc: "Metode belajar efektif langsung ke inti materi." },
              { icon: Target, title: "Tujuan Jelas", desc: "Setiap kursus didesain untuk skill siap kerja." },
              { icon: BookOpen, title: "Materi Rekaman", desc: "Akses selamanya, belajar kapan saja di mana saja." },
              { icon: UserCheck, title: "Bimbingan Mentor", desc: "Diskusi langsung dengan para ahli di komunitas." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary-200 transition-colors"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm mb-6">
                  <feature.icon size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 mb-4">Kursus Terpopuler</h2>
              <p className="text-gray-500">Mulai langkah karir digital Anda dengan kursus pilihan terbaik kami.</p>
            </div>
            <Link to="/courses" className="btn-secondary group flex items-center gap-2">
              Lihat Semua Kursus <BookOpen size={18} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-primary-600 rounded-[3rem] p-12 md:p-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-8 leading-tight">
                Siap Meluncurkan Karir Digital Anda Sekarang?
              </h2>
              <p className="text-lg text-primary-50 mb-12 opacity-90">
                Bergabunglah dengan 10.000+ alumni lainnya yang telah sukses mendigitalkan bisnis dan karir mereka.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/courses" className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                  Daftar Sekarang
                </Link>
                <Link to="/about" className="bg-primary-700 text-white px-8 py-4 rounded-full font-bold border border-primary-500 hover:bg-primary-800 transition-colors">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
