<template>
  <div class="chart-container" >
    <chart :type="'horizontalBar'" :data="seriesData" :options="options"></chart>
  </div>	
</template>

<script>
import Chart from 'vue-bulma-chartjs'

export default {
  components: {
    Chart
  },
  props: {
    highPriority: {
      type: Number,
      required: true
    },
    mediumPriority: {
      type: Number,
      required: true
    },
    lowPriority: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      labels: [''],

      backgroundColor: {
        highPriority: '#ff3860',
        mediumPriority: '#ffdd57',
        lowPriority: '#00d1b2'
      },

      options: {
        rotate: true,
        legend: {
          display: false
        },
        title: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        barThickness: 0,
        maxBarThickness: 100,
        maintainAspectRatio: false,
        // responsive: true,
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }
          ],
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }]
        }
      }
    }
  },
  computed: {
    seriesData () {
      let total = this.highPriority + this.mediumPriority + this.lowPriority
      let data = {
        labels: this.labels
      }
      data.datasets = [
        {
          label: 'high priority: ' + this.highPriority,
          backgroundColor: this.backgroundColor.highPriority,
          data: [(this.highPriority * 100) / total]
        },
        {
          label: 'medium priority: ' + this.mediumPriority,
          backgroundColor: this.backgroundColor.mediumPriority,
          data: [(this.mediumPriority * 100) / total]
        },
        {
          label: 'low priority: ' + this.lowPriority,
          backgroundColor: this.backgroundColor.lowPriority,
          data: [(this.lowPriority * 100) / total]
        }
      ]
      return data
    }
  }
}
</script>

<style scoped>

.chart-container {
  
  height: 45px;
}
</style>
