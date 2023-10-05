// sync

// console.log('perintah 1');
// console.log('perintah 2');
// console.log('perintah 3');

// async


// function sleep -> sync

function sleep (millis, process){
    let date = new Date()
    let currenDate = null
    do{
        currenDate = new Date();
    }while(currenDate - date < millis)
    console.log(process);
}


// async

// console.log('perintah 1');
// setTimeout(()=>{
//     console.log('perintah 2');
// }, 1000)
// // sleep(1000, 'perintah 2')
// console.log('perintah 3');


// async penjumlahan

const penjumlahan = (val1, val2, callback) =>{
    setTimeout(()=>{
        const result = val1 + val2
        callback(result)
    }, [1000])
}
const pengurangan = (val1, val2, callback) =>{
    setTimeout(()=>{
        const result = val1 - val2
        callback(result)
    }, [1000])
}

// const print = (data)=>{
//     console.log(`hasil nya adalah = ${data}`);
// }

console.log('perintah 1');
penjumlahan(10, 20, (result) =>{
    // console.log(`hasil nya adalah = ${result}`);
    pengurangan(result, 10, (total)=>{
        console.log(`hasil totalnya adalah = ${total}`);
    })
} )
console.log('perintah 3');