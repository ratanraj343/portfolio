const ProjectCard = ({
  type,
  title,
  description,
  tags,
  image,
  liveLink,
  codeLink,
}) => {
  return (
    <div className="max-w-4xl border border-slate-800 rounded-2xl p-8 bg-slate-900/40 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/60">

      <div className="grid grid-cols-[1.2fr_0.8fr] gap-10 items-start">

        {/* Left Side */}
        <div className="space-y-6">

          <div className="space-y-3">

            <p className="text-sm uppercase tracking-[0.15em] text-slate-400">
              {type}
            </p>

            <h2 className="text-2xl font-medium">
              {title}
            </h2>

            <p className="text-slate-400 leading-relaxed">
              {description}
            </p>

          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-300">

            {tags.map((tag, index) => (
              <span
                key={index}
                className="border border-slate-700 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}

          </div>

          <div className="flex items-center gap-4 pt-2">

            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-2 text-sm transition-all hover:border-indigo-400 hover:text-indigo-400 hover:bg-slate-800"
            >
              Live Site ↗
            </a>

            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-2 text-sm transition-all hover:border-indigo-400 hover:text-indigo-400 hover:bg-slate-800"
            >
              View Code ↗
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="aspect-[4/3] rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">

            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;