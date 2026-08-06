export default function Home() {
  const metrics = [
    {
      label: "{{PAGE_DEMO_METRIC_ARCH_LABEL}}",
      value: "{{ARCHITECTURE_NAME}}",
    },
    {
      label: "{{PAGE_DEMO_METRIC_READY_LABEL}}",
      value: "{{PAGE_DEMO_METRIC_READY_VALUE}}",
    },
    {
      label: "{{PAGE_DEMO_METRIC_SCALE_LABEL}}",
      value: "{{PAGE_DEMO_METRIC_SCALE_VALUE}}",
    },
  ];

  const commands = ["{{STARTER_COMMAND}}", "{{SECONDARY_COMMAND}}"];
  
  const blueprint = [
    {
      label: "{{BLUEPRINT_ONE_LABEL}}",
      title: "{{BLUEPRINT_ONE_TITLE}}",
      detail: "{{BLUEPRINT_ONE_DETAIL}}",
    },
    {
      label: "{{BLUEPRINT_TWO_LABEL}}",
      title: "{{BLUEPRINT_TWO_TITLE}}",
      detail: "{{BLUEPRINT_TWO_DETAIL}}",
    },
    {
      label: "{{BLUEPRINT_THREE_LABEL}}",
      title: "{{BLUEPRINT_THREE_TITLE}}",
      detail: "{{BLUEPRINT_THREE_DETAIL}}",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.12),rgba(255,255,255,0))] text-slate-200 px-6 py-16 md:py-24 overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glowing background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-6xl flex flex-col gap-16">
        {/* Animated hero header */}
        <section className="space-y-6 text-center md:text-left">
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 bg-cyan-500/5 border border-cyan-500/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              {{PAGE_DEMO_BADGE}}
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 font-mono">
              // {{PROJECT_NAME}}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                {{PAGE_DEMO_TITLE}}
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 mx-auto md:mx-0">
            {{PAGE_DEMO_SUBTITLE}}
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-[1.3fr_1fr]">
          {/* Left Section - Metrics Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
            {metrics.map((item) => (
              <article 
                key={item.label} 
                className="group relative rounded-2xl border border-slate-900 bg-gradient-to-br from-slate-950 to-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-800 hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 rounded-2xl" />
                
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400/80 transition-colors font-mono">
                      {item.label}
                    </p>
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors" />
                  </div>
                  <p className="text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500" />
              </article>
            ))}
          </section>

          {/* Right Section - Commands Panel */}
          <section className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8 md:p-10 backdrop-blur-xl shadow-2xl h-fit">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                  {{PAGE_DEMO_PANEL_TITLE}}
                </p>
                <span className="text-[9px] font-mono text-slate-600 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">interactive CLI</span>
              </div>

              <div className="space-y-4">
                {commands.map((command) => (
                  <div 
                    key={command} 
                    className="group relative rounded-xl border border-slate-900 bg-slate-950/80 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-950 hover:shadow-lg cursor-copy overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between">
                      <code className="relative block text-xs font-mono text-slate-300 group-hover:text-white transition-colors overflow-x-auto whitespace-nowrap">
                        {command}
                      </code>
                      <span className="text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 font-mono">⚡ copy</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] leading-relaxed text-slate-500 border-t border-slate-900/60 pt-4">
                {{PAGE_GENERATORS_HINT}}
              </p>
            </div>
          </section>
        </div>

        {/* Blueprint Section */}
        <section className="rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950 to-zinc-900/30 p-8 md:p-12 shadow-2xl">
          <div className="mb-10 space-y-2">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {{PAGE_BLUEPRINT_LABEL}}
              </h2>
              <div className="hidden flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent md:block" />
            </div>
            <p className="text-xs text-slate-500 font-mono">
              // RECOMENDACIONES DE INICIO Y ESTRUCTURA
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blueprint.map((item, index) => (
              <article 
                key={item.title} 
                className="group relative rounded-2xl border border-slate-900 bg-slate-950 p-6 transition-all duration-300 hover:border-slate-800 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 rounded-2xl" />

                {/* Large Background Counter */}
                <div className="absolute -right-5 -top-5 text-7xl font-bold text-slate-900/40 group-hover:text-slate-800/45 transition-colors select-none font-mono tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 font-mono">
                      {item.label}
                    </p>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer info */}
        <footer className="flex items-center justify-between border-t border-slate-900/60 pt-8 text-[10px] font-mono text-slate-500">
          <span>CREADO CON CREATE-WEB-ARCH // KAIROS SYSTEMS</span>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  );
}
}
