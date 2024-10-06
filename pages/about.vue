<template>
    <div class="min-h-screen relative overflow-x-hidden" style="background: linear-gradient(to bottom right, #4B0082, #8A2BE2, #9370DB, #DA70D6);">
      <!-- Navbar -->
      <nav class="bg-black bg-opacity-70 py-6 px-8 flex justify-between items-center relative z-10 backdrop-blur-md border-b border-purple-600/50">
        <!-- Logo -->
        <NuxtLink to="/" class="text-3xl font-bold text-[rgb(201_183_217)] ">ASTROLABS</NuxtLink>
  
        <!-- Navbar Links (Hidden on smaller screens) -->
        <div class="backdrop-blur-none hidden md:flex space-x-6 rounded-lg bg-white/10 py-2 px-6">
          <NuxtLink to="/" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">Home</NuxtLink>
          <NuxtLink to="/login" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">Login</NuxtLink>
          <NuxtLink to="/signup" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">Sign Up</NuxtLink>
          <NuxtLink to="/about" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">About</NuxtLink>
        </div>
  
        <!-- Orrery and Try Me Buttons -->
        <div class="flex items-center space-x-4">
          <a href="/eye" class="border border-purple-600 bg-transparent text-white font-bold py-2 px-6 rounded-lg shadow-lg hidden md:inline-block">
            Orrery
          </a>
          <NuxtLink to="/dashboard" class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg hidden md:inline-block">
            Try Me
          </NuxtLink>
        </div>
  
        <!-- Flowing purple border with glow -->
        <div class="absolute bottom-0 left-0 w-full h-[0.125rem] bg-gradient-to-r from-purple-600 via-purple-400 to-transparent animate-glow-flow"></div>
      </nav>
  
      <!-- About Section -->
      <section class="text-[rgb(201_183_217)] container mx-auto relative z-10 pt-20 flex flex-col items-center">
        <!-- About Astrolabs Card in Center -->
        <div class="bg-black bg-opacity-70 rounded-lg p-6 shadow-lg w-full md:w-2/3 lg:w-1/2 text-center mb-8">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">About Astrolabs</h1>
          <p class="text-base md:text-xl mb-4">
            Astrolabs is designed to enhance the understanding of biological experiments conducted in the unique environment of space. Our platform provides intuitive visualizations of NASA's data, enabling scientists to easily access and interpret important findings.
          </p>
          <p class="text-base md:text-xl mb-4">
            We aim to bridge the gap between complex scientific data and intuitive understanding. By offering easy access to a wealth of information about space experiments, we contribute to ongoing research and discoveries in both space exploration and terrestrial applications.
          </p>
          <p class="text-base md:text-xl mb-4">
            With our user-friendly interface, scientists and researchers can explore experimental designs, visualize data structures, and connect with other related datasets, ultimately promoting broader participation in space science.
          </p>
        </div>
  
        <!-- Our Mission and Why Choose Us Cards Underneath -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3 lg:w-1/2 mb-20">
          <!-- Our Mission Card -->
          <div class="bg-black bg-opacity-70 rounded-lg p-6 shadow-lg text-center">
            <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
            <p>To provide a scalable tool that generates compelling visualizations of biological experiments, enhancing the scientific community's understanding of spaceflight's impact on biology.</p>
          </div>
  
          <!-- Why Choose Us Card -->
          <div class="bg-black bg-opacity-70 rounded-lg p-6 shadow-lg text-center">
            <h3 class="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <p>Astrolabs simplifies complex data, enabling scientists to quickly grasp key insights from their experiments and explore connections with other open datasets.</p>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-black bg-opacity-70 text-[rgb(201_183_217)] pt-10 pb-6 relative">
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
        <!-- Glowing border animation -->
        <div class="absolute top-0 left-0 w-full h-[0.125rem] bg-gradient-to-r from-purple-600 via-purple-400 to-transparent animate-glow-flow"></div>
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
  
    .md\:text-xl {
      font-size: 1rem;
    }
  }
  </style>
  