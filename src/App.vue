<template >
  <div id="app" class="app-container">
    <!-- 头部 -->
    <mt-header fixed title="vue-cms"></mt-header>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
         <!-- 使用购物车图标需要再引入一个icons-extra.css -->
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav> 
    <!-- 路由占位符 -->
		<transition>
			<router-view></router-view> 
		</transition>
    
  </div>
</template>

<script>

</script>

<style>
/* 切换组件的动画 */
.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	/* 给离开的组件绝对定位,不让占位置 */
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.4s ease;
}
.app-container{
	padding-top:40px;
	/* 给x轴超出隐藏,避免切换组件时出现滚动条 */
	overflow-x: hidden;
}
</style>
