<template>
  <div>
    <b-card>
      <b-row>
        <b-col md="4" v-for="(item, index) in projectData" :key="item.heading">
          <a :data-fancybox="'gallery' + index" :href="'/img/'+ item.linkImg1">
            <b-card
              title="Programming Languages and Markups"
              style="max-width: 100%;"
              class="smallCard mb-2"
              :img-src="'/img/'+ item.thumbnail"
              overlay
            >
              <b-card-text style="color: white;">{{ item.heading }}</b-card-text>
              <b-button class="displayOnHover d-none" href variant="primary">View Detail</b-button>
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
          heading: "PHP Projext",
          linkImg1: "billi.jpg",
          linkImg2: "intro1.jpg",
          thumbnail: "billi.jpg"
        },
        {
          heading: "2nd Projext",
          linkImg1: "skills1.jpg",
          linkImg2: "skills2.jpg",
          thumbnail: "billi.jpg"
        }
      ]
    };
  }
};
</script>

<style></style>

