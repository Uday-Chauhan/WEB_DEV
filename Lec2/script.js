/*console.log("SCRIPT START");

setTimeout(() => {
    console.log("I AM GOING TO RESTAURANT");
}, 4000);

setTimeout(() => {
    console.log("I AM CHECKING THE MENU FOR ORDERING");
}, 3000);

function walkInRestaurant(cb) {
    console.log("I am walking inside the restaurant");
    setTimeout(cb, 3000);
}

function menuCheck(cb) {
    console.log("I am checking the menu");
    setTimeout(cb, 2000);
}

function foodOrder(cb) {
    console.log("I am ordering the food");
    setTimeout(cb, 6000);
}

function havingLunch(cb) {
    console.log("I am having the food");
    setTimeout(cb, 8000);
}

function payBill(cb) {
    console.log("I am paying the bill");
    setTimeout(cb, 3000);
}
function walkAwayFromRes() {
    console.log("Bye Bye going home"); 
}

walkInRestaurant(() => {
    menuCheck(() => {
        foodOrder(() => {
            havingLunch(() => {
                payBill(() => {
                    walkAwayFromRes();
                });
            });
        });
    });
});

console.log("SCRIPT END");
*/

// ARRAY OPERATIONS

// let arr = [2, 3, 4, 6, 8, 5];

// function doubleArrVal(arr) {
//     return arr.map((val) => {
//         return val * 2;
//     });
// }

// console.log(doubleArrVal(arr));

// let arr = [2, 3, 4, 6, 8, 5];

// function doubleArrVal(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * 2);
//     }
//     return result;
// }

// console.log(doubleArrVal(arr));






// Array.prototype.doubleArrVal = function (data) {
//     let output = [];
//     for(var i = 0; i < data.length; i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }



let arr = [2, 3, 4, 6, 8, 5];

Array.prototype.doubleArrVal = function (data) {
    let result = [];
    for (var i = 0; i < data.length; i++) {
        result.push(data[i] * 2);
    }
    return result;
};

console.log(arr.doubleArrVal(arr));
