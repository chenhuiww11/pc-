<template>

  <!--<el-carousel :interval="5000" arrow="always" :autoplay="false">
    <el-carousel-item v-for="item in imglisttwo" :key="2">
      <img :src="item.src" class="pic"  @click="jump(item.index)"/>
    </el-carousel-item>
  </el-carousel>-->
  <div class="swiper-container swiper-container-c">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imglist">
            	 <div class="move" v-bind:style="{ left: item.left,bottom:item.bottom}" @click="jump(item.index)"></div>
            	 <img :src="item.src" class="pic" @click="jump(item.index)"/>
            	<!-- <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
            </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-nexta"></div>
        <div class="swiper-button-prev swiper-button-preva"></div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imglist:[
        {'src':'./static/shouye/fw1-min.png',
         'index':'2',
         'left':'58.2%',
         'bottom':'23%',
        },
        {'src':'./static/shouye/fw2-min.png',
         'index':'4',
         'left':'37.5%',
         'bottom':'16%',
         },
        {'src':'./static/shouye/fw3-min.png',
         'index':'3',
		 'left':'32%',
         'bottom':'42%',
        },
        {'src':'./static/shouye/fw4-min.png',
         'index':'0',
        'left':'61%',
         'bottom':'19%',
        },
        {'src':'./static/shouye/fw5-min.png',
         'index':'1',
        'left':'29.5%',
         'bottom':'43.5%',
        },
      ]
    }
  },
  mounted(){
  		var self=this;
  		var swiper = new Swiper('.swiper-container-c', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-nexta',
        prevButton: '.swiper-button-preva',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
   		observeParents:true,//修改swiper的父元素时，自动初始化swiper
// 		preloadImages: false,
//      // Enable lazy loading
//      lazyLoading: true,
        loop: false
    	});
  },
  methods: {
  	jump(num){
  		var cc=window.location.href.split('#')[0]+'#/fengwuzhi/'+num;
  		window.open(cc)
  		//this.$router.push({ name: 'fengwuzhi',params: {page: num}});
    		//window.location.reload();
  	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .fwzhi .pic{
  	width: 900px;
  	height: 514px;

  }
  .fwzhi .swiper-button-nexta{
  	background: url(../../static/shouye/left.png);
  	width: 108px;
  	height: 72px;
  	border-radius: 0;
  }
  .fwzhi .swiper-button-nexta:hover{
  	background: url(../../static/shouye/leftactive.png);
  }
   .fwzhi .swiper-button-preva{
  	background: url(../../static/shouye/left.png);
  	width: 108px;
  	height: 72px;
  	border-radius: 0;
  }
  .fwzhi .swiper-button-preva:hover{
  	background: url(../../static/shouye/leftactive.png);
  }
  .fwzhi .swiper-button-nexta{
  	transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }
  .fwzhi .swiper-slide{
  	text-align: center;
  }
  .fwzhi .move{
  	position: absolute;
  	bottom: 22%;
    left: 21%;
  	z-index: 2;
  	width: 100px;
  	height: 28px;
  	background: url(../../static/shouye/xq.png);
  	background-size:contain;
  }
  .fwzhi .move:hover{
  	background: url(../../static/shouye/xq1.png);
  	cursor: pointer;
  }
</style>
