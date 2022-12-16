import { h } from './mySnabbdom/h.js'
import patch from './mySnabbdom/patch.js'

const Vnode1 = h('h1', "你好")
// console.log(Vnode1);

const container = document.getElementById('container')
const btn = document.querySelector('.btn')

patch(container, Vnode1)

btn.onclick = () => {
    patch(container, Vnode1)
}