import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Layout } from 'ant-design-vue'

Vue.component(Button.name, Button)
Vue.component(Layout.name, Layout)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
