const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

//.............................Promise.all  Promise.any

// Promise.any([fetchPromise1,fetchPromise2,fetchPromise3]).then((responses) => {

//     console.log(responses);
// }).catch((e) => {
//     console.log("erro");
//     console.log(e);
// });

// Promise.all([fetchPromise1,fetchPromise2,fetchPromise3]).then((responses) => {
//     responses.forEach((response) => {
//         console.log(response.url,response.status);
//     })
// }).catch((e) => {
//     console.log("erro");
//     console.log(e);
// });
Promise.all([fetchPromise1,fetchPromise2,fetchPromise3]).then((responses) => {
    // responses.forEach((response) => {
    //     console.log(response.url,response.status);
    // })
    console.log(responses);
}).catch((e) => {
    console.log("erro");
    console.log(e);
});

