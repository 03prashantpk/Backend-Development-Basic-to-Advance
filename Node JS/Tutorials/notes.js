// console.log(module);

module.exports.age = 20;

module.exports.add = (a, b) => {
    if (a > b) {
        return (a + b);
    } else {
        return (b - a);
    }
}