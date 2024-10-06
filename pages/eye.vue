<template>
    <div class="bg-black min-h-screen relative overflow-hidden">
      <!-- Background GIF -->
      <div class="absolute left-0 w-full h-full overflow-hidden" style="top: -14.75rem; height: 71.5625rem">
        <img src="@/assets/images/blackhole2.gif" alt="Blackhole GIF" class="w-full h-full object-cover opacity-70 object-top">
      </div>
  
      <!-- Navbar -->
      <nav class="bg-transparent py-6 px-8 flex justify-between items-center relative z-10 backdrop-blur-md border-b border-purple-600/50">
        <!-- Logo -->
        <NuxtLink to="/" class="text-3xl font-bold text-[rgb(201_183_217)]">ASTROLABS</NuxtLink>
  
        <!-- Navbar Links (Hidden on smaller screens) -->
        <div class="hidden md:flex space-x-6 rounded-lg bg-white/10 backdrop-blur-md py-2 px-6">
          <NuxtLink to="/" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">Home</NuxtLink>
          <NuxtLink to="/login" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">Login</NuxtLink>
          <NuxtLink to="/signup" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">Sign Up</NuxtLink>
          <NuxtLink to="/about" class="text-[rgb(201_183_217)] hover:text-purple-300 font-bold">About</NuxtLink>
        </div>
  
        <!-- Social Media -->
        <div class="flex items-center space-x-4">
          <div class="flex space-x-4">
            <a href="https://instagram.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://facebook.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://discord.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-discord text-xl"></i>
            </a>
          </div>
        </div>
  
        <!-- Flowing purple border with glow -->
        <div class="absolute bottom-0 left-0 w-full h-[0.125rem] bg-gradient-to-r from-purple-600 via-purple-400 to-transparent animate-glow-flow"></div>
      </nav>
  
      <!-- Main Section: Full-Screen Widget -->
      <section class="container mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div class="w-full h-full overflow-hidden flex justify-center items-start pt-5"> <!-- Added padding top for alignment -->
          <iframe
            src="https://eyes.nasa.gov/apps/asteroids/#/home"
            class="w-full h-full shadow-lg rounded-lg -mt-20" <!-- Adjusted margin top to -20px -->
            frameborder="0"
            sandbox="allow-scripts allow-same-origin allow-popups"
            title="NASA Asteroid Widget"
          ></iframe>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-violet-900 text-[rgb(201_183_217)] py-6 w-full">
        <div class="container flex justify-between items-center mx-auto">
          <p>© 2024 Astrolabs. All rights reserved.</p>
          <div class="flex space-x-4">
            <a href="https://instagram.com" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="mailto:astrolabs@example.com" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-google text-xl"></i>
            </a>
            <a href="https://github.com/astrolabs" target="_blank" class="text-[rgb(201_183_217)] hover:text-gray-400">
              <i class="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
    // Add any logic if necessary
  </script>
  
  <style scoped>
  /* Animation for the flowing glow border */
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
  
  /* Full-screen iframe styling with adjustments */
  iframe {
    width: 100%;
    height: calc(100vh - 160px); /* Adjust for header and footer height */
    margin-bottom: 20px; /* Add bottom margin of 20px */
  }
  
  /* Ensures the container prevents scrolling */
  .container {
    overflow: hidden; 
  }
  
  /* Responsive design for the widget */
  @media (max-width: 768px) {
    iframe {
      height: calc(100vh - 160px); /* Adjust for header and footer height */
    }
  }
  </style>
  