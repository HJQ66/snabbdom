import { h } from './mySnabbdom/h.js'
import patch from './mySnabbdom/patch.js'

const Vnode1 = h('ul', [
    h('li', '香蕉'),
    h('li', '梨子'),
    h('li', '苹果'),
])

const Vnode2 = h('div', [
    h('p', '你好啊'),
    h('p', '哈哈哈'),
    h('p', '嘿嘿嘿'),
])

const container = document.getElementById('container')
const btn = document.querySelector('.btn')

patch(container, Vnode1)

btn.onclick = () => {
    patch(Vnode1, Vnode2)
}