import { useState, useEffect } from "react";

const Pipeline = () => {
  const [stage, setStage] = useState(0);
  const pipelineData = ['Brief', 'Scope', 'Estimate', 'Build', 'MLR review', 'UAT', 'Deploy'];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prevStage) => (prevStage + 1) % 7);
    }, 1100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-slate-800 rounded-2xl p-8 bg-slate-900/40">
      <h3 className="text-sm font-medium uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-700 pb-2">
        Delivery Pipeline
      </h3>

      <div className="space-y-0">
        {pipelineData.map((item, index) => {
          let status;

          if (index < stage) {
            status = 'CLEARED';
          } else if (index === stage) {
            status = 'ACTIVE';
          } else {
            status = 'QUEUED';
          }

          return (
            <div key={index}>
              {/* Vertical Line (before this stage, except first) */}
              {index > 0 && (
                <div
                  className={`w-1 h-4 ml-5 ${
                    index - 1 < stage ? 'bg-teal-500' : 'bg-slate-600'
                  }`}
                />
              )}

              {/* Stage Row */}
              <div className="flex items-center gap-4">
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium border-2 flex-shrink-0 ${
                    status === 'CLEARED'
                      ? 'bg-teal-500/20 border-teal-500 text-teal-400'
                      : status === 'ACTIVE'
                      ? 'bg-indigo-500/30 border-indigo-500 text-indigo-300 shadow-lg shadow-indigo-500/50'
                      : 'bg-slate-700/50 border-slate-600 text-slate-400'
                  }`}
                >
                  {status === 'CLEARED' ? '✓' : index + 1}
                </div>

                {/* Stage Name */}
                <span className="text-slate-300 font-medium flex-grow">{item}</span>

                {/* Status Label */}
                <span
                  className={`text-xs font-medium uppercase tracking-wider ${
                    status === 'CLEARED'
                      ? 'text-teal-400'
                      : status === 'ACTIVE'
                      ? 'text-indigo-400'
                      : 'text-slate-500'
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pipeline;