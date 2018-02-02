<template>
  <div class="report">
    <div class="selectedcity">
      <select @change="getSelectedCity($event)">
           <option v-for="(city,index) in selectedCities">{{city.name}}</option>
       </select>
    </div>
    <div class="weatherList">
      <div class="title">
        <div>5 Day forecast</div>
        <div class="location">{{$route.params.name}}</div>
      </div>
      <div class="card-holder">
        <div class="card" v-for="(report, index) in reports">
          <div class="text-container">
            <div class="date">
              <div class="heading">Day {{index+1}}</div>
              <div class="heading">{{new Date(report.datetime).toDateString()}}</div>
            </div>
            <div class="weather">{{report.weather.description}}</div>
            <div class="heading">Max Temp</div>
            <div class="temp">{{report.max_temp}}&#176;</div>
            <div class="heading"> Min Temp</div>
            <div class="temp">{{report.min_temp}}&#176;</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Reports",
    data() {
      return {
        msg: "You have selected:",
        reports: []
      };
    },
    /**
     * watch for the changes in routes
     * 
    */
    watch: {
      $route: function () {
        var self = this;
        self.isLoading = true;
        self.fetchData(self.$route.params.name);
      }
    },

    methods: {
      /**
       * fetchdata
       * fetch Data from using axioms
      */
      fetchData(param) {
        var self = this;
        return axios
          .get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${param}&key=14048c391d2842d7bc5f652cb315e853&days=5`
          )
          .then(function (response) {
            self.reports = response.data.data;
          })
          .catch(function (error) {
            self.fetchError = error;
          });
      },
      /**
      * getSelectedCity
      *  perform routes change when a city is selected from the dropdown
     */
      getSelectedCity(evt) {
        this.$router.push({
          name: "Reports",
          params: { name: evt.currentTarget.value }
        });
      }
    },
    /**
    * mounted 
    * Check for the route changes when mounted and fetch data
   */
    mounted() {
      console.log(this.$route.params);
      var self = this;
      if (this.$route.params) {
        self.fetchData(this.$route.params.name);
      }
    },

    /**
     * computed
     * call when the value changes every time
    */
    computed: {
      selectedCities: function () {
        return this.$store.getters.selectedCities;      
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title {
    display: flex;
    font-size: 20px;
    text-transform: uppercase;
    margin: 5px;
  }

  .weatherList {
    margin: 40px 50px;
  }

  .selectedcity {
    text-align: right;
    margin: 10px;
  }

  .card-holder {
    display: flex;
  }

  .text-container {
    text-align: center;
    box-shadow: 0px 0px 10px #aaaaaa;
    background-color: #ffffff;
  }

  .text-container div {
    margin: 10px 0px 10px 0px;
    padding: 5px 0px;
  }

  .card {
    flex: 1;
    margin: 5px;
  }

  .date {
    background-color: #14558c;
    color: #ffffff;
  }

  .location {
    text-align: right;
    flex: 1;
  }

  .heading {
    font-weight: 700;
  }

  .temp {
    font-size: 24px;
  }

  .weather {
    color: #57aaf2;
    font-weight: bold;
  }

  .selectedcity select {
    height: 30px;
    width: 150px;
    font-size: 15px;
    border-radius: 6px;
  }
</style>