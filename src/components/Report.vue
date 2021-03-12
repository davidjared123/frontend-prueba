<template>
  <main class="flex justify-between">
    <div class="chart bg-white rounded shadow-xl border border-gray-100">
      <div class="p-5">
        <h2 class="text-blue-900 text-lg">Why do you create a startup?</h2>
        <p class="text-gray-400">Trents</p>
        <div class="">
          <pie-chart
            style="height: 350px"
            v-if="loaded"
            :data="chartData"
            :options="chartOptions"
          ></pie-chart>
        </div>

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
            <div class="login w-36">
              <p>Last login</p>
            </div>
            <div class="deparment w-32">
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
              <div class="w-7 mr-3">
                  <!-- NOTA se que no querian nada estatico pero la api esta caida y no arroja las imagenes -->
                <!-- src="../assets/user.jpg" -->
                <img
                  :src="item.profile_img"
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
            <div class="login w-36">
              <p class="date text-sm">
                {{ item.sessions[0] }}
              </p>
              <p
                class="count-date text-sm text-gray-500">
               {{ item.last_session[0] }}
                </p>
            </div>
            <div class="deparment w-32">
              <p class="text-sm">{{ item.department }}</p>
            </div>
            <div class="status w-28">
              <p
                class="text-sm font-bold text-green-600"
                v-if="item.status == 1"
              >Activo</p>
              <p class="text-sm font-bold text-red-600" v-else>Inactivo</p>
            </div>
            <div class="icon-more w-auto border-blue-100">
              <button>
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
              </button>
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

let myLabels = []
let myTotals = []

export default {
  name: "Report",
  components: {
    PieChart,
  },
  data() {
    return {
      loaded: false,
      names: [],
      reports: [],

chartOptions: {
    hoverBorderWidth: 20,
    responsive: false,
    maintainAspectRatio: false,
    responsive: true,
        legend: {
          display: true,
            position: 'button',
        },
      },
  chartData: {
        labels: myLabels,
        datasets: [
        {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#D8FF"],
            data: myTotals,
        },
      ], 
    },
  }
},

 async mounted() {
      this.loaded = false;
      // Users
      const userResponse = await fetch("/api/users");
      const users = await userResponse.json();
      this.names = users.users;
      
    
      // Reports
      const reportResponse = await fetch("/api/reports");
      const reports = await reportResponse.json();
      this.reports = reports.reports

      this.reports.map(e=> myLabels.push(e.category))
      this.reports.map(e=> myTotals.push(e.total))

      this.loaded = true
  }
}
</script>

<style></style>
