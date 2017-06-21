import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Firstsy from '@/components/Firstsy'
import Welcome from '@/components/Welcome'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
    	path: '/index',
    	name: 'Index',
    	component: Index,
    	children:[{
    		path: 'firstsy',
    		name: 'Firstsy',
    		component: Firstsy,
    		children:[{
    			path: 'welcome',
    			name: 'Welcome',
    			component: Welcome 
    		},{
    			path: 'about',
    			name: 'About',
    			component: About
    		},{
    			path: 'goods/class/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'goods/brand/list',
    			name: 'About',
    			component: About
    		},{
    			path: 'goods/goodsCommon/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'goods/spec/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'goods/newgoods/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'goods/type/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'goods/piclib/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'business/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'business/balance',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'shopPointsGoods/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'shopPointsOrder/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'shopPointsOrder/shipments',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platform/sellIndex',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platform/sellList',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'storeGoodsClass/index',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platformOrder/shipments',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platformOrder/shipmentSetting',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platform/transport/index',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platform/trade/reviewIndex',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'consult/index',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platformOrder/refundOrderList',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platformOrder/returnOrderList',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platform/report/clickIndex',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platform/report/orderIndex',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platformOrder/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platform/coupon/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platform/report/storeGoodsSales',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platformmansong/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'platformOrder/barterOrderList',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'code/index',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'shopPMansong/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'goodsGroup/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'goodsColumn/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'goodsBrand/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'adv/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'advPosition/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'couponclass/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'coupon/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'bill/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'mianYou/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'mianyouRule/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'bill/orderBillList',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'activity/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'setting/express/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'setting/points/index',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'setting/bill/index',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'druid/',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'syslog/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'menu/class/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'setting/admin/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'role/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'shopSellerMenu/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'website/class/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'website/document/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'website/article/index',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'website/navigation/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'website/index/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'orders/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'orders/returnList',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'trade/consult/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'trade/evalGoods/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'member/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'member/grade/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'branch/list',
    			name: 'Welcome',
    			component: Welcome
    		},{
    			path: 'branch/balance',
    			name: 'Welcome',
    			component: Welcome
    		}]
    	}]
    }
  ]
})
