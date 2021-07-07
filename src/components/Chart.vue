<script>
import { defineComponent } from '@vue/runtime-core';
import { Line } from 'vue3-chart-v2';

export default defineComponent({
  name: 'Chart',
  extends: Line,
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
});
</script>
