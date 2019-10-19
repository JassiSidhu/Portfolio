<template>
  <div>
    <b-container>
     
      <b-card
        title="About me"
        img-src="/img/intro2.jpeg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 100%;"
        class="mb-2"
      >
         
        <b-card-text>
        Based in Toronto, I am a software developer and Survey programmer with over 3 years of experience in programming user friendly online surveys and creating modern, responsive web sites. From informational websites to e-commerce solutions, I have a wide mix of skills to offer unique solutions. 
  <Br /><Br />
  My journey into becoming a software developer started back in 2010 when I decided to go for computer science engineering after completing my high school. I had the opportunity to learn wide range of subjects including various programming languages like C++, C# and other software fundamentals. I got to work on the college portal in PHP and MySQL which was selected in top ten projects at university level. After that, I joined a company as a Software Developer Intern where I enhanced the company’s website using PHP, JavaScript, jQuery and Ajax.
  <Br /><Br />
  In 2015, I attended Centennial college to take a program in Software Engineering where I learned various technologies like Advanced Java, Android, AngularJS, JavaScript, Bootstrap and many more. 
  <Br /><Br />
  Once I completed my studies, I was able to secure a Survey Programmer position at AskingCanadians which is also my current workplace. I program user friendly online surveys for company clients using HTML, CSS, JavaScript and JQuery. As each client has different requirements, It is my duty to ensure 100% results for our clients as well as users taking those surveys.
  <Br /><Br />Apart from my technical skills, I am an organised and flexible person with quick learning capabilities and attention to detail. 

        </b-card-text>

     </b-card>
    </b-container>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {
      options: {
        slidesToShow: 3,
        arrows: true,
        dots: true
      }
    };
  }
};
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.container .col1{
   width:30%;
   
}
.container .col2{
   width:70%;
   
}


.container h1{
   font-style:bold italic;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-size:large;
 
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
