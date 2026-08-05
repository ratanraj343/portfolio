import experienceData from "../data/experienceData";
const ProfessionalExperience = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-xl font-medium leading-relaxed md:leading-relaxed max-w-2xl mb-6">
        Professional Experience
      </h1>
      <div className="relative pl-12">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 top-7 bottom-0 w-1.5 bg-indigo-500"></div>
        
        {experienceData.map((experience, index) => (
          <div key={index} className="relative max-w-4xl space-y-2 mb-10 border border-slate-800 rounded-2xl p-6 md:p-8 bg-slate-900/40 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/60">
            
            {/* Dot */}
            <div className={`absolute left-[-41px] top-6 w-6 h-6 rounded-full border-4 border-slate-900  ${
              index === 0 ? 'bg-indigo-500 shadow-lg shadow-indigo-500/50' : 'bg-slate-500 '
            }`}></div>

            <div className="block md:flex items-center justify-between">
              <h2 className="text-2xl md:text-xl font-medium leading-relaxed md:leading-relaxed max-w-2xl">
                {experience.title}
              </h2>
              <p>{experience.dateRange}</p>
            </div>
            <p className="text-base font-small text-slate-400">
                {experience.company}
                </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              {experience.bullets.map((bullet, bulletindex) => (
                <li key={bulletindex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfessionalExperience;