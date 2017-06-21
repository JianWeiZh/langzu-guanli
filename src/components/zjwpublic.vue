<template>
	<div class="header">
		<h1>{{qwe}}</h1>
		<ul>
			<li v-for="(item,index) in uio" @click="addClass(index)" :class="{active:i==index}">{{item}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'header',
		data(){
			return {
				i:0
			}
		},
		props:['qwe','uio'],
		methods:{
			addClass:function(a){
				this.i = a;
			}
		}
	}
</script>
<style>
	.header{
		width:100%;
		margin-top: 10px;
		text-align: left;
		color:#333;
		line-height: 38px;
		font-weight: bolder;
		font-size: 18px;
		background:url(img/bg-fixed.png) repeat-x center bottom;
	}
	.header h1,.header ul,.header li{
		display: inline-block;
	}
	.header ul{
		margin-left: 10px;
	}
	.header li{
		line-height: 18px;
		font-size: 14px;
		padding:0 10px;
		font-weight: normal;
	}
	.header li.active{
		color:#4c9cd0;
		border-bottom: 2px solid #4c9cd0;
	}
</style>