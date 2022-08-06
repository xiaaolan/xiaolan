import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入全局的重置样式文件
import './styles/reset.less'


new Vue({
  render: h => h(App),
}).$mount('#app')
