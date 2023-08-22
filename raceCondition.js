let balance = 0 //shared resource

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
    const balance = await loadBalance();
    console.log(`賣葡萄前，帳戶金額:${balance}`);
    const newBalance = balance + 50;
    await saveBalance(newBalance);
    console.log(`賣葡萄後，帳戶金額:${balance}`);
}

async function sellOlives(){
    const balance = await loadBalance();
    console.log(`賣橄欖前，帳戶金額:${balance}`);
    const newBalance = balance + 50;
    await saveBalance(newBalance);
    console.log(`賣砍覽後，帳戶金額:${balance}`);
}

async function main(){
    await Promise.all([sellGrapes(),sellOlives()]);
    const balance = await loadBalance();
    console.log(`賣葡萄與橄欖後的金額:${balance}`);
}
main();