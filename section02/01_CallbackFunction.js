
/** 비동기 작업을 하는 함수를 외부에서 관리하고싶다면
 *  비동기작업 안에서 Callback함수를 매개변수로 받아 처리할 수 있음 */
function task(a,b, callback) {
    setTimeout(()=> {
        const sum = a + b;
        callback(sum);
    },3000);
}

task(1,2,(value)=>{
    console.log(value);
});

/** 예제) 비동기 작업 내에서 인수를 다른 비동기 작업에서도 받아 처리할 수 있다. 
 * 이렇게되면 인덴트가 깊어지게 되는데 콜백지옥에 빠질 수 있음 !! => promise 객체를 통해 해결할수있음
*/

function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    },3000);
}

function cooldownFood(food, callback){
    setTimeout(() =>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    },2000);
}

function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    },3000);
}

orderFood((food)=>{
    console.log(food);
    
    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(food,(freezedFood)=>{
            console.log(freezedFood);
        });
    });
});