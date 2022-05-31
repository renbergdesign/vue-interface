<template>
  <div class="col-12 col-md-10 col-lg-7">
    <div class="list-group list-group-flush">
      <div
        class="list-group-item d-flex align-items-start"
        v-for="item in appointments"
        :key="item.id"
      >
        <button
          class="mr-2 btn btn-sm btn-danger"
          @click="$emit('remove', item)"
        >
          <font-awesome-icon icon="trash" />
        </button>
        <div class="w-100">
          <div class="d-flex justify-content-between">
            <span
              class="h4 text-primary"
              contenteditable="contentecitable"
              @blur="
                $emit('edit', item.id, 'firstname', $event.target.innerText)
              "
              >{{ item.properties.firstname }}</span
            >
            <span class="float-right">{{ formattedDate(item.updatedAt) }}</span>
          </div>
          <div class="owner-name">
            <span class="font-weight-bold text-primary mr-1">Firma: </span>
            <span>{{ item.properties.lastname }}</span>
          </div>
          <div>{{ item.properties.email }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import moment from "moment";
  export default {
    name: "AppointmentList",
    props: ["appointments"],
    components: {
      FontAwesomeIcon,
    },
    methods: {
      formattedDate: function (date) {
        return moment(new Date(date)).format("DD. MMM, YYYY");
      },
      formattedDay: function (date) {
        return moment(new Date(date)).format("dddd");
      },
      formattedTime: function (date) {
        return moment(new Date(date)).format("HH:mm");
      },
    },
  };
</script>
