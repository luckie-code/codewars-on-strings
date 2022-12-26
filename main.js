//8KYU if you can't sleep, just count sheep!!

//Giveon a non-integer, 3 for example,
//return a string with a murmur:"1 sheep...2 sheep..3 sheep...". input will always be valid,
//i.e no negative numbers

var countSheep = function(num){
    let x = ""
    for(i=1; i <= num; i++){
        //concatenating with literal notation
      x += "${i}sheep... "  
    }
    return x;
}

console.log(countSheep[1,2,3,4])
//Create a function that gives a personalized greeting . This function takes two parameters: name and owner.
//use conditionals to return the proper message: 

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}

function greet(name, owner) {
    if(name === owner) {
        return 'Hello boss';
    }
    return 'Hello guest';
}

//simple,remove the spaces from the string then return the resultant string

function noSpace(x){
    return x.replace(/\s/g, '');
}
console.log(noSpace("i am coming"))

// /s is the regex for "whitespace and g is the "global" flag, meaning match All /s(whitespaces)


//we need a function that can transform a string into a number , what are ways of achieving this do you know?

const stringToNumber = function(str) {
    return Number(str)
}