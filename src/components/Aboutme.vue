<template>
  <div class="container-aboutme">
    <div id="aboutme">
      <div class="col-md-12 col-md-offset-2 text-center fh5co-heading">
        <h2>About Me</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <a href="#" class="lightbox">
          <b-img
            center
            src="../assets/profile.jpg"
            alt="adit image"
            class="img-fluid img-thumbnail"
            style="width: 250px; height: 250px; background-size: cover;"
          />
        </a>
        <br />
      </div>
      <div class="col-md-8">
        <h2>Hello There!</h2>
        <p>
          A motivated person and hardworking individual and have enthusias in computer scince.
          Have a consistent personality and can work in teams.
        </p>
        <ul class="icons">
          <li>
            <a href="mailto:aditiyaprmn00@gmail.com">
              <!-- email -->
              <font-awesome-icon icon="envelope" class="fa-3x" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aditiya-permana-a274221a0">
              <!-- linked -->
              <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-3x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/adprm">
              <!-- github -->
              <font-awesome-icon :icon="['fab', 'github']" class="fa-3x" />
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/aditiya.permanaa.3">
              <!-- facebook -->
              <font-awesome-icon :icon="['fab', 'facebook']" class="fa-3x" />
            </a>
          </li>
        </ul>
        <br />
      </div>
    </div>
    <br />
  </div>
</template>

<style>
.icons {
  list-style: none;
  margin: 10px;
}

.icons li {
  display: inline-block;
  margin: 10px;
}

.icons a {
  color: #ff8a00;
}

.container-aboutme {
  background-color: #17141d;
  padding-top: 25px;
}

.col-md-12 {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Sentinel SSm A;
}

.col-md-8 h2 {
  color: #ff8a00;
  font-family: sans-serif;
  padding-top: 25;
}

.col-md-8 p {
  color: #c2c2c2;
  font-family: sans-serif;
}
</style>