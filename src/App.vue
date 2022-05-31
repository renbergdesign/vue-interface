<template>
  <div class="container">
  <appointment-list :appointments="appointments" />
    
  </div>
</template>

<script>
import AppointmentList from './components/AppointmentList';
import axios from "axios";

export default {
  name: "App",
  data: function () {
    return {
      title: "App Title",
      appointments: []
    };
  },
  components: {
    AppointmentList
  } ,
  mounted(){
    axios.get("https://api.hubapi.com/crm/v3/objects/contacts/?archived=false&hapikey=eu1-5cdc-4349-440d-9891-838288ed6294")
    .then(response => (this.appointments = response.data.results));
    }
};
</script>
