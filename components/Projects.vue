<template>
  <div>
    <b-card>
      <b-row>
        <b-col md="4" v-for="(item, index) in projectData" :key="item.heading">
          <a :data-fancybox="'gallery' + index" :href="'/img/'+ item.linkImg1">
            <b-card
              :title="item.title"
              style="max-width: 100%;"
              class="smallCard mb-2"
              :style="{ backgroundColor: item.color}"
            >
              <b-card-text>{{ item.heading }}</b-card-text>
              <b-button variant="info" pill block class="displayOnHover d-none" href>View Detail</b-button>
            </b-card>
          </a>
          <a :data-fancybox="'gallery' + index" :href="'/img/'+ item.linkImg2"></a>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectData: [
        {
          title: "College ERP Messenger Module",
          heading: "PHP | MySQL | HTML | CSS",
          linkImg1: "ERP1.png",
          linkImg2: "ERP2.png",
          color: "#fff"
        },
        {
          title: "Student Registration Portal",
          heading: "AngularJs | MongoDB | Bootstrap",
          linkImg1: "portal1.png",
          linkImg2: "portal2.png",
          color: "#fff"
        },
        {
          title: "Interactive Web Browser Game",
          heading: " ",
          linkImg1: "game2.png",
          linkImg2: "game3.png",
          color: "#fff"
        }
      ]
    };
  }
};
</script>

<style></style>

