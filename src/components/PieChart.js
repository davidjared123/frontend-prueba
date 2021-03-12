import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props:{
    data: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, {
      borderWidth: "5px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "5px",
      responsive: true,
        legend: {
          display: true,
          boxWidth: 5,
          position: 'bottom',
          radius: 50,
        },
        
    });
  }
};

