# vue-cms

> 这是一个用webpack打包构建的cms移动端学习项目,用的框架是vue,组件库是mint-ui和mui
> mint-ui使用方法去看官网,有一点值得提的是在实际应用中,导入mint-ui组建的时候一般是按需导入.
>
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 修改首页tabBar图标
- 了解mui框架的使用:github下载离线包,将包中的dist文件夹内的文件拷贝,在本项目的src目录下新建lib文文件夹,放进去.但是这样导入的文件只包含了部分mui组件,更多组件可在离线包中仔细查找.
1. mint-ui里面没有购物车图标,于是需要使用mui中的字体图标,找到mui的扩展图标库
2. 将扩展图标库icons-extra.css拷贝到项目中(连带字体文件一起拷贝)
3. 在main.js中引入购物车字体图标的样式文件
4. 使用字体图标

## 设置当前选中的tab栏高亮

- 结合路由的`linkActiveClass`属性完成使用`mui-active`类样式的高亮
```javascript
routes: [
    {
      path:'/home',
      component:home    
    }
  ],
  linkActiveClass:'mui-active'
})
```

## 配置路由规则实现路由跳转

- 项目文件的结构注意事项, 可以参考现有的开源项目, 如github中的elm,更方便的管理自己的文件结构

- 参考结构:
pages里面放组件页面,components里面放抽离出来的小组件
  src => pages => home => index.vue
  src => components => common

配置路由规则:

  ```javascript
  import HomeComponent from '../pages/home/'
  import MemberComponent from '../pages/member/'
  import ShopcarComponent from '../pages/shopcar/'
  import SearchComponent from '../pages/search/'

  Vue.use(Router)

  export default new Router({
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: HomeComponent },
      { path: '/member', component: MemberComponent },
      { path: '/shopcar', component: ShopcarComponent },
      { path: '/search', component: SearchComponent },
    ],
    linkActiveClass: 'mui-active'
  })
  ```

## 制作首页轮播图

1. 通过mint-ui的swipe组件完成样式
2. 使用vue-resource获取接口中的数据, 进行渲染
3. 在组件中,使用v-for循环时,一定要用key

## 首页九宫格的样式改造

- 由于mint-ui没有合适的组件可供参考, 所以我们使用mui的代码片段作为改造的基础模板
- 修改结构并覆盖mui的默认样式
- 抽取全局的common.less样式, 通过main.js引入
- 在组件中写样式可以使用框架原有的类名来覆盖他的样式,能这样做的前提是在外面套了一个大盒子home-container,建议在每个组件内写样式都在外面套个大盒子,避免样式干扰,同时给组件的div加个类名,类似home-container
- 导入组件时给组件起名字也要规范,如homeComponent

## 添加组件切换动画

- 切换动画的起点和终点不同, 所以单独设置v-enter和v-leave-to的样式

```css
.v-enter {
  transform: translateX(100%);
  opacity: 0;
}

.v-leave-to {
给离开的组件绝对定位,不让占位置
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
.app-container{
	padding-top:40px;
	/* 给x轴超出隐藏,避免切换组件时出现滚动条 */
	overflow-x: hidden;
}
```