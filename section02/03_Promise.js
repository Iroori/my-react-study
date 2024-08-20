/** Promise 객체
 *  - 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
 *  - 비동기 작업을 감싸는 객체이다.
 * 1. Promise의 3가지 상태
 *  - 대기(Pending)
 *   : 아직 작업이 완료되지 않은 상태 (비동기작업이 진행중인)
 *  - 성공(Fulfilled)
 *   : 비동기 작업이 완료된 상태
 *  - 실패(Rejected)
 *   : 비동기 작업이 실패한 상태
 *  > 대기 -> 성공 : 해결(resolve)
 *  > 대기 -> 실패 : 거부(reject)
 */
const promise = new Promise((resolve, reject) => {
    // Promise객체 생성시 콜백함수 부분은 비동기 작업을 실행하는 함수이다.
    // executor라고 부른다.
    // resolve : Promise객체안에 비동기작업을 성공상태로 바꾸는 함수가 들어있다.
    // reject : Promise객체 안에 비동기 작업을 실패 상태로 바꾸는 함수가 있다.
    setTimeout(()=>{
        const num = "10";
        // resove(); -> PromiseState를 Fullfiled 상태로 반환, PromiseResult값은 undefined
        // resolve();
        // resove(인수);  -> PromiseState를 Fullfiled 상태로 반환,PromiseResult값 전달
        // resolve("성공");
        // reject("왜 실패했는지 이유!");
        
        if(typeof num ==="number")
            resolve(num + 10);
        else
            reject("num이 숫자가아닙니다.");
    }, 2000);

});

// setTimeout(() =>{

//     console.log(promise);

// },3000);

/** then 메서드 : Promise가 성공했을 때 실행되는 함수
 * Pormise 객체 내의 then 메소드는 promise객체가 resolve()가 호출됐을 경우 실행되는 함수이다.
 * resolve에서 받은 인수의 결과값을 매개변수로 까지 받을 수 있다.
 */
promise.then((value)=>{
    // callback함수
    console.log(value);
});

/** catch 메서드 : Promise가 실패했을 경우 실행되는 함수
 * Promise 객체 내의 catch 메소드는 promise객체에서 reject()가 호출됐을 경우 실행되는 함수이다.
 * rejcet에서 받은 인수의 결과값을 매개변수로 받을 수 있다.
 */
promise.catch((error)=>{
    //callback함수
    console.log(error);
});

/** Promise 체이닝
 * : then 메소드나, catch메소드나 같은 Promise객체를 반환하므로 연결되어 사용할 수 있다.
*/
promise
    .then((value)=>{
    // callback함수
    console.log(value);
    }).catch((error)=>{
        //callback함수
        console.log(error);
    });


/** 이제 Promise객체를 Function에 담아서 실행해보자 */
function add10(num){
    const promise = new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            
            if(typeof num ==="number")
                resolve(num + 10);
            else
                reject("num이 숫자가아닙니다.");
        }, 2000);
    
    });

    return promise;
}

add10(100)
    .then((result) => {
        console.log(result);
        
        // 새로운 Promise 객체를 반환함
        return add10(result);
        
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });