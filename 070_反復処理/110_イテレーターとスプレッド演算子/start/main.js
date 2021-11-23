const arry1 = [1,2,3,4,5]
const arry2 = [...arry1]
arry2.push(6)
console.log(arry1, arry2)

function sum(...args){
    let ret = 0;
    for(let v of args){
        ret += v
        console.log(v)
    }
    return ret
}

const result = sum(1,2,3,4)