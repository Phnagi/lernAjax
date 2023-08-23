const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// return promise object
//pending 的delay秒後 => fulfilled
//若delay < 0 => rejected
function alarm(person,delay){
    // setTimeout(() => {
    //     output.innerHTML = person + "起床";
    // },delay);
    return new Promise((resolve,reject) => {
        if(delay < 0 ){
            reject("delay不能小於0");
        }else{
            setTimeout(() => {
                resolve(person+"起床") //pending 的delay秒後 => fulfilled
            },delay);
        }
    })
}



button.addEventListener("click",async (e) => {
    // alarm(name.value,delay.value);
    // let promiseObject =  alarm(name.value,delay.value);
    // promiseObject.then((message) => {
    //     output.innerHTML = message ;
    // }).catch((e)=>{
    //     output.innerHTML = e ;
    // })
    try{
         
        output.innerHTML = await alarm(name.value,delay.value);
    }catch(e){

        output.innerHTML = e;
    }


});

//...................................................................
//joke api


let jokeBtn = document.querySelector("#new-joke");
let output2 = document.querySelector("#output2");




async function hello(){
    try {
        let result = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
        let data = await result.json();
        console.log(data.joke);
        output2.innerText += data.joke + "\n";
    } catch (e) {
        console.log(e);
    }

};




jokeBtn.addEventListener("click",() => {
    hello();
})


//...................open wheather API

let myKey = "a967826cd8d548b48ea6ef9bbd8e4238";
let city = "Taipei";

let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`

async function weather(){
    try{

        let result = await fetch(url);
        let data = await result.json;
        console.log(data);

    }catch(e){
        console.log("失敗");
        console.log(e);
    }
}

weather()


