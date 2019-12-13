var myName ='Beau'
myName = 8
let ourName = 'camp'
const number = 3.14

var myHouse = 'Hyuga'
myHouse = 'another'

var myPet = 'cat'
myPet = 'dog'

var a;
var b = 2;
a= 7;
b=a;
console.log(a); //7

var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1; //6
b = b + 5; //15
c = c + 'string'; //I am a string

var myStr = "this is start." + " this is end";
console.log(myStr);

var ourStr = "I come first.";
ourStr += "I come second";
var myStr;

var myStr = "this is the first sentence.";
myStr += " this is the second sentence.";
console.log(myStr);

var ourName = "CodeCamp";
var ourStr = "hello, our name is" + ourName + ", how are you ?";
var myName = "Beau";
var myStr = "My name is " + myName + "and I am well";
console.log(myStr);

var anAdjective = "awesome";
var ourstr = "freecodecamp is ";
ourstr += anAdjective;

var someAdjective = "worthwhile";
var myStr = "learning to code is ";
myStr += someAdjective;

var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
varlastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

var mySyr = 'Jello World';
myStr[0] = 'H';

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName;

//最後の文字だす
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = 'Lovelace';
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + myNoun + myVerb + " to the store"+ myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["Bulls", 43], ["redy", 12]];

var ourArray = [18, 64, 99];
ourArray[1] = 45;
ourArray

var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = myArray[2][1];
console.log(myData);//8

//put push
var ourArray = ["simpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
var myArray = [["john", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//remove pop
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();

var myArray= [["john", 23],["cat",2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

//remove first element
var ourArray = ["simpton", "j", ["cat"]];
var removedFromOurArray = ourArray.shift();

var myArray = [["john", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
//unshift add in first element
var ourArray = ["simpson", "J", "cat"];
ourArray.shift();//"J", "cat"
ourArray.unshift("happy"); //"happy" "J" "cat"

var myArray =[["john",23], ["dog",12]];
myArray.shift();
myArray.unshift(["paul", 35]);

var myList = [["cereal", 3],["milk", 2],["bananas",3],["juice",2],["eggs",2]];

function ourReusableFunction() {
    console.log("Henya, World");
}
ourReusableFunction();

function reusableFunction() {
    console.log("Hi world");
}
reusableFunction();

function ourFunctionWithArgs(a, b){
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a,b) {
    console.log(a + b);
}
functionWithArgs(10, 5);

// global scope
var myGlobal =10;
function fun1() {
 oopsGlobal = 5;
}

function fun2() {
    var output ="";
    if(typeof myglobal != "undefined"){
        output +="myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output +=" oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// local scope function
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar);

var outerWear = "T-shirt";
function myOutfit() {
    return outerWear;
}

console.log(myOutfit());

var outerWear = "T-shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

function minusSeven (num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num){
    return num * 5;
}
console.log(timesFive(5));

var sum = 0;
function addThree () {
    sum += 3;
} //undefined

var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);

var processed = 0;
function processArg(num){
    return (num + 3) / 5;
}
processed = processArg(7);

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
    return false;
}

function ourTrueOrFalse(isItTrue){
    if(isItTrue) {
        return "Yea, it is true";
    }
    return "No, it is false";
}

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false.";

}
console.log(trueOrFalse(true));

function testEqual(val) {
    if(val===12){
        return "equal";
    }
    return "not equal";
}
console.log(testEqual(10));

function testStrict(val) {
    if(val === 7) {
        return "Equal";
    }
    return "not equal";
}
testStrict(10);

function testNotEqual(a,b) {
    if(a === b){
        return "equal";
    }
    return "not equal";
}
console.log(testNotEqual(10, "10"));

function testLessOrEqual(val) {
    if(val <= 12) {
        return "smaller than or equal to 12";
    }

    if(val <= 24) {
        return "smaller than or equal to 24";
    }
    return "more than 15";
}
console.log(testLessOrEqual(10));

function testLogicalOr(val) {
    if(val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);

function testSize(num){
    if(num < 5){
        return "Tiny";
    }else if (num < 10){
        return "Small";
    } else if (num < 15){
        return "Medium";
    }else if(num < 20){
        return "Large";
    }else {
        return "Huge";
    }
}
console.log(testSize(7));

function caseInSwitch(val) {
 var  answer = "";
 switch(val) {
     case 1: 
        answer =  "alpha";
        break;
    case 2:
        answer = "beta";
        break;
     case 3:
         answer = "gamma";
         break;
     case 4:
         answer = "delta"
        break;

 }
 return answer;
}

console.log(caseInSwitch(1));

function isLess(a,b){
 return a < b;
}
isLess(10, 15);

function abTest(a, b) {
    if(a < 0 || b < 0){
        return  undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,2));

var count = 0;
function cc(card) {
    return "change me";
}

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

var testObj = {
    12: "Namath",
    16:"Montana",
    19:"Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

var ourDog = {
    "name":"camper",
    "legs":4,
    "tails":1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails":1,
    "friends":["campers"]
}
myDog.name = "Happy coder"

//add properties
var myDog = {
    "name":"Happy Coder",
    "legs": 4,
    "tails":1,
    "friends":["campers"];
};

myDog["bark"]= "woo!";
myDog
//delete 
delete myDog.bark;

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "delta":"denver",
        "echo":"Easy",
        "foxtrot":"frank"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed:"sleigh"
};

function checkObj(checkProp) {
   if(myObj.hasOwnProperty(checkProp)){
       return myObj[checkProp]
   }else {
       return "not found";
   }
}
console.log(checkObj("hello"));

//array
var myMusic=[
    {
        "artist":"Billy",
        "title":"piano",
        "release":1973,
        "formats":[
            "CD",
            "LP"
        ],
        "gold":true
    },
    {
        "artist":"Beau",
        "title":"cereal Man",
        "release year":2003,
        "formats":[
            "you tube video"
        ]
    }
};


var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

var myPlants = [
    {
        type: "flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "binch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
secondTree //"pine"

var collection = {
    "2548":{
        "album": "snippery when wet",
        "artist":"bon jovi",
        "tracks":[
            "let it rock",
            "you give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "little red corvette"
        ]
    },
    "1245": {
        "artist": "robert palmer",
        "tracks": []
    },
    "5439":{
        "album": "ABBA Gold"
    }
};

var collectionCopy = (JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    } else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));

var myArray = [];
var i = 0;
while(i < 5){
myArray.push(i);
i++;

}
console.log(myArray);

var myArray =[]
for(var i=1; i < 8; i++) {
    myArray.push(i);
}
console.log(myArray);

var ourArray = [];
for(var i=10; i > 0; i -=2){
    ourArray.push(i);
}
console.log(ourArray);  //[10, 8, 6, 4,2]

var myArray = [];
for(var i = 9; i > 0; i -=2){
    myArray.push(i);
}
console.log(myArray);

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for(var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArr = [2,3,4,5,6];
var total = 0;

for(var i = 0; i < myArr.length; i++){
    total += myArr[i];
}
console.log(total);
///
function multiplyAll(arr) {
    var product = 1;

    for(var i=0; i < arr.length; i++){
        for(var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);
//
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
}while (i < 5) 
console.log(i, myArray);
//
var contacts = [
    {
        "firstName":"Akira",
        "lastName":"Laine",
        "number":"0543236543",
        "likes":["Piza", "Coding", "Brouwnie points"]
    },
    {
        "firstName":"Harry",
        "lastName":"Potter",
        "number":"0994372684",
        "likes":["Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName":"Sherlock",
        "LastName":"Holmes",
        "number":"0487345643",
        "likes":["Intriguing Cases", "Violin"]
    },
    {
        "firstName":"kristian",
        "lastName":"Vos",
        "number":"unknown",
        "likes":["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Akira", "likes");

console.log(data);

//
function randomFraction() {
    return 0;
}
console.log(randomFraction());
//
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum(){

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
//
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random()*(ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);

function randomRange(myMin,myMax){

    return 0;
}

var myRandom = randomRange(5, 15);
console.log(myRandom);

//
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" :"zero"
}
console.log(checkSign(10));
//
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
//
const magic = () => new Date();
//
var myConcat= (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));
//
const realNumberArray = [4,5.6, -9.8,3.14];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
}
const squareIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
//

const increment = (function (){
    return function increment(number,value = 1){
        return number + value;
    };
})();
console.log(increment(5,2)); //7
console.log(increment(5));//6





