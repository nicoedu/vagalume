<template>
  <div class="nav">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="links"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  background-color: #212121;
}
.links {
  background-color: #424242;
}
</style>
