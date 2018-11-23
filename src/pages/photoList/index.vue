<template>
<div class="photo-list-container">
    <!-- 顶部滑动条区域  -->
    <div class="mui-content">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a v-bind:class="{'mui-control-item':true,'mui-active':item.id === 0}" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in cates" :key="item.id" @click="getPhotoList(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
    </div>
    <ul class="photo-list">
        <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoInfo/'+item.id">
            <img v-lazy="item.img_url">
            <div class="info">
                <h1 class="info-title">{{ item.title }}</h1>
                <div class="info-body">{{ item.zhaiyao }}</div>
            </div>
        </router-link>
    </ul>
</div>

</template>
<script>
// 导入mui的js文件
import  mui from "../../lib/mui/js/mui.min.js"
// 局域滚动初始化
export default {
    data(){
        return {
            cates:[],
            list:[]
        }
    },
    created(){
        this.getPhotoCates()
        this. getPhotoList(0)
    },
    // 当元素都挂载到dom树之后执行局域滚动初始化
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        }); 
    },
    methods:{
        // 获取图片分类列表
        getPhotoCates(){
            this.$http.get('api/getimgcategory').then(result => {
                console.log(result.body)
                var title0 = {
                        id:0,
                        title:'全部'
                    }
                if(result.body.status == 0){    
                    // 手动拼接出一个最完整的 分类列表               
                    result.body.message.unshift(title0)
                    this.cates = result.body.message
                }
            })
            },
            // 获取分类图片数据
        getPhotoList(id){
            this.$http.get('api/getimages/'+id).then(result => {
                // console.log(result.body)
                this.list = result.body.message
                
            })
        }
    }
}
</script>
<style lang="less">
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 50px;
  li {
    background-color: #ddd;
    // text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 8px #eee;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>

