//真正创建节点。将vnode创建为DOM
export default function createElement(vnode) {
    // console.log('目的是把虚拟节点');
    //创建一个dom节点，这个节点现在还是孤儿节点
    let domVnode = document.createElement(vnode.sel)
    //有子节点还是有文本？？
    if (vnode.text !== "" && (vnode.children === undefined || vnode.children.length === 0)) {
        //它内部是文字
        domVnode.innerText = vnode.text
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        //它内部有子节点，就要递归创建节点
        for (let i = 0; i < vnode.children.length; i++) {
            //得到当前这个children
            let ch = vnode.children[i];
            //递归调用
            let chDom = createElement(ch);
            //上树
            domVnode.appendChild(chDom);
        }
    }
    //补充elm属性
    vnode.elm = domVnode;
    return vnode.elm;
}