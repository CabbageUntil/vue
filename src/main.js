// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Layout from './page/layout'
import Api from './api/index.js'
import MavonEditor from 'mavon-editor'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MavonEditor)
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.prototype.$api = Api
new Vue({
    el: '#app',
    router,
    render: h => h(Layout)
        // components: { App },
        // template: '<App/>'
})