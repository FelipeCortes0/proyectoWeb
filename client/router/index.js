import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '../imports/ui/LatestMovie'
import Movie from '../imports/ui/Movie'
import SearchMovie from '../imports/ui/SearchMovie'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'LatestMovie',
      component: LatestMovie
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: Movie
    },
    {
      path: '/search/:name',
      name: 'SearchMovie',
      props: true,
      component: SearchMovie
    }
  ],
  mode: 'history'
})
