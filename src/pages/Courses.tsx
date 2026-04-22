import React, { useState } from 'react';
import { COURSES } from '../constants';
import CourseCard from '../components/ui/CourseCard';
import { Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';

const Courses = () => {
  const [filter, setFilter] = useState('Semua');
  const [search, setSearch] = useState('');

  const categories = ['Semua', ...new Set(COURSES.map(c => c.category))];

  const filteredCourses = COURSES.filter(course => {
    const matchesFilter = filter === 'Semua' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-4">
            Eksplorasi Kursus Kami
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan kursus yang sesuai dengan minat dan tujuan karier Anda. Dari tingkat pemula hingga ahli.
          </p>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-200' 
                  : 'bg-white text-gray-600 border border-gray-100 hover:border-primary-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari kursus..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-full focus:ring-2 focus:ring-primary-500 shadow-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="text-gray-400" size={32} />
              </div>
              <p className="text-gray-500 font-medium">Tidak ada kursus yang ditemukan.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
