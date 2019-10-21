export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Jaswinder Sidhu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/Letter_J.png" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Srisakdi&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poiret+One&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poiret+One&display=swap"
      }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.min.js" },
      {
        src:
          "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/main", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
