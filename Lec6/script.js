const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("this is promise object");
        resolve("Promise Resolved P1");
    },3000)
})
// console.log(promise1);

// promise1
// .then((res)=>console.log(res))

// .then(()=>setTimeout(()=>console.log("P2"),3000))
// .then(()=>setTimeout(()=>console.log("P3"),2000))
// .then(()=>setTimeout(()=>console.log("P4"),5000))
// .then(()=>setTimeout(()=>console.log("P7"),11000))
// .catch((err)=>console.log("error",err))


function something(message,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise Resolved: ",message);
        },delay)
    })
}

promise1
.then((res)=>console.log(res))

.then(()=>{return something("P2"),4000})
.then(()=>{return something("P8"),3000})
.then(()=>{return something("P1"),6000})
.then(()=>{return something("P7"),11000})
.catch((err)=>console.log("error",err))


// .then always work in sync

