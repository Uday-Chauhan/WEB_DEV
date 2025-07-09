
/*function welcomeStudents(welcomeMessage,goodByeMsg){
    // console.log(welcomeMessage+" "+this.studentName+" is a student of class "+this.studentClass+" "+goodByeMsg);
    return `${welcomeMessage}+" "+${this.studentName}+" is a student of class "+${this.studentClass}+" "+${goodByeMsg}`
}
const student1={
    studentName:"Devesh",
    studentClass:"G4"
}
const student2={
    studentName:"Devansh",
    studentClass:"G4"
}

// call
welcomeStudents.call(student1,"Good Morning","Bye");
welcomeStudents.call(student2);

// bind
welcomeStudents.bind(student2,"Good Morning","Bye");


// apply:isma array ma passs howa
welcomeStudents.apply(student2["Good Morning","Bye"]);




*/
// CURYING
/*
function sumOfThree(a,b,c){
    console.log(a+b+c);
}
sumOfThree(10,20,30)


function sumOfThree(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
console.log(sumOfThree(10)(20)(30))

// function chooseBread(bread){
//     return function(patty){
//         return function(cheese){
//             console.log(bread+patty+cheese);
//         }
//     }
// }
// console.log(chooseBread())

*/


const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click",()=>{
    console.log("Grand Parent Clicked");
})

parent.addEventListener("click",()=>{
    console.log("Parent Clicked");
}) 

child.addEventListener("click",()=>{
    console.log("Child Clicked");
})