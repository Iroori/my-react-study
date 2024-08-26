// async
// 함수 앞에 붙이는 키워드 : 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 반환해주는 키워드
// 동기적으로 작동하는 함수를 async를 통해 비동기함수로 바꿔줌

// 함수 선언문 앞에 async 키워드를 붙이면 이 함수는 async 에 의해 이 객체를 결과값으로 반환하는 비동기함수가 되는데 Promise 객체를 반환하는것이다.
async function getData(){
    return {
        name : "이뤼",
        id : "winterlood",
    };
}

console.log(getData());
// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할을 한다.
async function printData() {
    
    // Promise가 끝나길 기다린다.
    // Promise의 비동기작업이 끝날떄까지 기다려줌. 객체값이 data 변수에 담긴다.
    const data = await getData();
    console.log(data);
}

/** 비동기 작업을 마치 동기작업을 처리하듯이 간결한 코드로 수행할 수 있다.
 * Promise.then() 으로 result를 따로받아서 안써도된다.
 */