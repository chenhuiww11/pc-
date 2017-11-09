<template>
	
  <el-carousel :interval="5000" arrow="always" :autoplay="false">
    <el-carousel-item v-for="item in imglisttwo" :key="2">
      <img :src="item.src" class="pic"  @click="jump(item.index)"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imglisttwo:[
          {'src':'./static/shouye/fw1.png',
         'index':'2',
        },
      ],
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
  	setTimeout(function(){
  		self.imglisttwo=self.imglist
  	},2000)
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
  .fwzhi .el-carousel__container{
  	height: 587px;
  	text-align: center;
  }
  .fwzhi .pic{
  	width: 900px;
  	height: 514px;
  	
  }
  .fwzhi .el-icon-arrow-right:before{
  	content: '';
  }
  .fwzhi .el-icon-arrow-left:before{
  	content: '';
  }
  .fwzhi .el-carousel__arrow{
  	background: url(../../static/shouye/left.png);
  	width: 108px;
  	height: 72px;
  	border-radius: 0;
  }
  .fwzhi .el-carousel__arrow:hover{
  	background: url(../../static/shouye/leftactive.png);
  }
  .fwzhi .el-carousel__arrow--right{
  	transform: rotate(180deg);
  	-webkit-transform: rotate(180deg);;
  }
  .fwzhi .carousel__arrow--left {
    left: 4px;
    }
   .fwzhi .el-carousel__button{
    	display: none;
    }
</style>
