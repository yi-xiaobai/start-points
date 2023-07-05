



function isEmptyObject(obj) {
    var name
    for (name in obj) {
        return false
    }

    return true
}

console.log(isEmptyObject({}));
console.log(isEmptyObject({ name: "11" }));