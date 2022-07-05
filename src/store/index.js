import { createStore } from 'vuex'

export default createStore({
  state: {
    onemiData: [],
    bannersData: [
      { link: "../assets/img/banners/3.png" }, 
      { link: "../assets/img/banners/Botones-1.png" }, 
      { link: "../assets/img/banners/Botones-2.png" },
      { link: "../assets/img/banners/Botones-3.png" },
      { link: "../assets/img/banners/Botones-4.png" },
      { link: "../assets/img/banners/Botones-5.png" },
      { link: "../assets/img/banners/Botones-6.png" },
      { link: "../assets/img/banners/Botones-webbeca-ok.png" },
      { link: "../assets/img/banners/Diseno-sin-titulo-1536x334.png" },
      { link: "../assets/img/banners/Diseño-sin-título-4.png" },
      { link: "../assets/img/banners/banner-discapacidad-y-diversidad-18.png" },
      { link: "../assets/img/banners/banner-discapacidad-y-diversidad-19.png" },
      { link: "../assets/img/banners/boton-justicia_Mesa-de-trabajo-1-1536x256.png" },
      { link: "../assets/img/banners/catalogo-beneficios-sociales.png" }
    ]
  },
  getters: {
    getOnemiData(state) {
      return state.onemiData
    },
    getBannersData(state) {
      return state.bannersData
    },
  },
  mutations: {
    mutateOnemiData: (state, data) => {
      state.onemiData = data
    },
  },
  actions: {
    async callOnemiData({ commit }) {
      const URL = 'https://newsdata.io/api/1/news?apikey=pub_8928c482d91b860895c5178ac34568858d8b&country=ve'
      const data = await fetch(URL).then(response => response.json())
      console.log(data)
      commit('mutateOnemiData', data)
    },
  },
  modules: {
  }
})
