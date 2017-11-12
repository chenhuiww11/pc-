<template>
	
  <!--<el-carousel :interval="5000" arrow="always" :autoplay="false">
    <el-carousel-item v-for="item in imglisttwo" :key="2">
      <img :src="item.src" class="pic"  @click="jump(item.index)"/>
    </el-carousel-item>
  </el-carousel>-->
  <div class="swiper-container swiper-container-c">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imglist">
            	 <img :src="item.src" class="pic swiper-lazy" @click="jump(item.index)"/>
            	 <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
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
        {'src':'./static/shouye/fw1.png',
         'index':'2',
        },
        {'src':'./static/shouye/fw2.png',
         'index':'4'},
        {'src':'./static/shouye/fw3.png',
         'index':'3',},
        {'src':'./static/shouye/fw4.png',
         'index':'0',},
        {'src':'./static/shouye/fw5.png',
         'index':'1',},
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
   		preloadImages: false,
        // Enable lazy loading
        lazyLoading: true,
        loop: true
    	});
  },
  methods: {
  	jump(num){
  		this.$router.push({ name: 'fengwuzhi',params: {page: num}});
    		window.location.reload();
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
  	-webkit-transform: rotate(180deg);;
  }
  .fwzhi .swiper-slide{
  	text-align: center;
  }
</style>
