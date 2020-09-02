
import Toast from './Toast.vue'

Toast.install = (Vue) => {
  Vue.prototype.$toast = (msg, duration) => {   //添加一个实例方法 这样全局的实例都可以调用$toast方法了 msg、duration是调用$toast时传入的两个参数
    if (!msg) {
      return;
    }
    duration = duration || 1500;  //如果不传toast持续时间则默认使用此时间
    const constroct = Vue.extend(Toast)  //构造器
    const instance = new constroct();   //创建实例
    instance.msg = msg || '';           //将$toast(msg,duration)中的msg传入组件的data中
    const tpl = instance.$mount().$el   //vue实例未挂载时可这样拿到它的dom 后续可对它的dom进行操作

    document.querySelector('body').appendChild(tpl);
    setTimeout(() => {
      document.querySelector('body').removeChild(tpl)
    }, duration);
  }
}

export default Toast;