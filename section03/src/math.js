// math 모듈

// //방법 1. 함수 선언 후 위와 같이 export {func1, func2}; 리터럴로 Export
// function add(a,b){
//     return a+b;
// }

// function sub(a,b) {
//     return a-b;
// }

// export {add, sub};

// //방법 2. 함수 선언시 함수 앞에 export 키워드 선언
// export function add(a,b){
//     return a+b;
// }

// export function sub(a,b) {
//     return a-b;
// }

// // Default로 Export 되는 함수라 호출시  {} 는 필요없다.
// // 예시 import multiply from "./math.js";
// export default function multiply(a,b){
//     return a*b;
// }