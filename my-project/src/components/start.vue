<template>
  <div id="start">
  	<img src="../../static/shouye/shouye1.jpg"/>
  	<nava></nava>
  	<!--人物志-->
  	<div class="people">
  		 <div class="renwu">
  			  <silder v-if="one"></silder>
  			</div>
  	</div>
  	<!--风物志-->
  	<div class="fwzhi" v-if="loading">
  		<div class="fwz">
  			  <fwsilder v-if="one"></fwsilder>
  			</div>
  	</div>
  	<!--大事纪-->
  	<a name="002" id="002" ><img src="../../static/shouye/dsj.png" class="dsj" id="dsj" v-if="loading"/></a>
  	<!--苍穹榜-->
  	<a name="001" id="001" ><img src="../../static/shouye/cqb.jpg" class="cqb" v-if="loading"/></a>
    <!--<router-view/>-->
    <div class="navw" @click="back">
    	<img src="../../static/shouye/top.png"/>
    </div>
  </div>
</template>

<script>
import silder from '@/components/silder'
import nava from '@/components/nav'
import fwsilder from '@/components/fwsilder'
export default {
  name: 'app',
  components: {
			silder,
			nava,
			fwsilder
		},
	data () {
    return {
      loading:true,
      height:$(document).height()/2,
      count:0,
      one:false
    }
  },
	mounted(){
		window.addEventListener('scroll', this.handleScroll);
    this.$nextTick(()=>{
      setTimeout(()=>{
        console.log($('.dsj').offset().top)
        window.sessionStorage.setItem('dsjscrollheight',$('.dsj').offset().top+150)
        window.sessionStorage.setItem('cqbscrollheight',$('.cqb').offset().top+50)
      },0)
    })
     var _this = this
            let imgs = document.querySelectorAll('img')
            Array.from(imgs).forEach((item)=>{
                let img = new Image()
                img.onload = ()=>{
                    this.count++
                }
                img.src=item.getAttribute('src')
            })
  },
  methods: {
  	handleScroll () {
      let scrolled = window.scrollY || document.documentElement.scrollTop || 0
    	if(scrolled > this.height){
    		this.loading=true;
    	}
    	if(scrolled>1100){
    		$('.navw').fadeIn(500);
    	}else{
    		$('.navw').fadeOut(500);
    	}
    },
  	back(){
  	$('body,html').animate({ scrollTop: 0 }, 200);
  	}
  },
   watch:{
	        count (val,oldval) {
	        	console.log(val)
	        	var self=this;
	            if(val >= 8){
	                self.one=true
//	                //然后可以对后台发送一些ajax操作
	            }
	        }
        }
}
</script>

<style>
	#app{
		background: url(../../static/shouye/bg.png);
		position: relative;
		overflow: hidden;
	}

	.people{
		width: 100%;
		position: relative;
		background:url(../../static/shouye/renwu1.png) no-repeat;
		background-size:100%;
		min-height: 580px;
		box-sizing: border-box;
		padding-top: 25%;

	}
	.title{
		position: absolute;
		left: 50%;
		margin-left: -268px;
		/*transform: translateX(-50%);
		-webkit-transform: translateX(-50%);*/
		top: 280px;
		width: 537px;
	}
	.renwu{
		width: 1200px;
		height: 580px;
		margin: 0 auto;
	}
	.fwzhi{
		width: 100%;
		position: relative;
		background:url(../../static/shouye/fengwu_02.jpg) no-repeat;
		background-size:100%;
		min-height: 500px;
		top: -170px;
		box-sizing: border-box;
		padding-top: 36%;
	}
	.fwz{
		width: 1200px;
		height: 514px;
		margin: 0 auto;
	}
	.dsj{
		position: relative;
		/*top: -170px;*/
	}
	.cqb{
		position: relative;
		/*top: -170px;*/
	}
	.navw{
	position: fixed;
	top: 80%;
	right: 10px;
	width:44px;
	display: none;
	z-index: 33;
}
</style>
