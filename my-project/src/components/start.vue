<template>
  <div id="start">
  	<img src="../../static/shouye/shouye1.jpg"/>
  	<nava></nava>
  	<!--人物志-->
  	<div class="people">
  		 <div class="renwu">
  			  <silder></silder>
  			</div>
  	</div>
  	<!--风物志-->
  	<div class="fwzhi" v-if="loading">
  		<div class="fwz">
  			  <fwsilder></fwsilder>
  			</div>
  	</div>
  	<!--大事纪-->
  	<img src="../../static/shouye/dsj.png" class="dsj" v-if="loading"/>
  	<!--苍穹榜-->
  	<img src="../../static/shouye/cqb.jpg" class="cqb" v-if="loading"/>
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
      loading:false,
      height:$(document).height()/2,
    }
  },
	mounted(){
		console.log(this.height)
		window.addEventListener('scroll', this.handleScroll);
  },	
  methods: {
  	handleScroll () {
    	this.scrolled = window.scrollY > 0;
    	if(window.scrollY>this.height){
    		this.loading=true;
//  			setTimeout(function(){
//				var height=$('#app').height()-180
//				$('#start').css('height',height+'px')
//		},1000)
    	}
    	if(window.scrollY>1100){
    		$('.navw').fadeIn(500);
    	}else{
    		$('.navw').fadeOut(500);
    	}
    },
  	back(){
  	$('body,html').animate({ scrollTop: 0 }, 200);
  	}
  },
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
		transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
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
