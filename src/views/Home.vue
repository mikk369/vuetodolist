<template>
  <div class="home container">
    <Calculate msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Calculate from "@/components/Calculate.vue";

export default {
  name: "Home",
  components: {
    Calculate,
  },
};
</script>
