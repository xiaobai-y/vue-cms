<template>
<div class="new-list-container">
    <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
            <router-link class="mui-navigate-right" :to="'/home/newInfo/'+item.id">
                <img class="mui-media-object mui-pull-left" :src="'item.img_url'">
                <div class="mui-media-body">
                    <h4 mui-ellipsis>{{item.title}}</h4>
                    <p class="mui-pull-left">发表时间:{{item.add_time | dateFormat}}</p>
                    <p class="mui-pull-right">被浏览了{{item.click}}次</p>
                </div>
            </router-link>
        </li>
    </ul>
</div>

</template>
<style>
.new-list-container{
    padding-bottom:50px;
}
</style>

<script>

import {Toast} from "mint-ui"
export default {
    data(){
        return {
            newList:[]
        }
    },
    created(){
        this.getNewList()
    },
    methods:{
        getNewList(){
            // alert(11)
            this.$http.get('api/getnewslist').then(result => {
                // console.log(result.body)
                if(result.body.status == 0){
                    this.newList = result.body.message
                }else{
                    Toast('获取新闻列表数据失败')
                }
            })
        }
    }
}
</script>

