<template>
  <main class="flex justify-between">
    <div class="chart bg-white rounded shadow-xl border border-gray-100">
      <div class="p-5">
        <h2 class="text-blue-900 text-lg">Why do you create a startup?</h2>
        <p class="text-gray-400">Trents</p>
        <pie-chart
          v-if="loaded"
          :data="chartData"
          :options="chartOptions"
        ></pie-chart>
      </div>
    </div>

    <div class="employes border border-gray-100 rounded shadow-xl">
      <div class="p-5">
        <h2 class="text-blue-900 text-lg">Employes</h2>
        <div class="mt-3 p  h-auto border border-gray-200 rounded">
          <div
            class="card-title text-gray-600 font-medium text-sm flex  justify-around items-center w-auto border border-gray-200 p-3"
          >
            <div class="w-80 user">
              <p>Employee</p>
            </div>
            <div class="login w-60">
              <p>Last login</p>
            </div>
            <div class="deparment w-36">
              <p>Deparment</p>
            </div>
            <div class="status w-28">
              <p>Status</p>
            </div>
            <div class="icon-more w-5"></div>
          </div>

          <div
            v-for="item in names"
            v-bind:key="item.id"
            class="card px-3 py-1  flex  justify-around items-center w-auto border-t border-gray-200"
          >
            <div class="w-80 user flex items-center">
              <div class="w-7 mr-2">
                <img
                  :srcs="item.profile_img"
                  attr
                  class="rounded-full w-7"
                  alt="user icon"
                />
              </div>
              <div>
                <p class="user-name text-sm">
                  {{ item.first_name }} {{ item.last_name }}
                </p>
                <p class="email text-sm text-gray-500">{{ item.email }}</p>
              </div>
            </div>
            <div class="login w-60">
              <p class="date text-sm">
                {{ item.sessions[0] }}
              </p>
              <p
                class="count-date text-sm text-gray-500"
                v-text="item.sessions[0]"
              ></p>
            </div>
            <div class="deparment w-36">
              <p class="text-sm">{{ item.department }}</p>
            </div>
            <div class="status w-28">
              <p
                class="text-sm font-bold text-green-600"
                v-if="item.status == 1"
              >
                Activo
              </p>
              <p class="text-sm font-bold text-red-600" v-else>Inactivo</p>
            </div>
            <div class="icon-more w-auto border-blue-100">
              <buttom>
                <svg
                  class="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </buttom>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import moment from 'moment'
import PieChart from "./PieChart.js";

// const lastSession = h =>{ moment([h]).fromNow() }
var xlabel = []
let dataChart = []

export default {
  name: "Report",
  components: {
    PieChart,
  },
  data() {
    return {
      loaded: false,
      names: null,
      dates: {},
      // reports: null
      dataChart: null,
      labels: null,
      chartOptions: {
        hoverBorderWidth: 20,
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData: {
        // labels: xlabel,
        labels: ["#41B883", "#E46651", "#00D8FF", "#D8FF"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#D8FF"],
            data: [483, 61, 8, 87],
          },
        ], 
      },

    }
  },
  async mounted() {
    this.loaded = false;
    try {
      // Users
      const userResponse = await fetch("/api/users");
      const users = await userResponse.json();
      this.names = users.users;

      // function change(h){
      //     // const hour = moment(d, "YYYYMMDD").format("LLL")
      //     return h.toISOString().slice(0,9) + " " + "funciona"
      // }

      // Reports
      const reportResponse = await fetch("/api/reports");
      const reports = await reportResponse.json();

      xlabel.push(reports.reports.map(e=> e.category ))
    
      dataChart.push(reports.reports.map(e=> e.total ))
      console.log(xlabel)
      // this.dataChart = reports.reports.map(e=> e.total )
    //   this.dataChart = reports.reports.total;
    //   this.labels = reports.reports.category;
      // this.chartData.labels = reports.reports.map(e=> e.category )
      this.loaded = true;

    } catch (e) {
    //   console.error(e);
    }
  },
};
</script>

<style></style>
