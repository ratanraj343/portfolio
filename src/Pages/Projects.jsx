import amronPreview from "../assets/images/amron-preview.png";
import notflixPreview from "../assets/images/notflix-preview.png"
import tummyTrek from "../assets/images/tummy-trek-preview.png"
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  return (
     <section className="pt-32 pb-20 min-h-screen">

      <div className="max-w-6xl mx-auto px-8 space-y-16">

        {/* Heading */}
        <div className="space-y-4">

          <p className="text-base font-medium uppercase tracking-[0.15em] text-slate-300">
            Projects
          </p>

          <h1 className="text-3xl font-medium leading-relaxed max-w-2xl">
            A selection of projects focused on thoughtful user experiences,
            clean frontend architecture, and modern web interfaces.
          </h1>

        </div>

        {/* Projects List */}
        <div className="space-y-10">

          <ProjectCard
            type="Featured Project"
            title="Amron"
            description="A responsive automotive-focused web application built with React, focused on clean UI architecture, reusable components, and smooth user experience."
            tags={["React", "CSS", "JavaScript"]}
            image={amronPreview}
            liveLink="https://amaron-react.vercel.app/"
            codeLink="https://github.com/ratanraj343/amaron-react"
          />

          <ProjectCard
            type="Frontend Practice"
            title="Tummy Trek"
            description="A food discovery web application designed to explore restaurants, menus, and responsive layouts while practicing component-based frontend development."
            tags={["React", "Parcel", "CSS", "Tailwind"]}
            image={tummyTrek}
            liveLink="https://tummy-trek.vercel.app/"
            codeLink="https://github.com/ratanraj343/tummy-trek"
          />

          <ProjectCard
            type="UI Clone"
            title="Netflix Clone"
            description="A Netflix-inspired landing page focused on responsive layout design, clean visual hierarchy, and modern UI recreation using frontend fundamentals."
            tags={["HTML", "CSS", "Bootstrap"]}
            image={notflixPreview}
            liveLink="https://ratan-notflix.vercel.app/"
            codeLink="https://github.com/ratanraj343/notflix-clone"
          />

        </div>

      </div>

    </section>
  );
};

export default Projects;
