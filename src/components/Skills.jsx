import React from "react";

export default function Skills({ skills }) {
  return (
    <div className="mb-12">
      <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl hover:shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center lg:text-left transition-colors duration-300">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-750 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-5">
                {typeof skill.icon === 'string' && skill.icon.startsWith('/') ? (
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-16 h-16 p-2 bg-blue-100 dark:bg-gray-800 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-all duration-300 transform group-hover:scale-110 object-contain"
                  />
                ) : (
                  <span className="text-4xl p-3 bg-blue-100 dark:bg-gray-800 rounded-xl group-hover:bg-blue-200 transition-all duration-300">
                    {skill.icon}
                  </span>
                )}
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg transition-colors duration-300">{skill.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {skill.years_of_experience} year{skill.years_of_experience > 1 ? "s" : ""} experience
                  </p>
                </div>
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                    skill.level === "advanced"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      : skill.level === "intermediate"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                  }`}
                >
                  {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex-grow h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        skill.level === "advanced"
                          ? "bg-gradient-to-r from-green-400 to-emerald-500"
                          : skill.level === "intermediate"
                            ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                            : "bg-gradient-to-r from-yellow-400 to-amber-500"
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-3 min-w-max transition-colors duration-300">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}