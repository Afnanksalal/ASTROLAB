<template>
  
  <div class="bg-black min-h-screen relative overflow-x-hidden">
    <!-- Background GIF -->
    <div class="absolute left-0 w-full h-full overflow-hidden" style="top: -14.75rem; height: 71.5625rem">
      <img src="@/assets/images/blackhole2.gif" alt="Blackhole GIF" class="w-full h-full object-cover opacity-70 object-top">
    </div>

    <!-- Navbar -->
    <nav
      class="bg-transparent py-6 px-8 flex justify-between items-center relative z-10 backdrop-blur-md border-b border-purple-600/50">
      <!-- Logo -->
      <NuxtLink to="/" class="text-3xl font-bold text-[rgb(201_183_217)]">ASTROLABS</NuxtLink>

      <!-- Navbar Links (Hidden on smaller screens) -->
      <div class="hidden md:flex space-x-6 rounded-lg bg-white/10 backdrop-blur-md py-2 px-6">
        <NuxtLink to="/" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">Home</NuxtLink>
        <NuxtLink to="about" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">About</NuxtLink>
      </div>

      <!-- Orrery and Try Me Buttons -->
      <div class="flex items-center space-x-4">
        <a href="/eye"
          class="border border-purple-600 bg-transparent text-white font-bold py-2 px-6 rounded-lg shadow-lg hidden md:inline-block">
           Orrery 
      </a>
        <NuxtLink to="/dashboard"
          class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg hidden md:inline-block">
          Try Me
        </NuxtLink>
      </div>

      <!-- Flowing purple border with glow -->
      <div
        class="absolute bottom-0 left-0 w-full h-[0.125rem] bg-gradient-to-r from-purple-600 via-purple-400 to-transparent animate-glow-flow">
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      class="text-[rgb(201_183_217)] container mx-auto relative z-10 pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div style="height: 18.5rem;width: 28rem;margin-top: 3rem;">
        <h1 class="text-3xl md:text-3xl font-bold mb-2 pt-40">Providing the UltimateSpace Experiment Experience</h1>
        <p class="text-base md:text-xl mb-4">
          Astrolabs simplifies the visualization of biological experiments performed in space. Explore the cosmos
          through interactive NASA data and uncover new insights.
        </p>
        <NuxtLink to="/dashboard"
          class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg hidden md:inline-block">
          Try Me
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <!-- Icons go here -->
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-6 relative z-10">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-[rgb(201_183_217)] mb-8 mt-20 text-center">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-[rgb(201_183_217)]">
          <div class="text-center">
            <span class="iconify text-5xl text-purple-500 mb-4" data-icon="mdi:rocket-launch"></span>
            <h3 class="text-2xl font-bold mb-2">Mission Overview</h3>
            <p>Visualize the phases of space missions and their biological experiments.</p>
          </div>
          <div class="text-center">
            <span class="iconify text-5xl text-purple-500 mb-4" data-icon="mdi:chart-line"></span>
            <h3 class="text-2xl font-bold mb-2">Data Insights</h3>
            <p>Understand experimental data with detailed visualizations and interactive charts.</p>
          </div>
          <div class="text-center">
            <span class="iconify text-5xl text-purple-500 mb-4" data-icon="mdi:link"></span>
            <h3 class="text-2xl font-bold mb-2">Related Experiments</h3>
            <p>Explore NASA's related datasets and discover more space-based studies.</p>
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 w-full h-[0.125rem] bg-gradient-to-r from-purple-600 via-purple-400 to-transparent animate-glow-flow">
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-violet-900 text-[rgb(201_183_217)] pt-10 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-center md:text-left">© 2024 Astrolabs. All rights reserved.</p>
          </div>
          <div class="flex space-x-4 justify-center md:justify-end">
            <a href="https://instagram.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://whatsapp.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="https://discord.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-discord text-xl"></i>
            </a>
          </div>
        </div>
        <div class="mt-8 text-center text-sm">
          <p>Contact us: <a href="mailto:astrolabs@example.com" class="text-purple-400">astrolabs@example.com</a></p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // Add any logic if necessary
}
</script>

<style scoped>
@keyframes glow-flow {
  0% {
    transform: translateX(-100%);
    box-shadow: 0 0 10px #c9b7d9;
  }

  100% {
    transform: translateX(100%);
    box-shadow: 0 0 20px #c9b7d9;
  }
}

.animate-glow-flow {
  animation: glow-flow 3s linear infinite;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .md\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .md\:text-5xl {
    font-size: 2.5rem;
  }

  .md\:text-xl {
    font-size: 1rem;
  }
}
</style>