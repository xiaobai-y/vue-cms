<template>
   <div class="comment-container">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入您要评论的内容!最多输入120字" maxlength="120" class="comments" v-model="comments"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, index) in commentList" :key="index">
                <div class="comment-title">第{{index + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}</div>
                <div class="comment-content">
                    {{item.content || '此人有点懒'}}
                </div>
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
   </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    props:['id'],
    data(){
        return{                       
            pageindex:1,
            commentList:[],
            comments:''
        }
        
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            // console.log(commentsList)
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(result => {
                //  console.log(result.body.message)
                if(result.body.status == 0){
                    // 点击加载更多时,新加载的评论要拼接进commentList数组里,但是不能用push,push的返回值是把指定的值添加到数组后的新长度。
                    this.commentList = this.commentList.concat(result.body.message)
                    // console.log(this.commentList.push(result.body.message))
                    // console.log(commentsList)
                }else{
                    Toast('获取评论数据失败')
                }
            })
           
        },
        postComment(){
            // 检验评论内容是否为空
            if(this.comments.trim().length == 0){
                return Toast('请输入评论内容')
            }
            // console.log($('.comments').val())
            this.$http.post('api/postcomment/'+this.id,{content:this.comments.trim()},{emulateJSON:true}).then(result => {
                // console.log(this.comments)
                // console.log(result)
                if(result.body.status == 0){
                    Toast(result.body.message)
                    // this.getComments()
                    var comms = {
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.comments
                    }
                    this.commentList.unshift(comms)
                    this.comments = ''
                }else{
                    Toast('发表评论失败,请重试')
                }
            })
        },
        loadMore(){
            this.pageindex++;
            this.getComments()
        }
    }
}
</script>

<style lang="less">
.comment-container {
  .comment-list {
    .comment-item {
      margin: 5px 0;
      .comment-title {
        font-size: 13px;
        background-color: #ccc;
      }
      .comment-content {
        font-size: 13px;
      }
    }
  }
}
</style>
