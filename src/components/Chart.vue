<script>
import { defineComponent } from '@vue/runtime-core';
import { Line } from 'vue3-chart-v2';

export default defineComponent({
  extends: Line,
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    });
  }
});
</script>
