<template>
  <section id="projects" class="px-6 py-20 mx-auto max-w-6xl">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-serif text-mocha-deep">Projets Sélectionnés</h2>
      <div class="w-12 h-1 bg-mocha-dark mx-auto mt-4"></div>
    </div>
    
    <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div v-for="project in projects" :key="project.name" class="group cursor-pointer">
        <div class="relative overflow-hidden rounded-3xl aspect-video mb-6 border border-mocha-medium/30 group-hover:border-mocha-dark transition-all duration-300">
          <img :src="project.image" :alt="project.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-mocha-dark/0 group-hover:bg-mocha-dark/10 transition-all duration-300"></div>
        </div>
        <h3 class="text-xl font-bold text-mocha-deep group-hover:text-mocha-dark transition">{{ project.name }}</h3>
        <p class="mt-2 text-mocha-dark/70 leading-relaxed">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { name: 'TIPA', description: 'Plateforme de dons innovante dédiée au soutien des créateurs congolais.', image: '/images/tipa.png' },
  { name: 'Kash', description: 'Application intuitive de traqueur de dépenses pour une gestion financière optimisée.', image: '/images/kash.png' },
  { name: 'Arislabs', description: 'Site vitrine stratégique pour le lancement de ma future startup tech.', image: '/images/arislabs.png' }
]
</script>
