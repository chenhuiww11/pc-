<template>
  <div class="erjinva">
      <ul class="innav">
      	<li :class="{'active': index==0}" @click="jump(0)">
      	   <span :class="{'textactive': index==0}">
      	   	 首页
      	   </span>
      	</li>
      	<li :class="{'active': index==1}" @click="jump(1)">
      		<span :class="{'textactive': index==1}">
      			人物志
      		</span>
      	</li>
      	<li :class="{'active': index==2}" @click="jump(2)">
      		<span :class="{'textactive': index==2}">
      			  风物志
      		</span>
      	</li>
      	<li  :class="{'active': index==3}" @click="jump(3)">
      	    <span  :class="{'textactive': index==3}">
      	    	故事集
      	    </span>
      	   
      	</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props : ['index'],
  data () {
    return {
    }
  },
  methods: {
  	jump(num){
  		if(num==0){
  			this.$router.push({ name: 'start'});
  		}else if(num==1){
  			this.$router.push({ name: 'allrwz'});
  		}else if(num==2){
  			this.$router.push({ name: 'allfwz'});
  		}else if(num==3){
  			this.$router.push({ name: 'gushiji'});
  		}
  	
  	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .erjinva{
   	width: 100%;
   	height: 123px;
   	background: url(../../static/gushiji/nav.png);
   }
   .innav{
   	width: 840px;
   	height: 100%;
   	margin: 0 auto;
   	overflow: hidden;
   }
   .innav li{
   	  width: 25%;
   	  height: 100%;
   	  line-height: 98px;
   	  text-align: center;
   	  font-size: 20px;
   	  color: #37474f;
   	  float: left;
   }
   .innav li:hover{
   		color: #B70000;
   		cursor: pointer;
   }
   .innav li.active{
   	color: #B70000;
   }
   .innav .textactive{
   	padding-bottom: 10px;
   	border-bottom:2px solid #B70000;
   }
</style>
