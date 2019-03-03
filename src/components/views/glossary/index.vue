<template>
  <section class="glossary-container">
    <section>
      <GlossarySideNav />
    </section>
    <section>
      <!-- ContentItems will go here -->
    </section>
  </section>
</template>

<script>
import * as Youtube from 'simple-youtube-api';
import ContentItem from './content-item';
import GlossarySideNav from './side-nav';
// my api key
const youtube = new Youtube('AIzaSyB46KX8i3gRiPmC6Hg-O0RmzrVbCKfAbMY');

export default {
  name: "Glossary",

  components: {
    GlossarySideNav
  },

  data() {
    return {
      channel: {}
    }
  },

  created() {
    youtube.getChannel('https://www.youtube.com/channel/UCVX5F9uZyzzSI9juQRp_2Hw')
    .then(ytChannel => {
      if (ytChannel) console.log(`The ytChannel's title is ${ytChannel.title}`);
      else console.log('channel not found :(');
      this.channel = ytChannel
    })
    .catch(console.error);
  }
}
</script>

<style scoped>
.glossary-container {
  display: flex;
}
</style>
