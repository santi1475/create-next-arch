export default function Home() {
  const quickFacts = [
    {
      label: "{{PAGE_ARCH_LABEL}}",
      value: "{{ARCHITECTURE_NAME}}",
      detail: "{{ARCHITECTURE_SUMMARY}}",
    },
    {
      label: "{{PAGE_STACK_LABEL}}",
      value: "{{LIBRARIES_SUMMARY}}",
      detail: "{{PAGE_NEXT_STEP_LABEL}}",
    },
    {
      label: "{{PAGE_UI_LABEL}}",
      value: "{{UI_SUMMARY}}",
      detail: "{{STARTER_COMMAND}}",
    },
  ];

  const generators = ["{{STARTER_COMMAND}}", "{{SECONDARY_COMMAND}}"];

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
    <main className="relative min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] text-zinc-200 px-6 py-16 md:py-24 overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative glowing backdrops */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[5%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16">
        {/* Header/Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-8 md:p-12 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-ping" />
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  {{ PAGE_BADGE }}
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.25em] font-mono">
                  // {{ PROJECT_NAME }}
                </p>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                    {{ PAGE_TITLE }}
                  </span>
                </h1>
                <p className="max-w-md text-base leading-relaxed text-zinc-400">
                  {{ PAGE_SUBTITLE }}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-zinc-800/60 bg-zinc-900/40 px-4.5 py-2.5 shadow-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/60">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                  <span className="text-xs font-semibold text-zinc-300 tracking-wide">{{ ARCHITECTURE_NAME }}</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-zinc-800/60 bg-zinc-900/40 px-4.5 py-2.5 shadow-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/60">
                  <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]" />
                  <span className="text-xs font-semibold text-zinc-300 tracking-wide">{{ LIBRARIES_SUMMARY }}</span>
                </div>
              </div>
            </div>

            {/* CLI Commands Panel */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/85 p-6 md:p-8 shadow-inner">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
                    {{ PAGE_GENERATORS_LABEL }}
                  </p>
                  <span className="text-[9px] font-mono text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">interactive CLI</span>
                </div>
                <div className="space-y-4">
                  {generators.map((command) => (
                    <div
                      key={command}
                      className="group relative rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900/80 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)] cursor-pointer overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-center justify-between">
                        <code className="relative block overflow-x-auto text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">
                          {command}
                        </code>
                        <span className="text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 font-mono">⚡ copy</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[11px] leading-relaxed text-zinc-500 border-t border-zinc-900/60 pt-4">
                  {{ PAGE_GENERATORS_HINT }}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickFacts.map((item) => (
            <article
              key={item.label}
              className="group relative rounded-2xl border border-zinc-900 bg-gradient-to-br from-zinc-950 to-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-800 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors font-mono">
                    {item.label}
                  </p>
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-400 transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                  {item.value}
                </h2>
                <p className="text-xs leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Blueprint Guide Section */}
        <section className="rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-zinc-900/30 p-8 md:p-12 shadow-2xl">
          <div className="mb-10 space-y-2">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {{ PAGE_BLUEPRINT_LABEL }}
              </h2>
              <div className="hidden flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent md:block" />
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              // RECOMENDACIONES DE INICIO Y BUENAS PRÁCTICAS
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blueprint.map((item, index) => (
              <article
                key={item.title}
                className="group relative rounded-2xl border border-zinc-900 bg-zinc-950 p-6 transition-all duration-300 hover:border-zinc-800 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />
                
                {/* Large Background Counter */}
                <div className="absolute -right-5 -top-5 text-7xl font-bold text-zinc-900/40 group-hover:text-zinc-800/45 transition-colors select-none font-mono tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 group-hover:text-blue-300 transition-colors font-mono">
                      {item.label}
                    </p>
                  </div>

                  <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer info */}
        <footer className="flex items-center justify-between border-t border-zinc-900/60 pt-8 text-[10px] font-mono text-zinc-500">
          <span>CREADO CON CREATE-WEB-ARCH // KAIROS SYSTEMS</span>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  );
}
