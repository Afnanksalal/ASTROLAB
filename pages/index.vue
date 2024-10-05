<template>
  <div class="bg-black min-h-screen relative">
    <!-- Background GIF -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <img src="@/assets/images/blackhole2.gif" alt="Blackhole GIF" class="w-full h-full object-cover opacity-70 object-top">
    </div>

    <!-- Navbar -->
    <nav class="bg-transparent py-6 px-8 flex justify-between items-center relative z-10">
      <!-- Logo -->
      <NuxtLink to="/" class="text-3xl font-bold text-white">ASTROLABS</NuxtLink>

      <!-- Navbar Links -->
      <div class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="text-white hover:text-purple-300">Home</NuxtLink>
        <NuxtLink to="/login" class="text-white hover:text-purple-300">Login</NuxtLink>
        <NuxtLink to="/signup" class="text-white hover:text-purple-300">Sign Up</NuxtLink>
        <NuxtLink to="/about" class="text-white hover:text-purple-300">About</NuxtLink>
      </div>

      <!-- Social Media & Try Me Button -->
      <div class="flex items-center space-x-4">
        <div class="flex space-x-4">
          <a href="https://instagram.com" target="_blank" class="text-white hover:text-gray-400">
            <i class="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://facebook.com" target="_blank" class="text-white hover:text-gray-400">
            <i class="fab fa-facebook text-xl"></i>
          </a>
          <a href="https://discord.com" target="_blank" class="text-white hover:text-gray-400">
            <i class="fab fa-discord text-xl"></i>
          </a>
        </div>
        <!-- Try Me Button -->
        <NuxtLink to="/experiments" class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg hidden md:inline-block">
          Try Me
        </NuxtLink>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="container mx-auto py-32 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      <div class="flex items-center justify-center md:justify-end">
        <!-- Space for your icons/images (like in your design) -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Icons go here -->
        </div>
      </div>
      <div class="text-white">
        <h1 class="text-5xl font-bold mb-4">Providing the Ultimate Space Experiment Experience</h1>
        <p class="text-xl mb-8">
          Astrolabs simplifies the visualization of biological experiments performed in space. 
          Explore the cosmos through interactive NASA data and uncover new insights.
        </p>
        <NuxtLink to="/experiments" class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg">
          Try Me
        </NuxtLink>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-6 relative z-10">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div class="text-center">
            <i class="fas fa-rocket text-5xl text-purple-500 mb-4"></i>
            <h3 class="text-2xl font-bold mb-2">Mission Overview</h3>
            <p>Visualize the phases of space missions and their biological experiments.</p>
          </div>
          <div class="text-center">
            <i class="fas fa-chart-bar text-5xl text-purple-500 mb-4"></i>
            <h3 class="text-2xl font-bold mb-2">Data Insights</h3>
            <p>Understand experimental data with detailed visualizations and interactive charts.</p>
          </div>
          <div class="text-center">
            <i class="fas fa-link text-5xl text-purple-500 mb-4"></i>
            <h3 class="text-2xl font-bold mb-2">Related Experiments</h3>
            <p>Explore NASA's related datasets and discover more space-based studies.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 px-6">
      <div class="container mx-auto flex justify-between items-center">
        <p>© 2024 Astrolabs. All rights reserved.</p>
        <div class="flex space-x-4">
          <a href="https://instagram.com" target="_blank" class="text-white hover:text-gray-400">
            <i class="fab fa-instagram text-xl"></i>
          </a>
          <a href="mailto:astrolabs@example.com" class="text-white hover:text-gray-400">
            <i class="fab fa-google text-xl"></i>
          </a>
          <a href="https://github.com/astrolabs" target="_blank" class="text-white hover:text-gray-400">
            <i class="fab fa-github text-xl"></i>
          </a>
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
/* Tailwind will handle the majority of the styles */
</style>
