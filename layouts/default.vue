<template>
  <div class="container">
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import Greeting from '~/components/greeting.vue'

  export default {
    components: {
      Greeting
    }
  }
</script>

<style>
  
  .header {
    background: #F7F9FA;
  }

  .page-bar {
    max-width: 100%;
    padding: 2em 10%;
  }

  .tag-page.header h2 {
    text-align: center;
    padding: 2.5em 0;
    color: #A0A0A0;
  }

  img {
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    font-size: 2em;
  }

  /* Copy section */
  .body-container {
    background: #ffffff;
  }

  .items-list {
    overflow: hidden;
  }

  .item {
    padding: 1em 3em 1em 0;
  }

  @media all and (min-width: 600px) {
    .item {
      float: left;
      width: 50%;
    }
  }

  @media all and (min-width: 900px) {
    .item {
      width: 33.333%;
    }
  }

  /* Shared */

  .tiny {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    color: #A0A0A0;
  }

  *[class*="-bar"] {
    border-bottom: 1px solid #EBEBEB;
  }

  body{
    max-width: 100%;
    min-width: 100%;
    font-family: Barlow;
    background-color: "#F1F1F1";
  }

  .container{
    padding: 0px;
    max-width: 100%;
    min-width: 100%;
  }

</style>
