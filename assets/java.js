
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

const { createApp, ref } = Vue
createApp({
  setup() {
  const logo = ref('./assets/img/logo.png');

    return {
    // product_title: ref('T-shirt'),
    logo,
    }
  }
}).mount('#app')