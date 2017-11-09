<template>
  <div class="nav">
    <ul>
      <li class="active" @click="jump(1)">
      	<span style="position: relative;top: 4px;">
      		人物志
      	</span>
      	<img src="../../static/shouye/line.png" class="line"/>
      </li>  
      <li class="active" @click="jump(2)">
      	风物志
      	<img src="../../static/shouye/line.png" class="line"/>
      </li>
      <li class="active" @click="jump(3)">
      	故事集
      	<img src="../../static/shouye/line.png" class="line"/>
      </li>
      <li class="active" @click="jump(4)">
      	大事纪
      	<img src="../../static/shouye/line.png" class="line"/>
      </li>
      <li class="active" @click="jump(5)">
      	关于苍穹榜
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  		}else if(num==4){
  			$('body,html').animate({ scrollTop: 2180 }, 200);
  		}else if(num==5){
  			$('body,html').animate({ scrollTop: 3044 }, 200);
  		}
  	
  	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
	width: 251px;
	height: 391px;
	background:url(../../static/shouye/juanzhou.png) no-repeat;
	background-size:cover;
	position: absolute;
	left: 70%;
	z-index: 2;
	top: 40px;
}
.nav ul{
	overflow: hidden;
	width: 100%;
	height: 100%;
	position: relative;
	top: 16px;
}
.nav li{
	width: 100%;
	height: 20%;
	text-align: center;
	font-size: 24px;
	color: #37474f;
	box-sizing: border-box;
	line-height: 1.6;
}
.nav .line{
	width: 80%;
}
.active:hover{
	color: #b70000;
	cursor: pointer;
}
</style>
