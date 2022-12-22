import { h } from './mySnabbdom/h.js'
import patch from './mySnabbdom/patch.js'

const Vnode1 = h('ul', '你好呀')

const Vnode2 = h('ul', [
    h('p', '你好啊'),
    h('p', '哈哈哈'),
    h('p', '嘿嘿嘿'),
])
const Vnode3 = h('ul', [
    h('p', '香蕉'),
    h('p', '梨子'),
    h('p', '苹果'),
])


const container = document.getElementById('container')
const btn = document.querySelector('.btn')

patch(container, Vnode1)

btn.onclick = () => {
    patch(Vnode1, Vnode3)
}