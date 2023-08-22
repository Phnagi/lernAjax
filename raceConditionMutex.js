/*
let mutex = Promise.resolve(); Promise.resolve()會創建出一個 Promise物件且已經是fulfill狀態 所以 mutex本身就是 Promise 物件且狀態為fulfill
且 Promise.resolve()屬於同步動作 在node裡會直接執行
async function doinSomethingCritical(){
    mutex = mutex.then(()=>{
        // do stuff on the critical path
    }).catch(() => {
        // manage errors on the critical path
    })
    return mutex
}




*/ 

let balance = 0 //shared resource
let mutex = Promise.resolve();

const randomDelay = () => {
    // return value is a Promise
    //and the time for this promise changing from pending to fulfilles is random(0~0.1s)
    
    return new Promise((resolve) => setTimeout(resolve,Math.random()*100));
}

async function loadBalance(){
    await randomDelay();
    return balance;
    // let B = await balance;
    // console.log(B);
}

async function saveBalance(value){
    await randomDelay(); 
    balance = value;
}

async function sellGrapes(){
    mutex = mutex.then(async() => {
        const balance = await loadBalance();
        console.log(`賣葡萄前，帳戶金額:${balance}`);
        const newBalance = balance + 50;
        await saveBalance(newBalance);
        console.log(`賣葡萄後，帳戶金額:${newBalance}`);
    })
    return mutex ;

}

async function sellOlives(){
    mutex = mutex.then(async() => {
        const balance = await loadBalance();
        console.log(`賣橄欖前，帳戶金額:${balance}`);
        const newBalance = balance + 50;
        await saveBalance(newBalance);
        console.log(`賣砍覽後，帳戶金額:${newBalance}`);
    })
    return mutex;

}

async function main(){
    await Promise.all([sellGrapes(),sellOlives()]);
    const balance = await loadBalance();
    console.log(`賣葡萄與橄欖後的金額:${balance}`);
}
main();