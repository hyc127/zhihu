import homeComponent from './home.vue'

const Home = {
    install: function(Vue) {
        Vue.component('home', homeComponent);
    }
}

export default Home