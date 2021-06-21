<template>
  <div>
    <!-- render data of the person -->
    <!-- <h1>{{ person.fields.name }}</h1> -->
    <!-- render blog posts -->
    <ul v-if="cf">
      <li v-for="post in cf.posts">
        {{ post.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import { mapActions, mapState } from "vuex";
  const client = createClient()

  export default {
    // `env` is available in the context object
    // asyncData ({env}) {
    asyncData (context) {
      // context.getCFData();
      /* return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error) */
    },
    computed: {
    ...mapState(["cf"]),
    },
    methods: {
      ...mapActions(["getCFData"]),
    },
    fetch (){
      
    }
  }
</script>