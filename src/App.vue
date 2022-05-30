<template>
  <div class="container">
  <appointment-list :appointments="appointments" />
    
  </div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import AppointmentList from './components/AppointmentList.';
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
    FontAwesomeIcon,
    AppointmentList
  } ,
  mounted(){
    axios.get("./data/appointments.json")
    .then(response => (this.appointments = response.data));
    }
};
</script>
