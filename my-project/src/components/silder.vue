<template>

  <!--<el-carousel :interval="5000" arrow="always" :autoplay="false" trigger="click" height="580px">
    <el-carousel-item v-for="item in imglisttwo" :key="4">
      <img :src="item.src" class="pic" @click="jump(item.index)"/>
    </el-carousel-item>
  </el-carousel>-->
  <div class="swiper-container swiper-container-a">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imglist">
            	 <div class="move" @click="jump(item.index)"></div>
            	 <img :src="item.src" class="pic swiper-lazy" @click="jump(item.index)"/>
            	 <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imglist:[
        {'src':'./static/shouye/1.jpg',
         'index':'0',
        },
        {'src':'./static/shouye/2.jpg',
         'index':'1',
        },
        {'src':'./static/shouye/3.jpg',
         'index':'2'},
        {'src':'./static/shouye/4.jpg',
         'index':'3'},
        {'src':'./static/shouye/5.jpg',
         'index':'4'},
        {'src':'./static/shouye/6.jpg',
         'index':'5'},
        {'src':'./static/shouye/7.jpg',
         'index':'6'},
        {'src':'./static/shouye/8.jpg',
         'index':'7'},
        {'src':'./static/shouye/9.jpg',
         'index':'8'},
         {'src':'./static/shouye/10.jpg',
         'index':'9'},
      ]
    }
  },
  mounted(){
  	var self=this;
  	 var swiper = new Swiper('.swiper-container-a', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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
  		this.$router.push({ name: 'renwuzhi',params: {page: num}});
    		window.location.reload();
  	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .people .pic{
  	width: 889px;
  	height: 580px;
  }
 .people .swiper-button-next{
  	background: url(../../static/shouye/left.png);
  	width: 108px;
  	height: 72px;
  	border-radius: 0;
  }
  .people .swiper-button-next:hover{
  	background: url(../../static/shouye/leftactive.png);
  }
  .people .swiper-button-prev{
  	background: url(../../static/shouye/left.png);
  	width: 108px;
  	height: 72px;
  	border-radius: 0;
  }
  .people .swiper-button-prev:hover{
  	background: url(../../static/shouye/leftactive.png);
  }
  .people .swiper-button-next{
  	transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
  	-webkit-transform: rotate(180deg);
  }
  .people .swiper-slide{
  	text-align: center;
  }
  .people .move{
  	position: absolute;
  	bottom: 22%;
    left: 21%;
  	z-index: 2;
  	width: 100px;
  	height: 28px;
  	background: url(../../static/shouye/xq.png);
  	background-size:contain;
  }
  .people .move:hover{
  	background: url(../../static/shouye/xq1.png);
  	cursor: pointer;
  }
</style>
