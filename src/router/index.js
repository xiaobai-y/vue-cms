import Vue from 'vue'
// 导入路由模块
import Router from 'vue-router'
// 导入其他组件,进行路由分发
import homeComponent from '../pages/home/index.vue'
import memberComponent from '../pages/member/member.vue'
import shopcarComponent from '../pages/shopcar/shopcar.vue'
import searchComponent from '../pages/search/search.vue'
import newListComponent from '../pages/newList/index.vue'
import newInfoComponent from '../pages/newInfo/index.vue'
import photoListComponent from '../pages/photoList/index.vue'
// 注册路由
Vue.use(Router)

export default new Router({
  // 进行路由分发
  routes: [
    {
      path:'/',
      redirect:'/home' 
    },
    {
      path:'/home',
      component:homeComponent    
    },
    {
      path:'/member',
      component:memberComponent    
    },
    {
      path:'/shopcar',
      component:shopcarComponent    
    },
    {
      path:'/search',
      component:searchComponent    
    },
    {
      path:'/home/newList',
      component:newListComponent    
    },
    {
      path:'/home/newInfo/:id',
      component:newInfoComponent    
    },
    {
      path:'/home/photoList',
      component:photoListComponent    
    }
  ],
  linkActiveClass:'mui-active'
})
