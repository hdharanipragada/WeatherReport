<template>
  <div class="cities">
    <h2>Cities</h2>
    <ul class="citylist">
      <li v-for="(city,index) in cities" @click.stop.prevent="getCityReport(city.name, city.id)">
        <span>{{city.name}}</span>
        <button class="btn" @click.stop.prevent="removeCity(city.id)">&#8722;</button>
      </li>
    </ul>
    <div class="addnew">
      Add New City:
      <input type="text" v-model="newCityName" />
      <button class="btn-add" v-on:click="addCity()">Add</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Cities",
    data() {
      return {
        msg: "List of cities and weather report",
        newCityName: ""
      };
    },
    /**
     * created
     * get the list of cities
    */
    created() {
      this.$store.dispatch("getAllCities");
    },

    methods: {
      /**
       * getCityReport
       * get the slected city report and set it selected
      */
      getCityReport(city, id) {
        this.$store.commit("SET_CITY_SELECTED", { id });
        this.$router.push({ name: "Reports", params: { name: city } });
      },
      /**
      * removeCity
      * Remove city from the store
     */
      removeCity(id) {
        this.$store.commit("REMOVE_CITY", { id });
      },

      /**
        * addCity
        * Add a city to the store
       */
      addCity() {
        this.$store.commit("ADD_CITY", { cityName: this.newCityName })
      }
    },
    computed:{
      cities: function(){
        return this.$store.getters.allCities;
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cities {
    text-align: center;
  }

  .citylist {
    list-style-type: none;
    padding: 0;
    width: 400px;
    margin: 0 auto;
    border: 1px solid #cecece;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px #aaaaaa;
  }


  .citylist li {
    display: block;
    padding: 18px 24px;
    margin: 1px;
    border-bottom: 1px solid #cecece;
    cursor: pointer;
    font-size: 20px;
    text-align: left;
  }

  .citylist li:hover {
    background-color: #e5eef6;
  }

  .btn-add {
    padding: 10px 20px;
    width: 150px;
    border: .2px solid #eee;
    background-color: #14568c;
    border-radius: 6px;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
  }

  .addnew {
    margin: 10px;
  }


  .addnew input {
    height: 35px;
    border-radius: 3px;
    border: 1px solid #cbc5c5;
  }

  .btn {
    float: right;
    color: #ffffff;
    border-radius: 50%;
    background: #a94442;
    border: .2px solid;
    font-size: 15px;
    cursor: pointer;
  }
</style>