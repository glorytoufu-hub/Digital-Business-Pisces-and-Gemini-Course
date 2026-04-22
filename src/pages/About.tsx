import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-4">Tentang Kami</h4>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 leading-tight">
              Misi Kami Mendigitalkan Masa Depan Indonesia
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Pisces and Gemini lahir dari keinginan untuk menjembatani kesenjangan keahlian digital di Indonesia. Kami percaya bahwa setiap orang berhak mendapatkan akses ke pendidikan bisnis digital berkualitas tinggi, terlepas dari latar belakang mereka.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-2 rounded-lg text-primary-600"><CheckCircle2 size={24} /></div>
                <div>
                  <h5 className="font-bold text-gray-900">Kurikulum Berbasis Industri</h5>
                  <p className="text-gray-500 text-sm">Materi yang diajarkan sesuai dengan kebutuhan pasar kerja saat ini.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-2 rounded-lg text-primary-600"><CheckCircle2 size={24} /></div>
                <div>
                  <h5 className="font-bold text-gray-900">Mentor Praktisi</h5>
                  <p className="text-gray-500 text-sm">Belajar langsung dari mereka yang telah sukses di bidangnya.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg mt-8" alt="Team collaborating" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg" alt="Workshop session" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16">Nilai-Nilai Utama Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary-400" size={32} />
              </div>
              <h4 className="text-xl font-bold">Integritas</h4>
              <p className="text-primary-100/70">Kami menjunjung tinggi kejujuran dalam setiap materi dan sertifikasi yang kami berikan.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary-400" size={32} />
              </div>
              <h4 className="text-xl font-bold">Berorientasi Hasil</h4>
              <p className="text-primary-100/70">Fokus utama kami adalah kesuksesan karier dan perkembangan bisnis para alumni.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary-400" size={32} />
              </div>
              <h4 className="text-xl font-bold">Kolaborasi</h4>
              <p className="text-primary-100/70">Kami percaya komunitas yang kuat adalah kunci percepatan belajar bisnis digital.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
