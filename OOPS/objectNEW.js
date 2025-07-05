function multipleBy5(num) {

    return num * 5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`);
}

//new is used as form of constructor.without new keyword, js would not allocate memory for variable. new declares that the funvtion is object and execute the function
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)
    //there will be no memory allocation for tea because new is not defined in this


chai.printMe()