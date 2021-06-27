<template>
  <div>
    <Sidebar />
    <div class="home" :style="{ 'margin-left': sidebarWidth }">
      <div class="wrapper">
        <div class="content">
          <h1>Visão Geral</h1>
          <div class="list">
            <div>Title sorter</div>
            <div v-for="client in clients" :key="client.id">
              <div class="client-card" @click="toClient(client)">
                <p class="client-title">
                  {{ client.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar/Sidebar.vue";
import { sidebarWidth } from "../components/sidebar/state";
import Api from "../api/handler";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: { Sidebar },
  data() {
    return { clients: [] };
  },
  methods: {
    toClient(client) {
      this.$router.push(`/client/${client.id}`);
    }
  },
  mounted() {
    Api()
      .get("/get_clients")
      .then(response => {
        console.log(response.data);
        this.clients = response.data.clients;
      });
  },
  setup() {
    return { sidebarWidth };
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: white;
  box-shadow: -1px 1px 5px 1px rgba(125, 125, 125, 1);
}
.home {
  padding: 2rem;
}
.content {
  padding: 1rem 0;
  text-align: left;
  h1 {
    padding-left: 1.5rem;
  }
}
.client-card {
  cursor: pointer;
  margin: 0;
  padding-left: 1.5rem;
  border-top-width: 1px;
  border-top: 1px solid #c7c7c7;

  .client-title {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>
