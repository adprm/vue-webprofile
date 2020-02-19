<template>
  <div class="container-skills">
    <div id="skills">
      <h2>My Skills</h2>
    </div>
    <b-container class="bv-example-row">
      <b-row>
        <!-- Skills programming -->
        <b-col cols="6">
          <h3>Programing Languange and Tools</h3>
          <b-container class="bv-example-row">
            <b-row>
              <!-- Title Skills -->
              <b-col cols="4">
                <ul class="list-group">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>VueJS</li>
                  <li>Bootstrap</li>
                  <li>Element UI</li>
                  <li>Git Controls</li>
                </ul>
              </b-col>
              <!-- Progress skills -->
              <b-col cols="8">
                <div>
                  <ul class="list-group">
                    <li>
                      <b-progress
                        :value="95"
                        variant="success"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="83"
                        variant="primary"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="75"
                        variant="warning"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="70"
                        variant="warning"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="80"
                        variant="primary"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="76"
                        variant="warning"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="90"
                        variant="success"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                  </ul>
                  <!-- Button animation -->
                  <br />
                  <b-button
                    variant="danger"
                    @click="animate = !animate"
                    size="sm"
                  >{{ animate ? 'Stop' : 'Start' }} Animation</b-button>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col cols="6">
          <!-- Skills Networking -->
          <h3>Networking</h3>
          <b-container class="bv-example-row">
            <b-row>
              <!-- Title Skills -->
              <b-col cols="4">
                <ul class="list-group">
                  <li>LAN WLAN</li>
                  <li>Linux Server</li>
                  <li>Mikrotik</li>
                  <li>Troubleshoot Network</li>
                </ul>
              </b-col>
              <!-- Progress skills -->
              <b-col cols="8">
                <div>
                  <ul class="list-group">
                    <li>
                      <b-progress
                        :value="87"
                        variant="primary"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="70"
                        variant="warning"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="90"
                        variant="success"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                    <li>
                      <b-progress
                        :value="80"
                        variant="primary"
                        striped
                        :animated="animate"
                        class="mt-2"
                      ></b-progress>
                    </li>
                  </ul>
                  <!-- Button animation -->
                  <br />
                  <b-button
                    variant="danger"
                    @click="animate = !animate"
                    size="sm"
                  >{{ animate ? 'Stop' : 'Start' }} Animation</b-button>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: true
    };
  }
};
</script>

<style>
.container-skills {
  background-color: #17141d;
  padding-top: 25px;
}

.container-skills h2 {
  text-align: center;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Sentinel SSm A;
  padding-top: 25px;
}

.bv-example-row h3 {
  color: #ff8a00;
  font-family: Sentinel SSm A;
  padding-top: 20px;
  text-align: center;
}

.bv-example-row ul li {
  color: white;
  font-family: icon;
  margin: 0px;
  list-style: none;
}
</style>
