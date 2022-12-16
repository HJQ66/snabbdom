//真正创建节点。将vnode创建为DOM
export default function (vnode) {
    // console.log('目的是把虚拟节点');
    //创建一个dom节点，这个节点现在还是孤儿节点
    let domVnode = document.createElement(vnode.sel)
    //有子节点还是有文本？？
    if (vnode.text !== "" && (vnode.children === undefined || vnode.children.length === 0)) {
        //它内部是文字
        domVnode.innerText = vnode.text
        vnode.elm = domVnode
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        //它内部有子节点，就要递归创建节点
    }
    return vnode.elm;
}