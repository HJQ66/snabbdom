export const  array = Array.isArray
export function primitive(s){
    return (
        typeof s === 'number' || typeof s === "string" || s instanceof Number || s instanceof String
    )
}
