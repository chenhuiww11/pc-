<template>
	
  <el-carousel :interval="5000" arrow="always" :autoplay="false" trigger="click" height="580px">
    <el-carousel-item v-for="item in imglisttwo" :key="4">
      <img :src="item.src" class="pic" @click="jump(item.index)"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imglisttwo:[
      	{'src':'./static/shouye/1.jpg',
         'index':'0',
        },
      ],
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
  	setTimeout(function(){
  		self.imglisttwo=self.imglist
  	},2000)
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
 .people .el-carousel__container{
  	height: 580px;
  	text-align: center;
  }
  .people .pic{
  	width: 889px;
  	height: 580px;
  	
  }
 .people .el-icon-arrow-right:before{
  	content: '';
  }
 .people .el-icon-arrow-left:before{
  	content: '';
  }
 .people .el-carousel__arrow{
  	background: url(../../static/shouye/left.png);
  	width: 108px;
  	height: 72px;
  	border-radius: 0;
  }
  .people .el-carousel__arrow:hover{
  	background: url(../../static/shouye/leftactive.png);
  }
  .people .el-carousel__arrow--right{
  	transform: rotate(180deg);
  	-webkit-transform: rotate(180deg);;
  }
 .people .carousel__arrow--left {
    left: 4px;
    }
   .people  .el-carousel__button{
    	display: none;
    }
</style>
