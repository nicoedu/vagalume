<template>
  <Container>
    <h1 class="title">Visão Geral</h1>
    <div class="list">
      <div class="list-header" @click="sort">
        <p>Nome</p>
        <span :class="{ 'rotate-180': order }">
          <i class="fas fa-arrow-down" />
        </span>
      </div>
      <div v-if="clients.length === 0" class="loader-wrapper">
        <Loader />
      </div>
      <div v-else>
        <div v-for="client in clients" :key="client.id">
          <div class="client-card" @click="toClient(client)">
            <p class="client-title">
              {{ client.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue';
import Loader from '../components/Loader.vue';
import Api from '../utils/apiHandler';
import { logout } from '../utils/auth';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  components: { Container, Loader },
  data() {
    return { clients: [], order: false };
  },
  methods: {
    toClient(client) {
      this.$router.push({
        path: `/client/${client.id}`,
        query: { name: client.name }
      });
    },
    sort() {
      this.order = !this.order;
      this.clients.sort((a, b) =>
        a.name > b.name ? (this.order ? -1 : 1) : this.order ? 1 : -1
      );
    }
  },
  mounted() {
    Api()
      .get('/get_clients')
      .then((response) => {
        this.clients = response.data.clients;
      })
      .catch(() => {
        logout();
        this.$router.replace('/login');
      });
  }
});
</script>

<style lang="scss" scoped>
.title {
  margin-top: 0.2rem;
  padding-left: 1.5rem;
}
.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.list-header {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  p {
    padding-right: 1rem;
  }
}
.client-card {
  cursor: pointer;
  margin: 0;
  padding: 1rem 0 1rem 1.5rem;
  border-top-width: 1px;
  border-top: 1px solid #c7c7c7;

  .client-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
  }
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
