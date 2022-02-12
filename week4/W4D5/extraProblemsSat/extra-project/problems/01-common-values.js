/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/

function commonValues(obj1, obj2) {
    let newArr = []
    const val1 = Object.values(obj1)
    const val2 = Object.values(obj2)

    val1.forEach(ele =>  {
        if(val2.includes(ele)){
            newArr.push(ele)
        }
    })
    return newArr

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
