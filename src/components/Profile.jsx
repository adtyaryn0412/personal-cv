import React from "react";
import { Download, Mail, MapPin } from "lucide-react";

export default function Profile({ data, statistics }) {
  return (
    <div className="mb-12">
      <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 relative overflow-hidden transition-colors duration-300">
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-16 -mt-16 z-0 transition-colors duration-300"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={data.photo_url}
              alt={data.full_name}
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg transition-colors duration-300"
            />
          </div>

          <div className="flex-grow text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-bold tracking-wider mb-4 uppercase transition-colors duration-300">
              Informatics Engineering Student {data.angkatan}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight transition-colors duration-300">
              {data.full_name}
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">
              <span className="px-3 py-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-bold rounded-full tracking-wider shadow-sm transition-colors duration-300">
                {data.nim}
              </span>
            </div>
            
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold mb-6">
              {data.headline}
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
              {data.short_bio}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
              >
                <Download size={18} />
                Download CV
              </button>
              
              <a 
                href={data.social_links?.email}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-300 transition-all shadow-sm"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-300">
              <MapPin size={16} />
              {data.location} • {data.university}
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-row lg:flex-col gap-4 justify-center">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl text-center min-w-[100px] border border-gray-100 dark:border-gray-600 transition-colors duration-300">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{statistics.profile_complete_percent}%</div>
              <div className="text-xs text-gray-500 dark:text-gray-300 uppercase tracking-wide font-semibold">Complete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}