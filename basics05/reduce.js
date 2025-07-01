const myArr = [1, 2, 3]
const myNew = myArr.reduce(function(accu, currVal) {
        console.log(`acc ${accu} and currVal ${currVal}`)
        return accu + currVal
    }, 0) //this0 is value of accumulator
console.log(myNew);
const shoppingCart = [{
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);