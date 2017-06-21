<template>
	<div class="index">
		<div class="headerc">
			<div class="headers">
				<div class="header-left"></div>
				<div class="header-right">
					<ul>
						<li class="icon_user">
							您好&nbsp;:&nbsp;<strong>admin</strong>
						</li>
						<li>修改密码</li>
						<li>退出</li>
						<li>商城首页</li>
					</ul>
				</div>
				<div class="header-content">
					<ul>
						<li router-link="'/index/firstsy'" v-for="(item,index) in list" @click="addClass(index)" :class="{active:i==index}"><a><span>{{item.mname}}</span></a></li>
					</ul>
					<div class="loca">
						<strong style="font-weight:700;">您的位置:</strong>
						<span>&nbsp;{{first}}&nbsp;</span>
						<span class="arrow"></span>
						<span>&nbsp;{{second}}&nbsp;</span>
					</div>
				</div>
			</div>
		</div>
		<div class="contentc" :style="{height:oHeight + 'px'}">
			<!-- <div class="content-left" :style="{height:oHeight + 'px'}">
				<ul>
					<li v-for="(itemseconed,index) in seconedList" @click="addClasss(index)" :class="{active:j==index}">
						<span class="circle"></span>
						{{itemseconed.mname}}
					</li>
				</ul>
				<div class="banquan">版权所有</div>
			</div>
			<div class="content-right" :style="{height:oHeight + 'px'}"></div> -->
			<router-view :abc="seconedList"></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		mounted:function(){
			let oHeight = document.body.clientHeight-91;
			this.oHeight = oHeight;
			this.$http.get('/esmall-admin/getMenuJSON',{},{emulateJSON:true}).then((res)=>{
				this.list = res.data;
				this.first = this.list[0].mname;
				this.second = this.list[0].menuClassList[0].mname;
				this.seconedList = this.list[0].menuClassList;
			})
		},
		name:'index',
		data () {
			return {
				list:[],
				seconedList:[],
				i:0,
				j:0,
				first:"",
				second:"",
				oHeight:200
			}
		},
		methods:{
			addClass:function(a){
				this.i = a;
				this.first = this.list[a].mname;
				this.second = this.list[a].menuClassList[0].mname;
				this.seconedList = this.list[a].menuClassList;
				this.$router.push("/index/firstsy"+this.list[a].menuClassList[0].murl);
			}
		}
	}
</script>
<style>
	.index{
		min-width: 1110px;
	}
	.headerc{
		background:url(img/body_bg.png) repeat-x 0 0;
	}
	.headers{
		width:100%;
		height:91px;
		background:url(img/bg_position.png) no-repeat 0 0;
	}
	.header-left{
		float:left;
		width:158px;
		height:100%;
		background:url(img/logo.png) no-repeat;
	}
	.header-content{
		float:left;
	}
	.header-content ul{
		height: 42px;
		margin-top: -10px;
		margin-left: 4px;
	}
	.header-content ul li{
		float:left;
		height:42px;
		padding:0 4px;
		margin-right:5px;
		font-size: 14px;
		font-weight: 700;
		line-height: 20px;
		background: url(img/button_bg.png) no-repeat right -84px;
		cursor:pointer;
	}
	.header-content ul li a{
		display: block;
		height:42px; 	
		padding-right:13px;
		margin-left: -5px;
		color:#069;
		line-height: 36px;
	}

	.header-content ul li span{
		display: block;
		height:42px;
		padding-left: 11px;
		margin-left: -1px;
	}
	.header-content ul li.active a,.header-content ul li:hover.active a{
		background: url(img/button_bg.png) no-repeat right -44px;
	}
	.header-content ul li.active span,.header-content ul li:hover.active span{
		color:#000;
		background:url(img/button_bg.png) no-repeat -3.5px -2px;
	}
	.header-content ul li:hover a{
		background: url(img/button_bg.png) no-repeat right -170px;
	}
	.header-content ul li:hover span{
		color:#000;
		background:url(img/button_bg.png) no-repeat -7px -125px;
	}
	.header-right{
		float:right;
		margin-left: 140px;
		background: url(img/bg_position.png) no-repeat 0px -91px;
	}
	.header-right ul{
		overflow: hidden;
		padding:6px 8px 2px 0px;
	}
	.header-right ul li{
		height: 20px;
		line-height: 20px;
		margin-left: 8px;
		padding-left: 8px;
		color:#069;
		font-size: 12px;
		background:url(img/bg_position.png) no-repeat scroll -638px -97px;
		display: inline;
		float:left;
	}
	.header-right .icon_user{
		padding-left: 24px;
		line-height: 20px;
		background: url(img/bg_position.png) no-repeat scroll -350px -100px;
	}
	.loca{
		text-align: left;
		line-height: 30px;
		font-size: 12px;
		text-indent: 12px;
		color:#7292A4;
	}
	.loca span{
		display: inline-block;
		text-indent: 0;
	}
	.arrow{
		background: url(img/bg_position.png) no-repeat -50px -155px;
		width:4px;
		height:8px;
	}
	.contentc{
		width: 100%;
		overflow:hidden;
	}
</style>