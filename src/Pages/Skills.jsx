const Skills = () => {
  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="space-y-4">
          <p className="text-base font-medium uppercase tracking-[0.15em] text-slate-300">
            Skills
          </p>

          <h1 className="text-3xl font-medium leading-relaxed max-w-2xl">
            Technologies and tools I use to build modern, scalable, and
            user-focused digital experiences.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-5xl pt-20">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 space-y-6">
            
            <h2 className="text-xl font-medium">Frontend</h2>

            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                React
              </span>

              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                JavaScript
              </span>
               <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                HTML
              </span>

              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                Tailwind CSS
              </span>
              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                Bootstrap
              </span>


              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                CSS
              </span>
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 space-y-6">
            <h2 className="text-xl font-medium">Tools</h2>

            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                Git
              </span>

              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                GitHub
              </span>

              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                Vite
              </span>

              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                Figma
              </span>
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 space-y-6">
            <h2 className="text-xl font-medium">Currently Exploring</h2>

            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                Node.js
              </span>

              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                Backend Development
              </span>

              <span className="bg-slate-900/40 border border-slate-800 rounded-full px-4 py-2 text-sm text-slate-300">
                System Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
