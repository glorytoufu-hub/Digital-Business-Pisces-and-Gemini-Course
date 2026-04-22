import React from 'react';
import { Clock, BookOpen, Star, ChevronRight } from 'lucide-react';
import { Course, formatCurrency } from '../../constants';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const isFree = course.price === 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary-600 rounded-full text-xs font-bold shadow-sm">
            {course.category}
          </span>
          {isFree && (
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold shadow-sm">
              GRATIS
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-400 ml-1 font-medium">(120+ Ulasan)</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-primary-600 transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            {course.level}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <span className={isFree ? 'text-green-600 font-extrabold text-lg' : 'text-primary-900 font-extrabold text-lg'}>
            {formatCurrency(course.price)}
          </span>
          <button className="p-2 bg-primary-50 text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-all group/btn">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
