/*
// Promises, Promise APIs, Async await
let userData=[
    {
        firstname:"Priyanshu",
        age:"20"
    },
    {
        firstname:"Pranav",
        age:"20"
    },
    {
        firstname:"Devesh",
        age:"32"
    },
]

let result = userData
  .filter(user => Number(user.age) > 20)
  .map(user => user.firstname);

console.log(result);


// promises are always the object which is used to make or handle asynchoronous tasks
// three states: pending, fulfill,reject

const priyanshuPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("GOT Placed");
    },2000);
})

priyanshuPromise
.then((res)=>{
    console.log("Priyanshu getting 1 lakh salary")
    console.log(res)
})
.catch((err)=>{
    console.log("1 Error found: ",err)
})

.then(()=>{
    console.log("Party Tym");
})
.catch((err)=>{
    console.log("2 Error found: ",err)
})

.then(()=>{
    console.log("Working working working");
})
.catch((err)=>{
    console.log("3 Error found: ",err)
})

.then(()=>{
    console.log("LAyoff");
})
.catch((err)=>{
    console.log("Error found: ",err)
})

// console.log(priyanshuPromise);
*/

/*
// PROMISE APIs
// have different purpose,different 
    // Promise.all
    // PRomise.allSettled
    // Promise.race
    // Promise.any


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Assigned completed by p1");
    },2000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Assigned completed by p2");
    },3000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Assigned completed by p3");
    },4000)
})
const p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Assigned completed by p4");
        // resolve("Assigned completed by p4");

    },4000)
})
Promise.all([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log("ERROR",err));
// all jdi kaam kraga jd saare chlange agr ek b agr reject hoya to oo ni chln ka



// allSelected

const pp1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Assigned completed by p1");
        // resolve("Assigned completed by p1");
    },2000)
})

const pp2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Assigned completed by p2");
        // resolve("Assigned completed by p2");
    },3000)
})
const pp3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Assigned completed by p3");
        // resolve("Assigned completed by p3");
    },4000)
})
const pp4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Assigned completed by p4");
        // resolve("Assigned completed by p4");

    },4000)
})
Promise.allSettled([pp1,pp2,pp3,pp4]).then((res)=>console.log(res)).catch((err)=>console.log("ERROR",err));

*/

/*
// race
const ppp1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Assigned completed by p1");
        resolve("Assigned completed by p1");
    },2000)
})

const ppp2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Assigned completed by p2");
        resolve("Assigned completed by p2");
    },3000)
})
const ppp3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Assigned completed by p3");
        resolve("Assigned completed by p3");
    },4000)
})
const ppp4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Assigned completed by p4");
        resolve("Assigned completed by p4");

    },4000)
})
Promise.race([ppp1,ppp2,ppp3,ppp4]).then((res)=>console.log(res)).catch((err)=>console.log("ERROR",err));


// any
const pp1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Assigned completed by p1");
        // resolve("Assigned completed by p1");
    },2000)
})

const pp2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Assigned completed by p2");
        resolve("Assigned completed by p2");
    },3000)
})
const pp3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Assigned completed by p3");
        resolve("Assigned completed by p3");
    },4000)
})
const pp4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Assigned completed by p4");
        resolve("Assigned completed by p4");

    },4000)
})
Promise.allSettled([pp1,pp2,pp3,pp4]).then((res)=>console.log(res)).catch((err)=>console.log("ERROR",err));
*/




/*


// ASYNC await

const d1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Assignment complete by priyanshu");
    },2000);
})
async function checkAssignment() {
    const dataAssignment=await d1;
    console.log("Checking Assignment",d1);    
}
// function checkAssignment() {
//     const dataAssignment= d1;
//     console.log("Checking Assignment",d1);    
// }
checkAssignment();


*/
// fetch
// https://dummyjson.com/products from this fetrch data just do console.log()

async function fetchProducts(){
    try{
        const products=await fetch("https://dummyjson.com/products");
        const data=await products.json()
        console.log(data);
    }
    catch(err){
        console.log("Error fetching products:",err.message);
    }
}
fetchProducts();