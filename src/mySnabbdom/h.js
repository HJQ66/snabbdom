import vnode from './vnode'
import * as is from './is'

export function h(sel, b, c) {
    let data = {}
    let children
    let text

    //三种参数的情况
    if (c !== undefined) {
        if (b !== null) {
            data = b
        }
        if (is.array(c)) {
            children = c
        } else if (is.primitive(c)) {
            text = c.toString()
        } else if (c && c.sel) {
            children = [c]
        }
    }
    //两种参数的情况
    else if (b !== undefined && b !== null) {
        if (is.primitive(b)) {
            text = b.toString()
        } else if (is.array(b)) {
            children = b
        } else if (b && b.sel) {
            children = [b]
        } else {
            data = b
        }
    }
    if (children != undefined) {
        // 判断数组中的数据是否是数字，或字符串 [1,2,'哈哈哈哈']
        for (let i = 0; i < children.length; i++) {
            if (is.primitive(children[i])) {
                children[i] = vnode(undefined, undefined, undefined, children[i], undefined)
            }
        }
    }
    return vnode(sel, data, children, text, undefined)
}
