promise1 = new Promise((resolve, reject) => {
    resolve(11)
})


promise2 = promise1.then(function (value) {
    // return Promise.resolve(1314)
    return new Promise((resolve,reject)=>{
        resolve(1314)
    })
}, function (reason) {
    console.log(22);
    throw new Error('sth went wrong')
})

promise2.then(res=>{
    console.log(res);
})
