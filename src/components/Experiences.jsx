import { Calendar, Briefcase } from "lucide-react"

const TypeIcon = ({ type }) => {
  switch (type) {
    case "internship":
      return <img src="/assets/security.png" alt="Internship" className="w-5 h-5 object-contain" />
    case "project":
      return <img src="/assets/django.png" alt="Project" className="w-5 h-5 object-contain" />
    case "organization":
      return <img src="/assets/networking.png" alt="Organization" className="w-5 h-5 object-contain" />
    default:
      return <Briefcase size={20} />
  }
}

const getBadgeStyle = (type) => {
  const styles = {
    internship: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    project: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    organization: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  }
  return styles[type] || styles.internship
}

const getIconBg = (type) => {
  const styles = {
    internship: "bg-purple-500 border-purple-600",
    project: "bg-green-500 border-green-600",
    organization: "bg-blue-500 border-blue-600",
  }
  return styles[type] || styles.internship
}

const TypeBadge = ({ type }) => {
  const labels = {
    internship: "Internship",
    project: "Project",
    organization: "Organization",
  }

  return <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${getBadgeStyle(type)} hover:shadow-md transition-all duration-300`}>{labels[type]}</span>
}

export default function Experiences({ experiences }) {
  return (
    <div className="mb-12">
      <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl hover:shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center lg:text-left transition-colors duration-300">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-1 bg-gradient-to-b from-gray-300 to-gray-100 dark:from-gray-600 dark:to-gray-800 group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-300"></div>
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 flex justify-center pt-1">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ${getIconBg(exp.type)} hover:shadow-xl hover:scale-110 transition-all duration-300 relative z-10`}>
                    <TypeIcon type={exp.type} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow pb-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-750 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.organization}</p>
                    </div>
                    <TypeBadge type={exp.type} />
                  </div>

                  {/* Date Range */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                    <Calendar size={16} className="text-blue-500" />
                    <span>
                      {new Date(exp.start_date).toLocaleDateString("id-ID", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      —{" "}
                      {exp.is_current ? (
                        <span className="font-semibold text-green-600 dark:text-green-400">Present</span>
                      ) : (
                        new Date(exp.end_date).toLocaleDateString("id-ID", {
                          month: "short",
                          year: "numeric",
                        })
                      )}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 transition-colors duration-300">{exp.description}</p>

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-600">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-md transition-all duration-300 cursor-default transform hover:scale-110"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}