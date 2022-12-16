import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
]);


// 一共有以下几种组合
// h('div')
// h('div','文字')
// h('div',[])
// h('div',{})
// h('div',h())

// h('div',{},'文字')
// h('div',{},[])
// h('div',{},h())

const Vnode1 = h('div')

const Vnode2 = h('div', '我是一个盒子')

const Vnode3 = h('ul', [
    h('li', '西瓜'),
    h('li', [
        h('a', { props: { href: 'http://www.baidu.com' } }, '进入百度')
    ]),
    h('li', '菠萝'),
])

const Vnode4 = h('div', { class: 'box' })

const Vnode5 = h('div', h('div'))

const Vnode6 = h('div', { class: 'container' }, '我是一个div盒子')

const Vnode7 = h('ul', { class: 'ul-box' }, [
    h('li', '西瓜'),
    h('li', [
        h('a', { props: { href: 'http://www.baidu.com' } }, '进入百度')
    ]),
    h('li', '菠萝'),
])

const Vnode8 = h('div', { class: 'div-box' }, h('div'))

//让虚拟节点上树
const container = document.getElementById('container')
patch(container, Vnode8)
