/** JavaScript 엔진은 동기적으로 동작한다.
- 자바스크립트 엔진은 싱글 스레드이다.
- MultiThread 사용으로 보완할 수 있는데 자바스크립트 엔진은 멀티스레드가 없음
- 비동기 방식 이용 : 작업을 순서대로 처리하지 않는다.
- 결과값을 이용해야한다면 각각의 작업에 callback함수를 통해 이용할 수 있음.*/

console.log(1);

/* 비동기적으로 실행하는 함수 
    첫번째 인수는 callback함수
    두번째 인수는 초
    - setTimeout()함수는 자바스크립트 엔진이 아닌 브라우저가 직접 관리하는 별도의 공간에서 WebAPIs에서  실행되는 것 콜백함수는 WebAPIs가 함수실행이 끝나면 JavaScript엔진에 다시 전달됨.*/
setTimeout(()=>{
    console.log(3);
},3000);

console.log(2);