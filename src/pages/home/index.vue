<template>
<div class="home-container">
    <!-- 轮播图 -->
  <mt-swipe :auto="4000">        
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
            <a :href="item.url">
                <img :src="item.url" >
            </a>
        </mt-swipe-item>       
  </mt-swipe>
  <!-- 九宫格 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="home/newList">
                <!-- <span class="mui-icon mui-icon-home"></span> -->
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="home/photoList">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div>
            </router-link>
            </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="home/goodslist">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </a>
        </li>
	</ul>
</div>
 
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getBannerDate();
  },
  methods: {
    getBannerDate() {
      this.$http.get("api/getlunbo").then(result => {
        // console.log(result.body);
        if (result.body.status == 0) {
          this.bannerList = result.body.message;
        } else {
          Toast("获取轮播图数据失败!请重试!");
        }
      });
    }
  }
};
</script>

<style lang="less">
.home-container {
  // 轮播图样式
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-of-type(1) {
        background-color: pink;
      }
      &:nth-of-type(2) {
        background-color: skyblue;
      }
      &:nth-of-type(3) {
        background-color: red;
      }
    }
  }
  //   九宫格样式,使用框架原有类名覆盖样式,能这样做的前提是在外面套了一个大盒子home-container
  .mui-table-view{
      background-color: #fff;
      border-top:none;
      border-left:none;
      .mui-table-view-cell{
          border-right: none;
          border-bottom:none;
          img{
              width: 60px;
              height: 60px;
          }
      }
  }
}
</style>
