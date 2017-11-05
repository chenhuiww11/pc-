<template>
  <div class="fengwuzhi">
     <ejnav :index="index"></ejnav>
     <img :src="imginfo.datu" class="banner"/>
     <div class="info">
     	<!--<img src="./static/fengwuzhi/cangqiong.jpg"/>-->
     	<img :src="imginfo.wenzi" class="text"/>
     	<div class="tupian">
     		 <div class="left" @click="jumpleft(imginfo.index)">
     		 		<img :src="imginfo.leftpic"/>
     		 </div>
     		 <div class="right" @click="jumpright(imginfo.index)">
     		 	 <img :src="imginfo.rightpic"/>
     		 </div>
     	</div>
     	<img src="../../static/gushiji/banquan.png" class="banquan"/>
     </div>
  </div>
</template>

<script>
import ejnav from '@/components/ejnav'	
export default {
  name: 'HelloWorld',
  components: {
			ejnav
		},
  data () {
    return {
    	index:'2',
    	yeshu:'0',
    	imglist:[
    	  {
    	  	info:'苍穹',
    	  	datu:'./static/fengwuzhi/4.jpg',
    	  	wenzi:'./static/fengwuzhi/1text.png',
    	  	leftpic:'./static/fengwuzhi/huoyu.png',
    	  	rightpic:'./static/fengwuzhi/chijiao.png',
    	  	index:'0'
    	  },
    	   {
    	   	info:'池教',
    	  	datu:'./static/fengwuzhi/5.jpg',
    	  	wenzi:'./static/fengwuzhi/2text.png',
    	  	leftpic:'./static/fengwuzhi/cangqiong.png',
    	  	rightpic:'./static/fengwuzhi/mufu.png',
    	  	index:'1'
    	  },
    	   {
    	   	info:'牧府',
    	  	datu:'./static/fengwuzhi/1.jpg',
    	  	wenzi:'./static/fengwuzhi/3text.png',
    	  	leftpic:'./static/fengwuzhi/chijiao.png',
    	  	rightpic:'./static/fengwuzhi/wujin.png',
    	  	index:'2'
    	  },
    	   {
    	   	info:'火狱',
    	  	datu:'./static/fengwuzhi/3.jpg',
    	  	wenzi:'./static/fengwuzhi/4text.png',
    	  	leftpic:'./static/fengwuzhi/wujin.png',
    	  	rightpic:'./static/fengwuzhi/cangqiong.png',
    	  	index:'3'
    	  },
    	   {
    	   	info:'武境',
    	  	datu:'./static/fengwuzhi/2.jpg',
    	  	wenzi:'./static/fengwuzhi/5text.png',
    	  	leftpic:'./static/fengwuzhi/mufu.png',
    	  	rightpic:'./static/fengwuzhi/huoyu.png',
    	  	index:'4'
    	  },
    	
    	],
    	imginfo:[]
    }
  },
  mounted(){
  	var self=this;
  	self.yeshu=self.$route.params.page
  	self.imginfo=self.imglist[self.yeshu]
  	console.log(self.yeshu)
	$('.gushiji').css('height',document.body.scrollHeight)
  },
  methods: {
    jumpleft(val){
    	if(val==0){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 3}});
    		window.location.reload();
    	}else if(val==1){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 0}});
    		window.location.reload();
    	}else if(val==2){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 1}});
    		window.location.reload();
    	}else if(val==3){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 4}});
    		window.location.reload();
    	}else if(val==4){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 2}});
    		window.location.reload();
    	}
    },
    jumpright(val){
    	if(val==0){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 1}});
    		window.location.reload();
    	}else if(val==1){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 2}});
    		window.location.reload();
    	}else if(val==2){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 4}});
    		window.location.reload();
    	}else if(val==3){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 0}});
    		window.location.reload();
    	}else if(val==4){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 3}});
    		window.location.reload();
    	}
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .fengwuzhi{
 	width: 100%;
 	background-size:contain;
 	background: #f7ebd8;
 }
 .banner{
 	margin-top: -24px;
 }
 .info{
 	position: relative;
 	text-align: center;
 	background: url(../../static/fengwuzhi/cangqiong.jpg) no-repeat;
 	background-size:cover;
 }
 .text{
 	/*position: absolute;
 	top: 48%;
 	left: 50%;
 	transform: translate(-50%,-50%);
 	-webkit-transform: translate(-50%,-50%);*/
 	width: 594px;
 	margin-top: 100px;
 }
 .tupian{
 	width: 594px;
 	height: 218px;
 	overflow: hidden;
 	margin: 80px auto;
 }
 .left{
 	float: left;
 	width: 228px;
 }
 .left:hover{
 	cursor: pointer;
 }
 .right:hover{
 	cursor: pointer;
 }
 .right{
 	float: right;
 	text-align: right;
 }
 .banquan{
 	width: 898px;
 	padding-bottom: 60px;
 }
</style>
