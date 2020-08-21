<template>
  <div id="calendaer-week" class="container">
    <div class="columns is-mobile">
      <CalendarDay v-for="day in sharedStare.seedData" :key="day.id" :day="day" />
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'CalendarWeek',
  data() {
    return {
      sharedStare: store.state,
    };
  },
  components: {
    CalendarDay,
  },
};
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0px;
  }
}
</style>