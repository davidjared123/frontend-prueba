<template>
  <div id="app" class="p-5">
    <Navbar></Navbar>
    <Report></Report>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Report from './components/Report'


export default {
  name: 'app',
  components: {
    Navbar,
    Report
  },
  async mounted() {
    // Users
    // const userResponse = await fetch('/api/users');
    // const users = await userResponse.json();
    // Reports
    // const reportResponse = await fetch('/api/reports');
    // const reports = await reportResponse.json();
  }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
}

</style>
