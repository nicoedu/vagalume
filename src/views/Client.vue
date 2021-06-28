<template>
  <Container :name="name">
    <h4 class="title">Acesso à Rede Wi-Fi</h4>
    <div v-if="!graphData" class="loader-wrapper">
      <Loader />
    </div>
    <div v-else class="graph-wrapper">
      <Chart :chartdata="graphData" :options="options" />
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue';
import Chart from '../components/Chart.vue';
import Loader from '../components/Loader.vue';
import Api from '../utils/apiHandler';
import { logout } from '../utils/auth';
import { getHoursGraphAxis } from '../utils/graphUtils';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Client',
  components: { Container, Chart, Loader },
  data() {
    return { graphData: null, options: {}, name: '' };
  },
  mounted() {
    this.name = this.$route.query.name;
    Api()
      .get(`/get_client_data/${this.$route.params.id}`)
      .then((response) => {
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: Math.max(...response.data.data) + 1
                }
              }
            ]
          }
        };
        this.graphData = {
          labels: getHoursGraphAxis(),
          datasets: [
            {
              data: response.data.data,
              fill: true,
              borderColor: '#fc9603',
              tension: 0.1
            }
          ]
        };
      })
      .catch(() => {
        logout();
        this.$router.replace('/login');
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
