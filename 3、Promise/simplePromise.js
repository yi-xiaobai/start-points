
// 最简单实现Promise
function Promise(fn) {
    this.cbs = [];

    const resolve = (value) => {
        setTimeout(() => {
            this.data = value;
            this.cbs.forEach((cb) => {
                // console.log('==>Get cb', cb);
                cb(value)
            });
        });
    }

    fn(resolve);
}

Promise.prototype.then = function (onResolved) {
    return new Promise((resolve) => {
        this.cbs.push(() => {
            // console.log('==>Get onResolved', onResolved);
            const res = onResolved(this.data);
            console.log('==>Get this.data', this.data);
            console.log('==>Get 返回值', res);
            if (res instanceof Promise) {
                res.then(resolve);
            } else {
                resolve(res);
            }
        });
        console.log('==>Get this.cbs.length', this.cbs.length);
    });
};


new Promise((resolve) => {
    setTimeout(() => {
        // resolve1
        resolve(1);
    }, 500);
})
    // then1
    .then((res) => {
        console.log(res);
        // user promise
        return new Promise((resolve) => {
            setTimeout(() => {
                // resolve2
                resolve(2);
            }, 500);
        });
    })
    // then2
    // .then(console.log);

