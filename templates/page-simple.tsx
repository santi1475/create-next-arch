import React from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] text-zinc-200 px-6 py-16 md:py-24 overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative glowing backdrops */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[500px] rounded-full bg-zinc-800/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-16">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-950/40 px-4.5 py-2 text-xs font-semibold tracking-wide text-zinc-400 backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              {{ PROJECT_NAME }}
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                {{ PAGE_SIMPLE_TITLE }}
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed text-balance">
              {{ PAGE_SIMPLE_BODY }}
            </p>
          </div>

          {/* Code Block / Terminal */}
          <div className="mx-auto max-w-xl">
            <div className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm overflow-hidden hover:border-zinc-700/80 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.1)] transition-all duration-300">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-900 bg-zinc-950/40">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-red-500/50 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-yellow-500/50 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-green-500/50 transition-colors" />
                </div>
                <span className="ml-auto text-[10px] text-zinc-600 font-mono">Terminal</span>
              </div>
              <code className="block px-6 py-6 text-sm font-mono text-zinc-300 overflow-x-auto text-left whitespace-nowrap">
                <span className="text-zinc-600 select-none">$</span> {{ STARTER_COMMAND }}
              </code>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="border-t border-zinc-900/60 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Moderno',
                description: 'Construido con los últimos patrones de diseño y estándares de arquitectura limpia.',
              },
              {
                title: 'Rápido',
                description: 'Optimizado al máximo para el rendimiento y la velocidad de desarrollo.',
              },
              {
                title: 'Escalable',
                description: 'Preparado para crecer e incorporar nuevas capas funcionales sin fricciones.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/30 p-6 hover:border-zinc-800 hover:bg-zinc-950/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800/80 group-hover:bg-zinc-800/60 transition-colors flex items-center justify-center">
                  <div className="h-4 w-4 rounded-sm bg-gradient-to-r from-blue-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-sm font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors font-semibold">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-zinc-900/60 pt-16 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              ¿Listo para construir?
            </h2>
            <p className="mx-auto max-w-md text-xs text-zinc-400 leading-relaxed">
              La base y los comandos del CLI están listos para empezar a desplegar tu lógica de negocio.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto px-6 py-2.5 bg-zinc-200 text-zinc-950 hover:bg-white rounded-xl text-xs font-bold transition-colors">
              Comenzar a Editar
            </button>
            <button className="w-full sm:w-auto px-6 py-2.5 border border-zinc-800 bg-zinc-950/30 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-950 hover:border-zinc-700 rounded-xl text-xs font-bold transition-all">
              Leer Documentación
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-zinc-900/60 pt-8 text-[10px] font-mono text-zinc-600">
          <span>CREADO CON CREATE-WEB-ARCH // KAIROS SYSTEMS</span>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  );
}
}
