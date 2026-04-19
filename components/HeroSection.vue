<template>
  <section class="px-6 py-20 mx-auto max-w-6xl lg:py-32 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <span class="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-mocha-dark bg-mocha-medium/30 rounded-full">
        Disponible pour de nouveaux projets
      </span>
      <h1 class="text-5xl font-serif leading-tight lg:text-7xl text-mocha-deep">
        Développeur <br>
        <span class="text-mocha-dark italic">Full Stack</span>
      </h1>
      <p class="max-w-lg mt-6 text-lg text-mocha-dark/70 leading-relaxed">
        Je conçois et développe des expériences web modernes, robustes et scalables. Passionné par l'écosystème SaaS et la création de produits à forte valeur ajoutée.
      </p>
      <div class="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row lg:justify-start">
        <a href="#projects" class="w-full px-8 py-4 text-lg font-semibold text-white bg-mocha-dark rounded-2xl hover:bg-mocha-deep transition sm:w-auto shadow-lg shadow-mocha-dark/20">
          Voir mes travaux
        </a>
        <a href="#contact" class="w-full px-8 py-4 text-lg font-semibold text-mocha-dark border border-mocha-dark/20 rounded-2xl hover:bg-mocha-medium/20 transition sm:w-auto">
          Me contacter
        </a>
      </div>
    </div>
    <div class="relative hidden lg:block">
      <div class="w-80 h-80 mx-auto bg-mocha-medium rounded-full blur-3xl opacity-30 absolute -top-10 -left-10"></div>
      <div class="w-64 h-64 mx-auto bg-mocha-dark rounded-full blur-3xl opacity-20 absolute -bottom-10 -right-10"></div>
      <div class="relative z-10 bg-mocha-medium/20 p-8 rounded-[3rem] border border-mocha-medium/30 backdrop-blur-sm">
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-white/50 rounded-2xl shadow-sm">
            <p class="text-xs text-mocha-dark/50 uppercase font-bold">Frontend</p>
            <p class="text-sm font-semibold">Nuxt.js / Vue</p>
          </div>
          <div class="p-4 bg-white/50 rounded-2xl shadow-sm">
            <p class="text-xs text-mocha-dark/50 uppercase font-bold">Backend</p>
            <p class="text-sm font-semibold">Node / Express</p>
          </div>
          <div class="p-4 bg-white/50 rounded-2xl shadow-sm">
            <p class="text-xs text-mocha-dark/50 uppercase font-bold">Database</p>
            <p class="text-sm font-semibold">MongoDB</p>
          </div>
          <div class="p-4 bg-white/50 rounded-2xl shadow-sm">
            <p class="text-xs text-mocha-dark/50 uppercase font-bold">Language</p>
            <p class="text-sm font-semibold">JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
