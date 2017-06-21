<template>
	<div class="welcome">
		<heades :qwe="msg.header_msg" :uio="msg.arr"></heades>
		<div class="info-panel">
			<div class="member">
				<div class="zjwtop">
					<div class="ico">
						<i></i>
						<span>{{msg.member}}</span>
					</div>
					<div class="name">
						会员
					</div>
					<h5>新增会员</h5>
				</div>
				<div class="zjwbottom">
					<ul>
						<li>
							<a href="javascript:;">本周新增</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="member">
				<div class="zjwtop">
					<div class="ico">
						<i></i>
						<span>{{msg.goods}}</span>
					</div>
					<div class="name">
						商品
					</div>
					<h5>新增商品/品牌申请审核</h5>
				</div>
				<div class="zjwbottom">
					<ul>
						<li class="week_add_product" style="width:33.33%;display:inline-block;margin-left:-3px;">
							<a href="javascript:;">本周新增<span>{{msg.week_add_product}}</span></a>
						</li>
						<li class="zjwproduct_down" style="width:33.33%;display:inline-block;margin-left:-3px;">
							<a href="javascript:;">商品下架<span>{{msg.product_down}}</span></a>
						</li>
						<li style="width:33.33%;display:inline-block;margin-left:-3px;">
							<a href="javascript:;">品牌申请</a>
						</li>	
					</ul>
				</div>
			</div>
			<div class="member">
				<div class="zjwtop">
					<div class="ico">
						<i></i>
						<span>3</span>
					</div>
					<div class="name">
						交易
					</div>
					<h5>交易总信息</h5>
				</div>
				<div class="zjwbottom">
					<ul>
						<li style="width:33.33%;display:inline-block;margin-left:-3px;">
							<a href="javascript:;" style="font-size:6px;height:28px;">会员总充值金额:</br><span>111</span></a>
						</li>
						<li style="width:33.33%;display:inline-block;margin-left:-3px;">
							<a href="javascript:;" style="font-size:6px;height:28px;">平台客户总数:</br><span>111</span></a>
						</li>
						<li style="width:33.33%;display:inline-block;margin-left:-3px;">
							<a href="javascript:;" style="font-size:6px;height:28px;">商家总交易金额:</br><span>111</span></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import heades from '@/components/zjwpublic'
	export default{
		mounted:function(){
			this.$http.get("/esmall-admin/statistics",{emulateJSON:true}).then(function(res){
				var data = JSON.parse(res.bodyText);
				this.msg.member = data.member;
				this.msg.week_add_member = data.week_add_member;
				this.msg.store = data.store;
				this.msg.brand_apply = data.brand_apply;
				this.msg.goods = data.goods;
				this.msg.product_down = data.product_down;
				this.msg.week_add_product = data.week_add_product;
				this.msg.store_expired = data.store_expired;
				this.msg.store_expire = data.store_expire;
			})
		},
		name:'Welcome',
		data(){
			return {
				msg:{
					member:0,
					week_add_member:0,
					store:0,
					brand_apply:0,
					goods:0,
					product_down:0,
					week_add_product:0,
					store_expired:0,
					store_expire:0,
					header_msg:'系统信息',
					arr:[]
				}
			}
		},
		components:{heades}
	}
</script>
<style>
	.welcome{
		padding:9px 20px 20px;
	}
	/*.welcome h1{
		width:100%;
		margin-top: 10px;
		text-align: left;
		color:#333;
		line-height: 38px;
		font-weight: bolder;
		font-size: 18px;
		background:url(img/bg-fixed.png) repeat-x center bottom;
	}*/
	.info-panel{
		margin-top: 50px;
		text-align: center;
	}
	.member{
		display: inline-block;
		width:31%;
		margin:30px 2% 0 0;
		border: 1px solid #eee;
		box-sizing:border-box;
		overflow:hidden;
	}
	.member:hover{

	}
	.zjwtop{
		padding:20px 0;
	}
	.ico{
		width:60px;
		height:46px;
		padding-top: 14px;
		margin:0 auto;
		border-radius:50%;
		background: #4c9cd0;
		position: relative;
	}
	.ico i{
		display: block;
		width:32px;
		height:32px;
		margin: 0 auto;
		background:url(img/bg-panel.png) no-repeat;
	}
	.ico span{
	    background-color: #FFF;
	    height: 18px;
	    border-radius: 12px;
	    position: absolute;
	    z-index: 1;
	    top: -4px;
	    left: 40px;
	    font-family: Tahoma;
	    font-size: 11px;
	    line-height: 16px;
	    color: #4c9cd0;
        text-align: center;
        min-width: 8px;
        padding:0 6px;
        border: 1px solid #4c9cd0;
        border-radius: 10px;
        font-weight: bolder;
	}
	.name{
	    font-size: 24px;
	    font-weight: 100;
	    line-height: 30px;
	    color: #4c9cd0;
	    margin: 5px 0 0 0;
	}
	.zjwtop h5{
		font-size: 12px;
	    font-weight: 100;
	    line-height: 20px;
	    color: #999;
	    margin: 5px 0 0 0;
	}
	.zjwbottom{
		border-top: solid 1px #eee;
	}
	.zjwbottom li{
		margin-left:-1px;
		border-left:1px solid #deeffb;
		box-sizing:border-box;
	}
	.zjwbottom li:hover,.zjwbottom li:hover a,.zjwbottom li:hover span{
		background-color: #4c9cd0;
    	color: #FFF;
	}
	.zjwbottom a{
		display: block;
		color:#888;
		font-size: 14px;
		line-height: 20px;
		padding:10px 0;
		margin:0 auto;
		position:relative;
		z-index: 1;
	}
	.zjwbottom a span{
		font-family: Tahoma;
		font-weight: bolder;
	    font-size: 11px;
	    line-height: 16px;
	    text-align: center;
	    display: inline-block;
	    height: 16px;
	    color:#4c9cd0;
	}
	.zjwbottom .zjwproduct_down a{
		color:#f26c4f;
	}
	.zjwbottom .zjwproduct_down a:hover,.zjwbottom .zjwproduct_down a:hover span{
		color:#fff;
		background:#f26c4f;
	}
	.zjwbottom .zjwproduct_down span{
		position:absolute;
		top:-9px;
		right:-10px;
		color:#fff;
		background:#f26c4f;
		border:1px solid #fff;
		padding:0 4px;
		border-radius:9px;
	}
	.week_add_product a span{
		position:absolute;
		top:-9px;
		right:-10px;
		color:#fff;
		background-color: #4c9cd0;
		border:1px solid #fff;
		padding:0 4px;
		border-radius:9px;
	}
</style>