export interface Course {
  id: string;
  title: string;
  category: string;
  price: number; // 0 means free
  description: string;
  image: string;
  duration: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
}

export const COURSES: Course[] = [
  {
    id: 'digital-marketing-101',
    title: 'Dasar-Dasar Digital Marketing',
    category: 'Digital Marketing',
    price: 0,
    description: 'Pelajari strategi pemasaran digital terbaru untuk meningkatkan bisnis Anda dari nol.',
    image: 'https://images.unsplash.com/photo-1758599879065-46fd59235166?auto=format&fit=crop&q=80&w=800',
    duration: '10 Jam',
    level: 'Pemula',
  },
  {
    id: 'influencer-branding',
    title: 'Membangun Personal Brand sebagai Influencer',
    category: 'Influencer',
    price: 450000,
    description: 'Cara jitu menjadi influencer yang berpengaruh dan mendapatkan kerjasama brand besar.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    duration: '15 Jam',
    level: 'Pemula',
  },
  {
    id: 'streaming-mastery',
    title: 'Streaming Mastery: Menjadi Streamer Profesional',
    category: 'Streamer',
    price: 350000,
    description: 'Teknik setup, engagement audiens, dan monetisasi untuk calon streamer sukses.',
    image: 'https://images.unsplash.com/photo-1560253023-3ee5d6452949?auto=format&fit=crop&q=80&w=800',
    duration: '12 Jam',
    level: 'Menengah',
  },
  {
    id: 'business-analyst-bootcamp',
    title: 'Business Analyst Bootcamp: Dari Data Jadi Profit',
    category: 'Business Analyst',
    price: 1200000,
    description: 'Kuasai alat analisis bisnis untuk pengambilan keputusan yang lebih tajam dan akurat.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    duration: '40 Jam',
    level: 'Menengah',
  },
  {
    id: 'startup-launcher',
    title: 'Startup Launcher: Dari Ide ke Unicorn',
    category: 'Startup',
    price: 0,
    description: 'Langkah-langkah mendirikan startup, validasi ide, hingga mencari pendanaan awal.',
    image: 'https://images.unsplash.com/photo-1522071823991-b5ae72648558?auto=format&fit=crop&q=80&w=800',
    duration: '8 Jam',
    level: 'Pemula',
  },
  {
    id: 'remote-work-survival',
    title: 'Remote Work Survival Guide',
    category: 'Remote Work',
    price: 250000,
    description: 'Tips produktif bekerja dari rumah dan meniti karier di pasar global.',
    image: 'https://images.unsplash.com/photo-1586282391129-59a998fd93d0?auto=format&fit=crop&q=80&w=800',
    duration: '6 Jam',
    level: 'Pemula',
  },
];

export const NAV_LINKS = [
  { label: 'Beranda', path: '/' },
  { label: 'Kursus', path: '/courses' },
  { label: 'Tentang Kami', path: '/about' },
];

export const formatCurrency = (value: number) => {
  if (value === 0) return 'Gratis';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
};
