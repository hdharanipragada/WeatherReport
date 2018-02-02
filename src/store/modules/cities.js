import cities from '../../api/cities'
import * as types from '../mutation-types'

//state
const state = {
    cities: []
}

// getters
const getters = {
    allCities: state => state.cities,
    selectedCities: state => state.cities.filter(value => value.selected == true)
}

// actions
const actions = {
    getAllCities({ commit }) {
        cities.getCities(cities => {
            commit(types.RECIEVE_CITIES, { cities })
        })
    }
}

// mutations
const mutations = {
    [types.RECIEVE_CITIES](state, { cities }) {
        state.cities = cities
    },
    [types.SET_CITY_SELECTED](state, { id }) {
        console.log(id)
        state.cities = state.cities.map((value, index) => {
            if (value.id == id) {
                value.selected = true;
            }
            return value;
        })
    },
    [types.REMOVE_CITY](state, { id }) {
        state.cities.map((value, index) => {
            if (value.id == id) {
                state.cities.splice(index, 1)
            }
            return value;
        })
    },
    [types.ADD_CITY](state, payload) {
        state.cities.push({ id: Math.random(), name: payload.cityName });
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}