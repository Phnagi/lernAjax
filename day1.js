let fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
let fetchPromiseE = fetch(
    "https://github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// console.log(fetchPromise);

// fetchPromise.then((response)=>{
//     console.log(fetchPromise);
//     console.log(response);
// })


// fetchPromise.then((response)=>{
//     // let jsonPromise = response.json();//resonse回來的data轉成json .json() method is alse asyncFunction so return Promise object
//     response.json().then((data) => {
//         console.log(data);
//     });
    
// })

// 解決 callBack Hell

    // fetchPromise.then((response)=>{

    //     return response.json();
        
    // }).then((data) => {
    //      console.log(data);
    // }); 以下簡寫

    fetchPromise
        .then((response)=>response.json())
        .then((data) => {
            console.log(data);
        }); 

    fetchPromiseE
        .then((response)=>response.json())
        .then((data) => {
            console.log(data);
        }).catch((e) => {
            console.log(fetchPromise);
            console.log(e);
        }); 