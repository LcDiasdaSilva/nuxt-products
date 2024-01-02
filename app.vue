<template>
  <div v-resize="onResize">
    <v-app>
      <v-app-bar flat>
        <TopBar />
      </v-app-bar>
      <v-main>
        <NuxtPage />
      </v-main>
      <v-footer class="bg-black text-center justify-center d-flex flex-column">
        <div class="pt-0"></div>
        <div>
          <strong>LC DIAS @{{ new Date().getFullYear() }}</strong>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useDisplay } from "vuetify";

const windowSize = reactive({
  width: 0,
});
provide("windowSize", windowSize);

const { width } = useDisplay();

onMounted(() => {
  windowSize.width = width.value;
});

function onResize() {
  windowSize.width = width.value;
}
</script>
