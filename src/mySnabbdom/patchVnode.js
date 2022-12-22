import createElement from "./createElement";

export default function patchVnode(oldVnode, newVnode) {
    // console.log("是同一个节点");
    //精细化比较
    //如果oldVnode和newVnode是内存中的同一个对象
    if (oldVnode === newVnode) return;
    //判断newVnode中是否有text且没有children
    if (newVnode.text !== undefined && (newVnode.children === undefined || newVnode.children.length === 0)) {
        if (newVnode.text !== oldVnode.text) {
            //如果新虚拟节点中的text和老的虚拟节点的text不同
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {
        //newVnode中没有text属性，但是有children
        if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
            //此时oldVnode有children属性
            console.log('此时是最复杂的情况');

        } else {
            console.log("oldVnode没有children属性，newVnode中有children属性");
            //先清空oldVnode中的text值
            oldVnode.elm.innerHTML = ""
            //此时oldVnode没有children属性，newVnode中有children属性
            for (let i = 0; i < newVnode.children.length; i++) {
                let dom = createElement(newVnode.children[i])
                oldVnode.elm.appendChild(dom)
            }
        }
    }
}