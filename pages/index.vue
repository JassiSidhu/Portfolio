<template>
  <div>
    <section id="aboutme">
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
            <div class="intro">
              Based in Toronto, I am a software developer and Survey programmer with over 3 years of experience in programming user friendly online surveys and creating modern, responsive web sites. From informational websites to e-commerce solutions, I have a wide mix of skills to offer unique solutions.
              <br />
              <br />My journey into becoming a software developer started back in 2010 when I decided to go for computer science engineering after completing my high school. I had the opportunity to learn wide range of subjects including various programming languages like C++, C# and other software fundamentals. I got to work on the college portal in PHP and MySQL which was selected in top ten projects at university level. After that, I joined a company as a Software Developer Intern where I enhanced the company’s website using PHP, JavaScript, jQuery and Ajax.
              <br />
              <br />In 2015, I attended Centennial college to take a program in Software Engineering where I learned various technologies like Advanced Java, Android, AngularJS, JavaScript, Bootstrap and many more.
              <br />
              <br />Once I completed my studies, I was able to secure a Survey Programmer position at AskingCanadians which is also my current workplace. I program user friendly online surveys for company clients using HTML, CSS, JavaScript and JQuery. As each client has different requirements, It is my duty to ensure 100% results for our clients as well as users taking those surveys.
              <br />
              <br />Apart from my technical skills, I am an organised and flexible person with quick learning capabilities and attention to detail.
            </div>
          </b-card-text>
        </b-card>
      </b-container>
    </section>

    <section id="skills" class="pt-5">
      <b-container class="fullWidthContainer">
        <b-container>
          <b-row>
            <b-col>
              <h1>Skills</h1>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <b-container>
        <slick :options="options">
          <b-card title="Programming Languages and Markups" style="max-width: 100%;" class="mb-2">
            <b-card-text>
              <b-list-group>
                <b-list-group-item>
                  -HTML5
                  <br />-CSS
                  <br />-JavaScript
                  <br />-PHP
                  <br />-C#
                  <br />-C++
                  <br />-Java
                  <br />-Android
                  <br />-XML
                  <br />-JSON
                  <br />
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card>

          <b-card
            title="Programming Libraries and Frameworks"
            style="max-width: 100%;"
            class="mb-2"
          >
            <b-card-text>
              <b-list-group>
                <b-list-group-item>
                  -Node.js/Express.js/Angular.js
                  <br />-Bootstrap
                  <br />-JQuery
                  <br />-ASP.NET
                  <br />-Servlets/JSP/JSF/EJB
                  <br />-Android SDK
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card>

          <b-card title="Databases" style="max-width: 100%;" class="mb-2">
            <b-card-text>
              <b-list-group>
                <b-list-group-item>
                  -SQL
                  <br />-MySQL
                  <br />-MongoDB
                  <br />-Oracle 12C
                  <br />-Ms-SQL Server 2012/2014
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card>

          <b-card title="Some more techinical skills" style="max-width: 100%;" class="mb-2">
            <b-card-text>
              <b-list-group>
                <b-list-group-item>
                  -Git, TFS
                  <br />-WordPress
                  <br />-Visual Studio 2012/2013/2015
                  <br />-Eclipse, Android Studio
                  <br />-Apache Tomcat, Wildfly server
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card>

          <b-card title="Soft skills" style="max-width: 100%;" class="mb-2">
            <b-card-text>
              <b-list-group>
                <b-list-group-item>
                  -Communication and interpersonal skills
                  <br />-Quick learning
                  <br />-Attention to detail
                  <br />-Problem solving
                  <br />-Analytical and Reasoning skills
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card>
        </slick>
      </b-container>
    </section>

    <section id="projects" class="pt-5">
      <b-container>
        <Projects />
      </b-container>
    </section>

    <section id="contact" class="py-5">
      <b-container>
        <b-card>
          <b-form @submit="onSubmit">
            <b-row>
              <b-col md="6">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group id="input-group-1" label="Your name:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group id="input-group-1" label="Message:" label-for="input-1">
                  <b-textarea
                    id="input-3"
                    v-model="form.msg"
                    required
                    placeholder="Message here"
                    rows="5"
                  ></b-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="submitBTN">
              <b-button type="submit">Submit</b-button>
            </div>
          </b-form>
        </b-card>
      </b-container>
    </section>
  </div>
</template>

<script>
import Projects from "~/components/Projects.vue";

export default {
  layout: "default",
  components: {
    Projects
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        msg: ""
      },
      options: {
        dots: true,
        islidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault();
          console.log(JSON.stringify(this.form));
          http
            .request({
              url: "http://jaswinder-sidhu.com/sendEmail.php",
              method: "POST",
              headers: { "Content-Type": "application/json" },
              content: JSON.stringify({
                username: "username",
                password: "password"
              })
            })
            .then(
              response => {
                var result = response.content.toJSON();
              },
              error => {
                console.error(error);
              }
            );
        }
      }
    };
  }
};
</script>

<style lang="scss">
</style>
