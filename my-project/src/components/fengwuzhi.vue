<template>
  <div class="fengwuzhi">
     <ejnav :index="index"></ejnav>
    <div class="fwzbanner">
      <img :src="imginfo.datu" class="banner"/>
    </div>
     <div class="info">
     	<!--<img src="./static/fengwuzhi/cangqiong.jpg"/>-->
     	<img :src="imginfo.wenzi" class="text"/>
     	<div class="tupian">
     		 <div class="left" @click="jumpleft(imginfo.index)">
     		 	<div class="bigpic">
     		 	 <div class="pic">
     		 		<img :src="imginfo.leftpic"/>
     		 		</div>
     		 		 	</div>
     		 		 	<p class="textinfo">{{imginfo.leftinfo}}</p>
     		 </div>
     		 <div class="right" @click="jumpright(imginfo.index)">
     		 		<div class="bigpic">
     		 	 <div class="pic">
     		 	 <img :src="imginfo.rightpic"/>
     		 	 </div>
     		 		 	</div>
     		 		 	 <p class="textinfo">{{imginfo.rightinfo}}</p>
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
    	  	info:'苍穹宫',
    	  	datu:'./static/fengwuzhi/4.jpg',
    	  	wenzi:'./static/fengwuzhi/1text.png',
    	  	leftpic:'./static/fengwuzhi/huoyu.png',
    	  	rightpic:'./static/fengwuzhi/chijiao.png',
    	  	index:'0',
    	  	leftinfo:'武境',
    	  	rightinfo:'池教',
    	  },
    	   {
    	   	info:'池教',
    	  	datu:'./static/fengwuzhi/5.jpg',
    	  	wenzi:'./static/fengwuzhi/2text.png',
    	  	leftpic:'./static/fengwuzhi/cangqiong.png',
    	  	rightpic:'./static/fengwuzhi/mufu.png',
    	  	index:'1',
    	  	leftinfo:'苍穹宫',
    	  	rightinfo:'牧府',
    	  },
    	   {
    	   	info:'牧府',
    	  	datu:'./static/fengwuzhi/1.jpg',
    	  	wenzi:'./static/fengwuzhi/3text.png',
    	  	leftpic:'./static/fengwuzhi/chijiao.png',
    	  	rightpic:'./static/fengwuzhi/wujin.png',
    	  	index:'2',
    	  	leftinfo:'池教',
    	  	rightinfo:'无尽火狱',
    	  },
    	   {
    	   	info:'无尽火狱',
    	  	datu:'./static/fengwuzhi/3.jpg',
    	  	wenzi:'./static/fengwuzhi/4text.png',
    	  	leftpic:'./static/fengwuzhi/wujin.png',
    	  	rightpic:'./static/fengwuzhi/cangqiong.png',
    	  	index:'3',
    	  	leftinfo:'牧府',
    	  	rightinfo:'武境',
    	  },
    	   {
    	   	info:'武境',
    	  	datu:'./static/fengwuzhi/2.jpg',
    	  	wenzi:'./static/fengwuzhi/5text.png',
    	  	leftpic:'./static/fengwuzhi/mufu.png',
    	  	rightpic:'./static/fengwuzhi/huoyu.png',
    	  	index:'4',
    	  	leftinfo:'无尽火狱',
    	  	rightinfo:'苍穹宫',
    	  },

    	],
    	imginfo:[]
    }
  },
  mounted(){
  	var self=this;
  	self.yeshu=self.$route.params.page
	  self.imginfo=self.imglist[self.yeshu]
	  console.log(document.body.scrollHeight)
	$('.gushiji').css('height',document.body.scrollHeight)
  },
  methods: {
    jumpleft(val){
    	if(val==0){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 4}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==1){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 0}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==2){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 1}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==3){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 2}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==4){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 3}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
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
    		this.$router.push({ name: 'fengwuzhi',params: {page: 3}});
    		window.location.reload();
    	}else if(val==3){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 4}});
    		window.location.reload();
    	}else if(val==4){
    		this.$router.push({ name: 'fengwuzhi',params: {page: 0}});
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
 	background-size:cover;
 	background: #f7ebd8;
 }
 .fwzbanner{
   min-height: 500px;
   width: 100%;
 }
 .banner{
   /*min-height: 1000px;*/
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
 	margin: 60px auto 220px;
 }
 .left{
 	float: left;
 	width: 228px;
 }
 .left img{
 	transition: transform 1s;
   -webkit-transition: transform 1s; /* Safari */
   -moz-transition: transform 1s;
   -ms-transition: transform 1s;
   -o-transition: transform 1s;
 }
 .left:hover .pic>img{
 	cursor: pointer;
 	transform:scale(1.2,1.2);
   -webkit-transform:scale(1.2,1.2);
   -moz-transform:scale(1.2,1.2);
   -ms-transform:scale(1.2,1.2);
   -o-transform:scale(1.2,1.2);
 }
 .left:hover .textinfo{
 	color: #b70000;
 }
 .left:hover .bigpic{
 border: 1px solid  #b70000;
 }
 .bigpic{
    width: 214px;
    height: 135px;
    overflow: hidden;
    border: 1px solid #C0CCDA;
    box-sizing: border-box;
    padding-top: 4px;
    padding-left: 4px;
 }
 .pic{
 		width: 204px;
 		height: 125px;
 		overflow: hidden;
 }
  .right img{
 	transition: transform 1s;
   -webkit-transition: transform 1s; /* Safari */
   -moz-transition: transform 1s;
    -ms-transition: transform 1s;
   -o-transition: transform 1s;
 }
 .right:hover .bigpic{
   border: 1px solid  #b70000;
 }
  .right:hover .pic>img{
 	cursor: pointer;
 	transform:scale(1.2,1.2);
   -webkit-transform:scale(1.2,1.2);
   -moz-transform:scale(1.2,1.2);
    -ms-transform:scale(1.2,1.2);
   -o-transform:scale(1.2,1.2);
 }
 .right:hover .bigpic{
 border: 1px solid  #b70000;
 }
 .right{
 	float: right;
 	text-align: right;
 }
 .right:hover .textinfo{
 	color: #b70000;
 }
 .banquan{
 	width: 898px;
 	padding-bottom: 60px;
 }
  .textinfo{
 	color: #893832;
 	font-size:20px;
 	text-align: center;
 	margin-top: 20px;
 	font-weight: 600;
 }
</style>
