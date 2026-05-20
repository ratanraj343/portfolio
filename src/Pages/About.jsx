const About = () => {
  return (
    <section className="py-32 min-h-screen ">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <p className="text-base font-medium uppercase tracking-[0.15em] text-slate-400">
              About
            </p>

            <h2 className="text-2xl leading-relaxed font-medium max-w-xl">
              I’m a software engineer focused on creating clean and thoughtful
              digital experiences.
            </h2>

            <div className="space-y-6 text-slate-400 leading-relaxed max-w-xl">
              <p>
                My journey into development started with curiosity about how
                digital experiences are built and evolved into a passion for
                creating clean, user-focused interfaces.
              </p>

              <p>
                I enjoy working at the intersection of design and engineering,
                building applications that are both functional and visually
                intentional.
              </p>

              <p>
                Currently, I’m focused on frontend development with React,
                modern JavaScript, and creating scalable UI experiences.
              </p>
              
            </div>
          </div>

          <div className="pt-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 h-fit">
              <div className="space-y-6">
                <p className="text-base font-medium uppercase tracking-[0.15em] text-slate-300">
                  Experience
                </p>

                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold">3+</h3>

                  <p className="text-slate-300">Years of Experience</p>
                </div>

                <div className="border-t border-slate-800 pt-6 space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-medium">Software Engineer</h4>

                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <p>Indegene</p>

                      <p>2022 — Present</p>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed">
                    Worked on production-grade applications with a focus on
                    building scalable, maintainable, and user-focused
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
