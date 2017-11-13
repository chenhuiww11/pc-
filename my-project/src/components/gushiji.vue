<template>
  <div class="gushiji">
     <ejnav :index="index"></ejnav>
     <div class="book">
        <img src="../../static/gushiji/gs.jpg"/>
        <div class="buy">
        	<img src="../../static/gushiji/gsjbuy.png" class="picbuy"/>
        	<ul class="gsjbuyinfo">
		        <li @click="outjump('https://item.jd.com/12199337.html#product-detail')">
		            <img src="../../static/gushiji/gsjjd.png" alt="">
		        </li>
		        <li @click="outjump('http://product.dangdang.com/25173407.html')">
		            <img src="../../static/gushiji/gsjdd.png" alt="">
		        </li>
		        <li @click="outjump('https://detail.tmall.com/item.htm?spm=a1z10.1-b-s.w12088739-16874648415.1.6f085b3eZvoSK&id=558953646804&rn=6ea0f05f10e1a57e79f6b5cb10649ed6&abbucket=15')">
		            <img src="../../static/gushiji/gsjtm.png" alt="">
		        </li>
		    </ul>
        </div>
     </div>
     <img src="../../static/gushiji/banquan.png" class="banquan"/>
  </div>
</template>

<script>
import ejnav from '@/components/ejnav'	
export default {
  name: 'HelloWorld',
  components: {
			ejnav
		},
  data () {
    return {
    	index:'3'
    }
  },
  mounted(){
	$('.gushiji').css('height',window.innerHeight)
  },
  methods: {
    outjump(val){
        window.location.href = val;
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .gushiji{
 	background: #fef6e8 url(../../static/gushiji/bg.jpg) no-repeat 0 98px;
 	width: 100%;
 	height: 100%;
 	background-size:cover;
 	overflow: hidden;
 }
 .book{
 	width: 809px;
 	height: 405px;
 	position: relative;
 	top: 40%;
 	left: 50%;
 	transform: translate(-50%,-50%);
 	-webkit-transform: translate(-50%,-50%);
 }
 .banquan{
 	position: fixed;
 	bottom: 20px;
 		left: 50%;
 	transform: translateX(-50%);
 	-webkit-transform: translateX(-50%);
 	width: 898px;
 }
 .buy{
 	position: absolute;
    right: 72px;
    bottom: 40px;
 }
 .picbuy{
 	width: 100px;
 	margin-bottom: 20px;
 	position: relative;
 	left: 28px;
 }
 .gsjbuyinfo{
    display: -webkit-box;
    width: 374px;
}
.gsjbuyinfo li{
    padding: 0 30px;
    -webkit-box-flex: 1
}
.gsjbuyinfo li:hover{
	cursor: pointer;
}
</style>
