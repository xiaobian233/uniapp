import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
window.log = console.log
import "./static/css/animate_css.css"
import "./static/font/home/iconfont.css"

const app = new Vue({
	...App
})
app.$mount()
