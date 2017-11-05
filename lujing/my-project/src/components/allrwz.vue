<template>
  <div class="gushiji">
     <ejnav :index="index"></ejnav>
     <div class="book">
        <img src="../../static/renwuzhi/renwuzhi.png" class="imgpic"/>
        <div class="buy">
        	<ul class="gsjbuyinfo">
		        <li v-for="item in imglist" @click="jump(item)" class="select">
		            <div class="yuan">
		            	<div class="inyuan">
		            			<img :src="item.datu" v-bind:style="{ width: item.width}" class="pic"/>
		            	</div>
		            </div>
		            <p class="text1">{{item.name}}</p>
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
    	index:'1',
    	imglist:[
    	 {
    	   	info:' 邪灵族皇子',
    	   	name:'姜易年',
    	  	datu:'../../static/renwuzhi/jiangyinian1.png',
    	  	inde:'0',
    	  	width:'270px'
    	  },
    	   {
    	   	info:' 牧府大小姐',
    	   	name:'牧云熙',
    	  	datu:'../../static/renwuzhi/muyunxi.png',
    	  	inde:'1',
    	  	width:'190px'
    	  },
    	    {
    	   	info:' 牧府之主',
    	   	name:'牧尘',
    	  	datu:'../../static/renwuzhi/muchen.png',
    	  	inde:'2',
    	  	width:'220px'
    	  },
    	   {
    	  	info:' 洛神族女皇',
    	   	name:'洛璃',
    	  	datu:'../../static/renwuzhi/luoli.png',
    	  	inde:'3',
    	  	width:'210px'
    	  },
    	   {
    	   	info:' 武祖',
    	   	name:'林动',
    	  	datu:'../../static/renwuzhi/lindong.png',
    	  	inde:'4',
    	  	width: '268px',

    	  },
    	   {
    	   	info:'炎帝',
    	   	name:'萧炎',
    	  	datu:'../../static/renwuzhi/xiaoyan.png',
    	  	width: '226px',
    	  	inde:'5',
    	  },
    	   {
    	   	info:'池教大师兄',
    	   	name:'秦渊',
    	  	datu:'../../static/renwuzhi/qingyuan.png',
    	  	inde:'6',
    	  	width: '210px',
    	  },
    	   {
    	   	info:'池教二师兄',
    	   	name:'唐修崖',
    	  	datu:'../../static/renwuzhi/tangxiuya.png',
    	  	inde:'7',
    	  	width: '222px',
    	  },
    	   {
    	   	info:'苍穹宫监察使',
    	   	name:'林雨寒',
    	  	datu:'../../static/renwuzhi/linyuhan.png',
    	  	inde:'8',
    	  	width: '200px',
    	  },
    	   {
    	   	info:'邪灵将',
    	   	name:'魔鲲',
    	  	datu:'../../static/renwuzhi/mokun.png',
    	  	inde:'9',
    	  	width: '200px',
    	  },
    	
    	],
    	
    }
  },
  mounted(){
	$('.gushiji').css('height',document.body.scrollHeight+200);
	$(".select").hover(function(){
		    $(this).children('.yuan').addClass('quan')
		    $(this).children('.text').addClass('red')
		    $(this).children('.text1').addClass('red')
		    $(this).children().children().children().addClass('donghua')
		},function(){
		   $(this).children('.yuan').removeClass('quan')
		    $(this).children('.text').removeClass('red')
		    $(this).children('.text1').removeClass('red')
		    $(this).children().children().children().removeClass('donghua')
		});
  },
  methods: {
    jump(val){
//  	console.log(val.inde)
    	this.$router.push({ name: 'renwuzhi',params: {page: val.inde}});
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .gushiji{
 	background: #fef6e8 url(../../static/gushiji/bg.jpg) no-repeat 0 98px;
 	width: 100%;
 	min-height: 100%;
 	background-size:contain;
 	overflow: hidden;
 	position: relative;
 }
 .book{
 	width: 1200px;
 	height: 405px;
 	position: relative;
 	text-align: center;
 	top: 30%;
 	left: 50%;
 	transform: translate(-50%,-50%);
 	-webkit-transform: translate(-50%,-50%);
 	
 }
 .imgpic{
 	width: 537px;
 }
 .banquan{
 	position: absolute;
 	bottom: 20px;
 		left: 50%;
 	transform: translateX(-50%);
 	-webkit-transform: translateX(-50%);
 	width: 898px;
 }
 .gsjbuyinfo{
    width: 100%;
    overflow: hidden;
    margin-top: 80px;
}
.gsjbuyinfo li{
	width: 20%;
	float: left;
	margin-bottom: 40px;
	    height: 260px;
}
.yuan{
    width: 200px;
    height: 200px;
    border-radius:50%;
    margin: 0 auto;
}
.inyuan{
	width: 96%;
	height: 96%;
	background: url(../../static/renwuzhi/yuan.png) no-repeat;
    background-size: contain;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    top: 4px;
}
.yuan>img{
	width: 270px;
}
.gsjbuyinfo li:hover{
	cursor: pointer;
}
.gsjbuyinfo .text{
	font-size:14px;
	color: #37474f;
	margin-top: 4px;
	font-weight: 600;
}
.gsjbuyinfo .text1{
	font-size: 20px;
	color: #893832;
	margin-top: 10px;
}
.gsjbuyinfo .text1:hover{
	color: #B70000;
	cursor: pointer;
}
.gsjbuyinfo .text:hover{
	color: #B70000;
	cursor: pointer;
}
.quan{
	border: 1px solid #B70000; 
}
.gsjbuyinfo .red{
	color: #B70000;
}
.donghua{
	 -webkit-animation: twinkling2 2s  linear;
}
@-webkit-keyframes twinkling2{   /*透明度由0到1*/
   0%{
				transform:scale(1,1);
    }
    100%{
				transform:scale(1.1,1.1);
    }
}
</style>
