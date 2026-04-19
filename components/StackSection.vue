<template>
  <section id="stack" class="px-6 py-20 bg-mocha-medium/10">
    <div class="mx-auto max-w-6xl text-center">
      <h2 class="text-3xl font-serif mb-12 text-mocha-deep">Ma Stack Technique</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <span v-for="tech in techs" :key="tech" class="px-6 py-3 bg-white border border-mocha-medium/30 text-mocha-dark rounded-full font-medium shadow-sm">
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const techs = ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Node.js', 'Express.js', 'MongoDB', 'Nuxt.js / Vue.js']
</script>
