function addNumbers() {
    console.log(arguments);
    let sum = 0;
    for (const number of arguments) {
        sum = sum + number;
        console.log(number);
    }
    return sum;
}
const sum = addNumbers(2,4,8,7);
console.log(sum);


function getFullName() {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('sagor', 'aich', 'tala', 'satkhira','bangladesh','world','galaxy');
console.log(name);