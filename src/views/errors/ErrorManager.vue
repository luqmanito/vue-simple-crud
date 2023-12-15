<template>
  <ErrorPage v-if="error.title && error.subTitle" :title="error.title" :sub-title="error.subTitle" />
  <span v-else></span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, defineComponent } from 'vue';
import ErrorPage from "./ErrorPage.vue";
import {useRoute} from 'vue-router';

const code = ref<string>("404");
const route = useRoute()

const errors: Record<string, { title: string; subTitle: string }> = {
  "404": {
    title: "404",
    subTitle: "The page you are looking for was not found."
  },
  "403": {
    title: "403",
    subTitle: "You are not authorized to access this page."
  },
  "500": {
    title: "500",
    subTitle: "An error occurred when trying to access this page."
  },
  "100": {
    title: "Oops.",
    subTitle:
        "It appears your account has not been allocated the appropriate access authorities yet. Please contact your system administrator or support@echitek.com.au for support."
  }
};

const error = computed(() => {
  return errors[code.value] || errors["404"];
});

onMounted(() => {
  const routeParams = route.params;
  const routeCode = routeParams.code;
  if (typeof routeCode === "string") {
    code.value = routeCode;
  }
});

defineComponent({
  ErrorPage
});
</script>
