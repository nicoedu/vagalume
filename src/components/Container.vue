<template>
  <Sidebar />
  <div class="background" :style="{ 'margin-left': sidebarWidth }">
    <div v-if="name" class="company-title">
      <img
        alt="User Avatar"
        src="../assets/company.jpg"
        class="company-image"
      />
      <p>
        {{ name }}
      </p>
    </div>
    <div class="wrapper">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar.vue';
import { sidebarWidth } from '../components/sidebar/state';
export default {
  props: ['name'],
  components: { Sidebar },
  data() {
    return { clients: [] };
  },
  methods: {
    toClient(client) {
      this.$router.push(`/client/${client.id}`);
    }
  },
  setup() {
    return { sidebarWidth };
  }
};
</script>

<style lang="scss" scoped>
.background {
  padding: 1rem 2rem;
}
.wrapper {
  background-color: white;
  box-shadow: -1px 1px 5px 1px rgba(125, 125, 125, 1);
}

.content {
  padding: 1rem 0;
  text-align: left;
}
.company-title {
  position: relative;
  min-height: 2.6rem;
  display: flex;
  padding: 0 0.7rem;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin: 0.5rem auto 0.8rem auto;
  width: fit-content;
  background-color: #888888;
  p {
    color: #fff;
    padding-left: 2.2rem;
    margin: 0;
  }
  .company-image {
    left: 0;
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
}
</style>
