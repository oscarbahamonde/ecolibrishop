<template>
  <div class="h-screen bg-base-200 drawer text-base-content">
    <!-- this checkbox controls if drawer is open -->
    <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content">
      <!-- drawer content -->
      <div class="w-full navbar bg-base-300">
        <!-- hamburger menu is only visible on mobile -->
        <div class="flex-none lg:hidden">
          <label for="menu-drawer" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2 font-bold">
          <img src="./assets/logo.png" class="w-16 p-2 mx-2 cursor-pointer" />
          <!-- navbar title -->     
          <h1 class="text-3xl font-script">eColibrí</h1>
        </div>
        <div class="flex-none">
          <!-- navbar is only visible for desktop -->
          <div class="hidden lg:inline-block">
            <ul class="mr-2 space-x-2 menu horizontal">
              <li>
                <router-link to="/">Inicio</router-link>
              </li>
              <li>
                <router-link to="/about">Nosotros</router-link>
              </li>
              <li>
                <router-link to="/profile"><i class="mdi mdi-account text-3xl"></i></router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Router-View />
    </div>
    <!-- drawer sidebar for mobile -->
    <div class="drawer-side">
      <label for="menu-drawer" class="drawer-overlay"></label>
      <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
        <li>
          <a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a>
        </li>
        <li>
          <a target="_blank" href="https://daisy.js.org/">DaisyUI</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
