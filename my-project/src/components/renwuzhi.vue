<template>
  <div class="fengwuzhi">
     <ejnav :index="index"></ejnav>
     <div class="info">
     	<!--<img src="./static/fengwuzhi/cangqiong.jpg"/>-->
       <div class="text-img">
         <img :src="imginfo.wenzi" class="text"/>
       </div>
     	<div class="tupian">
     		<img src="../../static/renwuzhi/jtou.png" style="margin-bottom: 60px;width: 480px;" />
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
    	index:'1',
    	yeshu:'0',
    	imglist:[
    	  {
    	  	info:'姜易年',
    	  	datu:'./static/fengwuzhi/4.jpg',
    	  	wenzi:'./static/renwuzhi/jyn.png',
    	  	leftpic:'./static/renwuzhi/smallmk.png',
    	  	leftinfo:'魔鲲',
    	  	rightpic:'./static/renwuzhi/smallmyx.png',
    	  	rightinfo:'牧云熙',
    	  	index:'0'
    	  },
    	   {
    	   	info:'牧云熙',
    	  	datu:'./static/fengwuzhi/5.jpg',
    	  	wenzi:'./static/renwuzhi/myx.png',
    	  	leftpic:'./static/renwuzhi/smalljyn.png',
    	  	rightpic:'./static/renwuzhi/smallmc.png',
    	  	index:'1',
    	  	leftinfo:'姜易年',
    	  	rightinfo:'牧尘',
    	  },
    	   {
    	   	info:'牧尘',
    	  	datu:'./static/fengwuzhi/1.jpg',
    	  	wenzi:'./static/renwuzhi/mc.png',
    	  	leftpic:'./static/renwuzhi/smallmyx.png',
    	  	rightpic:'./static/renwuzhi/smallll.png',
    	  	index:'2',
    	  	leftinfo:'牧云熙',
    	  	rightinfo:'洛璃',
    	  },
    	   {
    	   	info:'洛璃',
    	  	datu:'./static/fengwuzhi/3.jpg',
    	  	wenzi:'./static/renwuzhi/ll.png',
    	  	leftpic:'./static/renwuzhi/smallmc.png',
    	  	rightpic:'./static/renwuzhi/smallld.png',
    	  	index:'3',
    	  	leftinfo:'牧尘',
    	  	rightinfo:'林动',
    	  },
    	   {
    	   	info:'林动',
    	  	datu:'./static/fengwuzhi/2.jpg',
    	  	wenzi:'./static/renwuzhi/ld.png',
    	  	leftpic:'./static/renwuzhi/smallll.png',
    	  	rightpic:'./static/renwuzhi/smallxy.png',
    	  	index:'4',
    	  	leftinfo:'洛璃',
    	  	rightinfo:'萧炎',
    	  },
    	   {
    	   	info:'萧炎',
    	  	datu:'./static/fengwuzhi/2.jpg',
    	  	wenzi:'./static/renwuzhi/xy.png',
    	  	leftpic:'./static/renwuzhi/smallld.png',
    	  	rightpic:'./static/renwuzhi/smallqy.png',
    	  	index:'5',
    	  	leftinfo:'林动',
    	  	rightinfo:'秦渊',
    	  },
    	   {
    	   	info:'秦渊',
    	  	datu:'./static/fengwuzhi/2.jpg',
    	  	wenzi:'./static/renwuzhi/qy.png',
    	  	leftpic:'./static/renwuzhi/smallxy.png',
    	  	rightpic:'./static/renwuzhi/smalltxy.png',
    	  	index:'6',
    	  	leftinfo:'萧炎',
    	  	rightinfo:'唐修崖',
    	  },
    	  {
    	   	info:'唐修崖',
    	  	datu:'./static/fengwuzhi/2.jpg',
    	  	wenzi:'./static/renwuzhi/txy.png',
    	  	leftpic:'./static/renwuzhi/smallqy.png',
    	  	rightpic:'./static/renwuzhi/smalllyh.png',
    	  	index:'7',
    	  	leftinfo:'秦渊',
    	  	rightinfo:'林雨涵',
    	  },
    	   {
    	   	info:'林雨寒',
    	  	datu:'./static/fengwuzhi/2.jpg',
    	  	wenzi:'./static/renwuzhi/lyh.png',
    	  	leftpic:'./static/renwuzhi/smalltxy.png',
    	  	rightpic:'./static/renwuzhi/smallmk.png',
    	  	index:'8',
    	  	leftinfo:'唐修崖',
    	  	rightinfo:'魔鲲',
    	  },
    	  {
    	   	info:'魔鲲',
    	  	datu:'./static/fengwuzhi/2.jpg',
    	  	wenzi:'./static/renwuzhi/mk.png',
    	  	leftpic:'./static/renwuzhi/smalllyh.png',
    	  	rightpic:'./static/renwuzhi/smalljyn.png',
    	  	index:'9',
    	  	leftinfo:'林雨寒',
    	  	rightinfo:'姜易年',
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
    		this.$router.push({ name: 'renwuzhi',params: {page: 9}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==1){
    		this.$router.push({ name: 'renwuzhi',params: {page: 0}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==2){
    		this.$router.push({ name: 'renwuzhi',params: {page: 1}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==3){
    		this.$router.push({ name: 'renwuzhi',params: {page: 2}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==4){
    		this.$router.push({ name: 'renwuzhi',params: {page: 3}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}
    	else if(val==5){
    		this.$router.push({ name: 'renwuzhi',params: {page: 4}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}
    	else if(val==6){
    		this.$router.push({ name: 'renwuzhi',params: {page: 5}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}
    	else if(val==7){
    		this.$router.push({ name: 'renwuzhi',params: {page: 6}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}
    	else if(val==8){
    		this.$router.push({ name: 'renwuzhi',params: {page:7}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}
    	else if(val==9){
    		this.$router.push({ name: 'renwuzhi',params: {page: 8}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}
    },
    jumpright(val){
    	if(val==0){
    		this.$router.push({ name: 'renwuzhi',params: {page: 1}});
    		window.location.reload();
    		$('body,html').animate({ scrollTop: 0 }, 0);
    	}else if(val==1){
    		this.$router.push({ name: 'renwuzhi',params: {page: 2}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==2){
    		this.$router.push({ name: 'renwuzhi',params: {page: 3}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==3){
    		this.$router.push({ name: 'renwuzhi',params: {page: 4}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==4){
    		this.$router.push({ name: 'renwuzhi',params: {page: 5}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==5){
    		this.$router.push({ name: 'renwuzhi',params: {page: 6}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==6){
    		this.$router.push({ name: 'renwuzhi',params: {page: 7}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==7){
    		this.$router.push({ name: 'renwuzhi',params: {page: 8}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==8){
    		this.$router.push({ name: 'renwuzhi',params: {page: 9}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
    		window.location.reload();
    	}else if(val==9){
    		this.$router.push({ name: 'renwuzhi',params: {page: 0}});
    			$('body,html').animate({ scrollTop: 0 }, 0);
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
 .banner{
 	margin-top: -24px;
 }
 .info{
 	position: relative;
 	text-align: center;
 	background: url(../../static/fengwuzhi/cangqiong.jpg) no-repeat;
 	background-size:cover;
 }
 .text-img{
   width: 875px;
   min-height: 800px;
   margin: 0 auto;
 }
 .text{
 	/*position: absolute;
 	top: 48%;
 	left: 50%;
 	transform: translate(-50%,-50%);
 	-webkit-transform: translate(-50%,-50%);*/
 	width: 875px;
 	margin-top: 100px;
 }
 .tupian{
  width: 460px;
 	overflow: hidden;
 	margin: 80px auto 220px;
 }
 .left{
 	float: left;
 	overflow: hidden;
 }
 .left img{
 	border-radius: 50%;
 	transition: transform 1s;
   -webkit-transition: transform 1s; /* Safari */
   -moz-transition: transform 1s;
   -ms-transition: transform 1s;
   -o-transition: transform 1s;
 }
 .left:hover .pic>img{
 	cursor: pointer;
 	border-radius: 50%;
 	-webkit-border-radius: 50%;
   transform:scale(1.05,1.05);
   -webkit-transform:scale(1.05,1.05);
   -ms-transform:scale(1.05,1.05);
 }
 .left:hover .textinfo{
 	color: #b70000;
 }
 .left:hover .bigpic{
 border: 1px solid  #b70000;
 }
  .right:hover .textinfo{
 	color: #b70000;
 }
 .right:hover .bigpic{
 border: 1px solid  #b70000;
 }
 .bigpic{
 		border-radius: 50%;
 		-webkit-border-radius: 50%;
 		-moz-border-radius: 50%;
 		-o-border-radius: 50%;
       width: 190px;
    height: 190px;
    overflow: hidden;
    /*border: 1px solid #C0CCDA;*/
    box-sizing: border-box;
    padding-top: 4px;
    padding-left: 4px;
   position: relative;
 }
 .pic{
 		width: 96%;
    height: 96%;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAUVBMV…Q6KHc3xBinQh1JBrHfQ6emedPGWGZrjN7mSXVh7xNJ+AfApG4Lbh0pFAAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    top: 1px;
    z-index: 3;
    left: -1px;
 }
 .right:hover{
 	cursor: pointer;
 }
 .right{
 	float: right;
 	text-align: right;
 }
 .right img{
 	border-radius: 50%;
   display: block;
 	transition: transform 1s;
   -webkit-transition: transform 1s; /* Safari */
   -moz-transition: transform 1s;
   -ms-transition: transform 1s;
   -o-transition: transform 1s;
 }
  .right:hover .pic>img{
 	cursor: pointer;
 	transform:scale(1.05,1.05);
   -webkit-transform:scale(1.05,1.05);
   -moz-transform:scale(1.05,1.05);
    -ms-transform:scale(1.05,1.05);
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
