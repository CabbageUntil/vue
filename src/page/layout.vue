<template>
    <el-container>
        <el-header class="header">
            <span class="demonstration" style="float:left;padding-top:10px;margin-left:1%">
              
            </span>
            <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </span>
        </el-header>
        <el-container>
            <el-aside width="200px" >
                <el-menu :style="'height:'+(fullHeight-60)+'px;'" default-active="1" class="el-menu-vertical-demo"  @select="handleSelect">
                    <el-menu-item index="1"><i class="el-icon-message"></i>用户信息</el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>博客信息</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>系统设置</el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>
                    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
                </el-footer>
             </el-container>
        </el-container>
    </el-container>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                searchCriteria: '',
                fullHeight: document.documentElement.clientHeight,
                breadcrumbItems: ['导航一'],
            }
        },
        watch:{
            fullHeight (val) {//监控浏览器高度变化
				if(!this.timer) {
					this.fullHeight = val
					this.timer = true
					let that = this
					setTimeout(function (){
						that.timer = false
					},400)
				}
				
			}
        },
        mounted(){
            this.get_bodyHeight()
        },
        methods:{
            handleIconClick(ev) {
                console.log(ev);
            },
            get_bodyHeight () {//动态获取浏览器高度
				const that = this
				window.onresize = () => {
					return (() => {
						window.fullHeight = document.documentElement.clientHeight
						that.fullHeight = window.fullHeight
					})()
				}
			},
            handleSelect(key, keyPath){
                switch(key){
                    case '1':
                        this.$router.push('/Page1');
                        this.breadcrumbItems  = ['导航一']
                        break;
                    case '2':
                        this.$router.push('/Page2')
                        this.breadcrumbItems  = ['导航二']
                        break;
                    case '3':
                        this.$router.push('/Page3')
                        this.breadcrumbItems  = ['导航三']
                        break;
                }
            },

        },
    }
</script>
<style>
body{
  margin:0;
  padding:0;
}
.main {
    height: 100%;
}
.header{
    background-color: #0D47A1;
    color: aliceblue;
}
        
</style>