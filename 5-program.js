const _=require('loadash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);

