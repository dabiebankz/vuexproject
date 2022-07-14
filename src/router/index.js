import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyScreen from '../views/HelloWorld.vue'
import AboutScreen from '../views/AboutUs.vue'
import ScreenPage from '../views/UserView'
import RecordPage from '../views/AboutView'
import FooterPage from '../views/ContactView'
import JobCall from '../views/JobView.vue'
import CreatePost from '../views/CreatePost.vue'

const routes = [
  {
    path: '/',
    name: 'somewhere',
    component: HomeView
  },
  {
    path: '/somewhere22',
    name: 'about2',
    component:MyScreen
  },
  {
    path: '/screen',
    name: 'about3',
    component:AboutScreen
  },
  {
    path: '/view',
    name: 'about4',
    component:ScreenPage
  },
  {
    path: '/music',
    name: 'about5',
    component:RecordPage
  },
  {
    path: '/contact',
    name: 'about4',
    component:FooterPage
  },
  {
    path: '/job',
    name: 'about6',
    component:JobCall
  },
  {
    path: '/post',
    name: 'about5',
    component:CreatePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
