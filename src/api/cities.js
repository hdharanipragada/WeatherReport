
/** Mock Data for list of cities */

const _cities = [
    {"id": 1, "name": "Hyderabad"},
    {"id": 2, "name": "Delhi"},
    {"id": 3, "name": "Mumbai"},
    {"id": 4, "name": "Calcutta"},
    {"id": 5, "name": "Bengaluru"},
    {"id": 6, "name": "cochin"},
    {"id": 7, "name": "Pune"}
  ]
  
  export default {
      getCities(cb) {
        setTimeout(() => cb(_cities), 100)
      }
  }