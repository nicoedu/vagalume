<template>
  <Container :name="name">
    <h4 class="title">Acesso à Rede Wi-Fi</h4>
    <div v-if="!graphData" class="loader-wrapper">
      <Loader />
    </div>
    <div v-else class="graph-wrapper">
      <Chart :chartdata="graphData" />
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue';
import Chart from '../components/Chart.vue';
import Loader from '../components/Loader.vue';
import Api from '../api/handler';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Client',
  components: { Container, Chart, Loader },
  data() {
    return { graphData: null, name: '' };
  },
  mounted() {
    this.name = this.$route.query.name;
    Api()
      .get(`/get_client_data/${this.$route.params.id}`)
      .then(response => {
        this.graphData = {
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          datasets: [
            {
              data: response.data.data,
              fill: true,
              borderColor: '#fc9603',
              tension: 0.1
            }
          ]
        };
      });
  }
});
</script>

<style lang="scss" scoped>
.company-title {
  text-align: center;
  margin: 0;
}
.title {
  text-align: center;
}
.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.graph-wrapper {
  padding: 0 2rem;
  height: 400px;
}
</style>
