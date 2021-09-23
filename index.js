const { hasAssertions } = require("expect");

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    let newArray = []
    array.filter(function (driver) {
        if (driver === string) {
            let element = driver
            return newArray.push(element)
        };
    });
    return newArray
}




findMatching(drivers, "Bobby");

function fuzzyMatch(array, letters) {
    let newArray = [];
    array.filter(function (name) {
        array.forEach;
        if (letters === name[0]) {
            let element = name;
            return newArray.push(element);
        }
    })
    return newArray;
}

fuzzyMatch(drivers, "B");



const driversTwo = [{ name: 'Bobby', hometown: "Honolulu" }, { name: 'Sammy', hometown: "Honolulu" }, { name: 'Sally', hometown: "Honolulu" },]

function matchName(array, string) {
    return array.filter(function (array) {
        return array["name"] === string
    })
}

matchName(driversTwo, "Waimea");




