<template>
  <div class="hello" @keyup.enter="login">
    <div class="bgimg">
      <img :src="imgUrl" alt="" width="100%" height="100%" style="display:block;">
    </div>
    <div class="log">
      <div class="dra"></div>
      <div class="log_panel">
        <div class="dra01"></div>
        <ul>
          <li v-text="errormsg" class="errormsg"></li>
          <li>
            <span class="icon_img bgimg01"></span>
            <input v-model="userName" @focus="clearmsg" type="text" placeholder="管理员账号">
          </li>
          <li>
            <span class="icon_img bgimg02"></span>
            <input v-model="passwd" @focus="clearmsg" type="password" placeholder="登录密码">
          </li>
          <li>
            <div class="zjwyzm">
              <span class="icon_img bgimg03"></span>
              <input v-model="passyzm" @focus="clearmsg" type="text" placeholder="验证码">
            </div>
            <div class="zjwyzm">
              <img :src="yzm" alt="" width="108px" height="38px" style="float:left"/>
              <span class="icon_img bgimg04" @click="loadimg"></span>
            </div>
          </li>
          <li>
            <div @click="login" class="logbtn">登录</div>
          </li>
          <li class="remember">
            <el-checkbox class="remember" v-model="remember">记住账号</el-checkbox>
          </li>
        </ul>
      </div>
      <span class="compety">©2015 ES-Mall Inc</span>
    </div>
  </div>
</template>

<script>
export default {
  mounted:function(){
    this.changeimg();
    this.yzm = "/esmall-admin/generateImage?t="+Math.random();
  },
  name: 'hello',
  data () {
    return {
      imgList:["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg"],
      imgUrl:"./static/img/bg1.jpg",
      yzm:"",
      userName:"",
      passwd:"",
      passyzm:"",
      errormsg:"",
      remember:false
    }
  },
  methods:{
    changeimg:function(){
      var i=0;
      var that = this;
      setInterval(function(){
        i++;
        if(i>=that.imgList.length){
          i=0;
        };
        that.imgUrl = "../static/img/" + that.imgList[i];
      },5000);
    },
    loadimg:function(){
      var url = "/esmall-admin/generateImage?t="+Math.random();
      this.yzm = url;
    },
    getObj:function(){
      let obj = {
        username:this.userName,
        password:this.passwd,
        captcha:this.passyzm
      };
      return obj;
    },
    login:function(){
      var that = this;
      var url = "/esmall-admin/loginSubmit";
      this.$http.post(url,this.getObj(),{emulateJSON:true}).then(function(data){
        //console.log(data.bodyText);//.indexOf("验证码错误")
        if(data.bodyText.indexOf("用户名/密码错误")>=0){
          that.errormsg = "用户名/密码错误";
        }else if(data.bodyText.indexOf("验证码错误")>=0){
          that.errormsg = "验证码错误";
        }else{
          that.rememberAdmin();
          that.errormsg = "";
          that.$router.push("/index/firstsy/welcome");
        }
      });
    },
    rememberAdmin:function(){
      if(this.remember){
        localStorage.setItem("admin",this.getObj());
      }
    },
    clearmsg:function(){
      this.errormsg = "";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .errormsg{color:red;font-size: 12px;}
  .hello{
    width:100%;
    height:100%;
    position:relative;
  }
  .bgimg{
    width:100%;
    height:100%;
    overflow:hidden;
  }
  .log{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
  }
  .dra{
    width:100%;
    height:100%;
    background:#000;
    opacity: 0.1;
  }
  .log_panel{
    width:390px;
    height:350px;
    position:absolute;
    left:50%;
    top:50%;
    margin-top: -240px;
    margin-left: -195px;
    z-index: 2;
  }
  .dra01{
    width: 100%;
    height: 100%;
    background:#000;
    opacity: 0.2;
  }
  ul{
    width:300px;
    position:absolute;
    left:40px;
    top:20px;
  }
  li{
    width:100%;
    margin-top: 15px;
    height:38px;
  }
  input{
    width:262px;
    border:none;
    line-height: 38px;
    float:left;
    font-size: 12px;
    outline:none;
  }
  .compety{
    width:100%;
    position:absolute;
    bottom:30px;
    left:0;
    color:#fff;
  }
  .icon_img{
    width:38px;
    height:38px;
    float:left;
    background:#fff url(./img/icon-signin.png) no-repeat -3px 0;
  }
  .bgimg02{
    background-position:-3px -40px;
  }
  .bgimg03{
    background-position:-3px -80px;
  }
  .bgimg04{
    background-position:-3px -120px;
  }
  .zjwyzm{
    display: inline-block;
    width:49%;
  }
  .zjwyzm input{
    width: 108px;
  }
  .logbtn{
    width:100%;
    line-height: 38px;
    background:#f28300;
    color:#fff;
  }
  .remember{
    text-align: left;
    color:#fff;
  }
</style>
