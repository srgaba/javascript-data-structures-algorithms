function addUpTo(i){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total =+ i;
    }

    return total;
}

let t1 = performance.now();
addUpTo(i);
let t2 = performance.now();
