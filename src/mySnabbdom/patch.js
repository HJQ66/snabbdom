import vnode from './vnode'
import createElement from './createElement';

export default function (oldVnode, newVnode) {
    //判断oldVnode是不是虚拟节点，如果不是，则转换为虚拟节点
    if (oldVnode.sel === "" || oldVnode.sel === undefined) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }

    //判断旧虚拟dom和新虚拟dom是不是同一个节点
    if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
        console.log("是同一个节点");
        //精细化比较
    } else {
        //不是同一个节点
        console.log('不是同一个节点，此时需要暴力插入新的，删除旧的');
        let newVnodeElm = createElement(newVnode)
        //插入到老节点之前
        oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
    }
}