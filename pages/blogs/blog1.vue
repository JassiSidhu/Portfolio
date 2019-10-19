<template>
  <div class="container">
    <div>
      <logo />
      <div class="array" v-for="item of array" :key="item">
        <h1 class="title">{{ item  }}</h1>
      </div>
      <h2 class="subtitle">My exquisite Nuxt.js project</h2>
      <logo />
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">{{myName}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      myName: "Jassi",
      array: [
        'test',
        'test',
        'test',
        'test',
        'test'
      ]
    }
  }
};
</script>

<style scoped>
.array {
  background-color: aquamarine;
}
</style>
