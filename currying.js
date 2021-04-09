// let multiply = function (x,y) {
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5)

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5)

//Same by closure concept

let multiply = function (x){
    return function (y){
        console.log(x*y);
    }
}
let mul = multiply(5)
mul(3);

let multiplybyTwo = multiply(2);
multiplybyTwo(3);

let multiplybyThree = multiply(3);
multiplybyThree(3);