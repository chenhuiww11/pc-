<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',


}
</script>

<style>
@media handheld and (min-width:360px),screen and (max-width:1361px){
		#app .imgpic{
			    width: 400px;
			}
		#app .gsjbuyinfo{
			  margin-top: 6%;
		}
}
</style>
