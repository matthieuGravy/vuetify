<template>
  <v-main>
    <router-view />
  </v-main>

  <v-footer class="bg-primary text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon.name"
        :href="icon.link"
        variant="text"
        rel="noopener noreferrer"
        target="_blank"
      ></v-btn>
    </div>

    <div class="pt-0"></div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Matthieu Gravy</strong></div>
  </v-footer>
</template>

<script setup>
import { ref, computed } from "vue";

const icons = ref([
  { name: "mdi-web", link: "https://pommepatate.be" },
  { name: "mdi-linkedin", link: "https://www.linkedin.com/in/matthieugravy/" },
  { name: "mdi-github", link: "https://github.com/matthieuGravy" },
]);

const currentYear = computed(() => new Date().getFullYear());
</script>
