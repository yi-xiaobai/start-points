


var foo = {
    value: 1
}


function bar(name, age) {
    console.log('==>Get this.value', this.value);
    console.log('==>Get name', name);
    console.log('==>Get age', age);
}


barBind = bar.bind(foo, "晚秋")
barBind(18)
/**
 *   ==>Get this.value 1
 *   ==>Get name 晚秋
 *   ==>Get age 18 
 */