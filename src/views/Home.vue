<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <table align="center">
      <caption>People</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ row.UserName }}</td>
          <td>{{ row.FirstName }}</td>
          <td>{{ row.LastName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ODataQueryBuilder } from 'yuya.ts.odata-client';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  private data: any[] = [];

  private created() {
    new ODataQueryBuilder('People')
      .addColumns('UserName', 'FirstName', 'LastName')
      .q()
      .then((d: any) => {
        if (!!d && !!d.value) {
          this.data = d.value;
        }
      });
  }
}
</script>
