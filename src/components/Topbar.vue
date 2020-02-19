<template>
  <div id="page-top">
    <b-navbar class="navbar fixed-top" toggleable="lg" type="dark" variant="transparent">
      <div class="container">
        <b-navbar-brand href="#page-top">
          <font-awesome-icon :icon="['fab', 'grav']" class="fa-2x" />ADPRM
        </b-navbar-brand>
        <b-navbar-toggle class="navbar-toggler navbar-toggler-right" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="navbar-nav ml-auto">
            <b-nav-item href="#aboutme">About Me</b-nav-item>
            <b-nav-item href="#skills">Skills</b-nav-item>
            <b-nav-item href="#educations">Education</b-nav-item>
            <b-nav-item href="#work">Work Experience</b-nav-item>
            <b-nav-item href="#certificate">Certifications</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<style>
.navbar {
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25),
    inset 0 -1px 5px rgba(0, 0, 0, 0.25);
}
</style>