<template>
  <div id="app">
  	<img src="../static/shouye/shouye.png"/>
  	<div class="people">
  			<silder></silder>
  	</div>
    <!--<router-view/>-->
  </div>
</template>

<script>
import silder from '@/components/silder'	
export default {
  name: 'app',
  components: {
			silder
		},
}
</script>

<style>
	#app{
		background: #f0e5d1;
	}
	.people{
		margin-top: 20px;
		width: 90%;
		margin: 0 auto;
	}
</style>
