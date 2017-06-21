<template>
	<div class="firstsy">
		<div class="content-left">
			<ul>
				<router-link :to="'/index/firstsy'+itemseconed.murl" active-class="active"  tag="li" v-for="(itemseconed,index) in abc" key="itemseconed.id" exact>
					<span class="circle"></span>
					{{itemseconed.mname}}
				</router-link>
			</ul>
			<div class="banquan">版权所有</div>
		</div>
		<div class="content-right">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		mounted:function(){
			this.$router.push("/index/firstsy/welcome")
		},
		name:'Firstsy',
		data(){
			return {
				j:0,
				oHeight:200
			}
		},
		props:["abc"],
		methods:{
			addClasss:function(a){
				this.j = a;
			}
		}
	}
</script>
<style>
	.firstsy{
		height:100%;
		text-align: left;
	}
	.content-left{
		float: left;
		width:161px;
		height:100%;
		line-height: 20px;
		color:#7394A4;
		font-size: 14px;
		text-align: left;
		padding-top: 10px;
		background:url(img/left.png) repeat-y left top;
		position:relative;
		box-sizing:border-box;
	}
	.content-left li{
		padding:4px 12px 4px 29px;
		background: url(img/bg_position.png) no-repeat 0 -170px;
		cursor:pointer;
	}
	.content-left li.active{
		color: #31444D;
		background:url(img/bg_position.png) no-repeat -161px -170px;
	    background-color: #CBE9F3;
	}
	.banquan{
		width:155px;
		position:absolute;
		bottom:5px;
		left:5px;
		padding-top: 6px;
	    border-top: dashed 1px #CCC;
		color:#555;
		font-size: 12px;
	}
	.content-right{
		overflow: auto;
	}
</style>