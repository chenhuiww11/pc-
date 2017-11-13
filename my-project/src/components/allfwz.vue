<template>
  <div class="gushiji">
     <ejnav :index="index"></ejnav>
     <div class="book">
        <img src="../../static/fengwuzhi/fengwuzhi.png" class="imgpic"/>
        <div class="buy">
        	<ul class="gsjbuyinfo">
		        <li v-for="item in imglist" @click="jump(item)">
              <div class="gsjbuyinfoimg">
                <div class="gsjbuyinfoline">
                  <img :src="item.datu" alt="">
                </div>
              </div>
                <p class="tit">{{item.tit}}</p>
		            <p class="text">{{item.info}}</p>
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
    	index:'2',
    	imglist:[
    	 {
    	   	info:'天罗大陆',
    	  	datu:'./static/fengwuzhi/mufu.png',
    	  	inde:'3',
          tit:'牧府'
    	  },
    	   {
    	   	info:'武境',
    	  	datu:'./static/fengwuzhi/wujin.png',
    	  	inde:'5',
           tit:'武境'
    	  },
    	    {
    	   	info:'无尽火狱',
    	  	datu:'./static/fengwuzhi/huoyu.png',
    	  	inde:'4',
            tit:'无尽火域'
    	  },
    	   {
    	  	info:'北苍大陆',
    	  	datu:'./static/fengwuzhi/cangqiong.png',
    	  	inde:'1',
           tit:'苍穹宫'
    	  },
    	   {
    	   	info:'南明大陆',
    	  	datu:'./static/fengwuzhi/chijiao.png',
    	  	inde:'2',
           tit:'池教'
    	  },

    	],

    }
  },
  mounted(){
	$('.gushiji').css('height',document.body.scrollHeight)
  },
  methods: {
    jump(val){
//  	console.log(val.inde)
    	this.$router.push({ name: 'fengwuzhi',params: {page: val.inde}});
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
 	width: 1200px;
 	height: 405px;
 	position: relative;
 	text-align: center;
 	top: 40%;
 	left: 50%;
 	transform: translate(-50%,-50%);
 	-webkit-transform: translate(-50%,-50%);
 	overflow: hidden;

 }
 .imgpic{
 	width: 537px;
 }
 .banquan{
 	position: fixed;
 	bottom: 20px;
 		left: 50%;
 	transform: translateX(-50%);
 	-webkit-transform: translateX(-50%);
 	width: 898px;
 }
 .gsjbuyinfo{
    display: -webkit-box;
    width: 100%;
    margin-top: 120px;
}
.gsjbuyinfo li{
	padding: 0 20px;
    -webkit-box-flex: 1
}
.gsjbuyinfo li:hover{
	cursor: pointer;
}
.gsjbuyinfoimg{
  padding: 2px;
  border: 1px solid #c3b7ae;
}
.gsjbuyinfoline{
  overflow: hidden;
}
 .gsjbuyinfoline img{
   display: block;
   transition: transform 1s;
   -webkit-transition: transform 1s; /* Safari */
   -moz-transition: transform 1s;
   -o-transition: transform 1s;
 }
 .gsjbuyinfo li:hover .gsjbuyinfoimg{
   border: 1px solid #b70000;
 }
 .gsjbuyinfo li:hover .gsjbuyinfoline img{
   transform:scale(1.2,1.2);
   -webkit-transform:scale(1.2,1.2);
   -moz-transform:scale(1.2,1.2);
   -o-transform:scale(1.2,1.2);
 }
.gsjbuyinfo .text{
	font-size:14px;
	color: #37474f;
	margin-top: 4px;
	font-weight: 600;
  text-align: center;
}
 .gsjbuyinfo .tit{
   color: #893832;
  font-size: 16px;
   font-weight: bold;
   margin: 10px 0 5px;
   text-align: center;
}
 .gsjbuyinfo li:hover .text,.gsjbuyinfo li:hover .tit{
	color: #B70000;
	cursor: pointer;
}
</style>
