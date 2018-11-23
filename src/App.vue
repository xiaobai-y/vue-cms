<template >
  <div id="app" class="app-container">
    <!-- 头部 -->
    <mt-header fixed title="vue-cms"></mt-header>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-yy " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-yy" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-yy" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
         <!-- 使用购物车图标需要再引入一个icons-extra.css -->
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-yy" to="/search">
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
/* 该类名，解决 tabbar 点击无法切换的问题 */
.mui-bar-tab .mui-tab-item-yy .mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-yy {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-yy .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-yy .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
