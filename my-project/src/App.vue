<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted(){ 
   
   	var cc=window.location.href.split('#')[1];
   	if(cc=="/002"){
   		window.location.href=window.location.href.split('#')[0]
   	}else if(cc=="/001"){ 
   		window.location.href=window.location.href.split('#')[0]
   	}
   
   }

}
</script>

<style>
@media handheld and (min-width:360px),screen and (max-width:1361px){
	body,html{
		-webkit-backface-visibility: hidden;
	}
		#app .imgpic{
			    width: 400px;
			}
		#app .gsjbuyinfo{
			  margin-top: 6%;
		}
}
</style>
