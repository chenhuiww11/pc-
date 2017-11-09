<template>
  <div class="gushiji">
     <ejnav :index="index"></ejnav>
     <div class="book">
        <img src="../../static/fengwuzhi/fengwuzhi.png" class="imgpic"/>
        <div class="buy">
        	<ul class="gsjbuyinfo">
		        <li v-for="item in imglist" @click="jump(item)">
		            <img :src="item.datu" alt="">
		            <p class="text">{{item.info}}</p>
		        </li>		        
		    </ul>
        </div>
     </div>
     <img src="../../static/gushiji/banquan.png" class="banquan"/>
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
    	imglist:[
    	 {
    	   	info:'天罗大陆',
    	  	datu:'./static/fengwuzhi/mufu.png',
    	  	inde:'3'
    	  },
    	   {
    	   	info:'武境',
    	  	datu:'./static/fengwuzhi/wujin.png',
    	  	inde:'5'
    	  },
    	    {
    	   	info:'无尽火狱',
    	  	datu:'./static/fengwuzhi/huoyu.png',
    	  	inde:'4'
    	  },
    	   {
    	  	info:'北苍大陆',
    	  	datu:'./static/fengwuzhi/cangqiong.png',
    	  	inde:'1'
    	  },
    	   {
    	   	info:'南明大陆',
    	  	datu:'./static/fengwuzhi/chijiao.png',
    	  	inde:'2'
    	  },
    	
    	],
    	
    }
  },
  mounted(){
	$('.gushiji').css('height',document.body.scrollHeight)
  },
  methods: {
    jump(val){
//  	console.log(val.inde)
    	this.$router.push({ name: 'fengwuzhi',params: {page: val.inde}});
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .gushiji{
 	background: #fef6e8 url(../../static/gushiji/bg.jpg) no-repeat 0 98px;
 	width: 100%;
 	height: 100%;
 	background-size:cover;
 	overflow: hidden;
 }
 .book{
 	width: 1200px;
 	height: 405px;
 	position: relative;
 	text-align: center;
 	top: 40%;
 	left: 50%;
 	transform: translate(-50%,-50%);
 	-webkit-transform: translate(-50%,-50%);
 	overflow: hidden;
 	
 }
 .imgpic{
 	width: 537px;
 }
 .banquan{
 	position: fixed;
 	bottom: 20px;
 		left: 50%;
 	transform: translateX(-50%);
 	-webkit-transform: translateX(-50%);
 	width: 898px;
 }
 .gsjbuyinfo{
    display: -webkit-box;
    width: 100%;
    margin-top: 120px;
}
.gsjbuyinfo li{
	padding: 0 20px;
    -webkit-box-flex: 1
}
.gsjbuyinfo li:hover{
	cursor: pointer;
}
.gsjbuyinfo .text{
	font-size:14px;
	color: #37474f;
	margin-top: 4px;
	font-weight: 600;
	margin-left: -2px;
	
}
.gsjbuyinfo .text:hover{
	color: #B70000;
	cursor: pointer;
}
</style>
