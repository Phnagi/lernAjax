// Async Await
/*

async function myFunction(){
    return 10 ;
}
let Promise = myFunction();

Promise.then((data) => {console.log(data);})
在最後一行的data才是10
Promise不是10 會是一個Promise Object

但是
如果是
我們使用了await fetch(),response並不會是Promise!使用了await關鍵字後
，我們會獲得URL回應的完整的Response Object，就像fetch()是一個同步函數(synchronous)一樣!
在asynchronous function內部甚至可以使用try ....catch 進行錯誤處理，就像是同步的一樣

async function fetchSomething(){
    const response = await fetch(URL);
}



*/


async function fetchProduct() {
    const fetchPromise1 = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );//因為用了await 所以直到 reject或是fulfail 都會停在這裡不動

    console.log(fetchPromise1);
    const data = await fetchPromise1.json();
    console.log(data);
};
async function fetchProductNotAwait() {
    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );//因為用了await 所以直到 reject或是fulfail 都會停在這裡不動

    console.log(fetchPromise1);
    

};

async function fetchProductTryCatch() {
    try{
        const fetchPromise1 = await fetch(
            "https://learning-area/javascript/apis/fetching-data/can-store/products.json"
        );//因為用了await 所以直到 reject或是fulfail 都會停在這裡不動
    
        console.log(fetchPromise1);
        const data = await fetchPromise1.json();
        console.log(data);
    }catch(e){
        console.log(e);
    }

};

// fetchProductNotAwait();
// fetchProduct();
// fetchProductTryCatch()
// console.log(fetchProduct());
