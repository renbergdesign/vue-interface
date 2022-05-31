<template>
  <div id="main-app" class="container">
    <div class="row justify-content-center">
      <appointment-list :appointments="appointments" @remove="removeItem" />
    </div>
  </div>
</template>

<script>
  import AppointmentList from "./components/AppointmentList";
  import _ from "lodash";
  import axios from "axios";

  export default {
    name: "MainApp",
    data: function () {
      return {
        appointments: [],
      };
    },
    components: {
      AppointmentList,
    },
    mounted() {
      axios
        .get(
          "https://api.hubapi.com/crm/v3/objects/contacts/?archived=false&hapikey=eu1-5cdc-4349-440d-9891-838288ed6294"
        )
        .then((response) => (this.appointments = response.data.results));
    },
    method: {
      // FUNKER IKKE
      removeItem: function (apt) {
        this.appointments = _.without(this.appointments, apt);
      },
    },
  };
</script>
