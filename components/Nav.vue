<template>
   <b-breadcrumb :items="items"></b-breadcrumb>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'About me',
            active: true,
            href: '/'
          },
          {
            text: 'Skills',
            href: '/skills'
          },
          {
            text: 'Projects',
            href:'#'
          },
           {
            text: 'Contact',
            href:'/contact'
          }
        ]
      }
    }
  }
</script>
<style>

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
