
import { userInfo } from "os";

//babeljs.io es6 to es5 safe in browser transpile 
//traceur

//destructuring
// object
var foo ={
    bar : 1,
    baz : 2
};
var { bar , baz } = foo;
console.log('**********');
console.log(`bar=${bar}, baz=${baz}`);

// array
var tenses = ["me", "you", "he"];

var [ firstPerson, secondPerson ] = tenses;
console.log(`firstPeson=${firstPerson}, secondPerson=${secondPerson}`);

//Structuring
var foo = 2;
var obj = { 
    bar : 1,
    foo,
    baz : 3
};

console.log(obj);

// 
var name = 'will';
var age = 34;
//some.method({ name, age});

/*basically passing the object
{
    name : name,
    age : age
}
*/

// Example 
var name='Will';
var obj={
    ['name' + name] : "some value"
}  // it creates a prop nameWill of the object.

// Example
function calcBmi(weight, height){
    return weight / Math.pow(height, 2);
}

var calcBmiArrow = (weight,height) =>(
    weight / (height**2)
)

console.log(calcBmi(180,180));
console.log(calcBmiArrow(180,180));

// Good Example

function calcBmi1({ weight , height : h, max=25, callback}){
    var bmi = weight / h**2; //Math.pow(height,2);
    if(bmi>max){
        console.log("you're overweight");
    }
    else{
        console.log("You're nomral ");
    }
    if(callback){
       callback(bmi); 
    }
}
let weight =180;
let height =180;

calcBmi1({ weight, height, max:25});
calcBmi1({ height, weight, callback : function(val){ console.log( val )} });

// Template Strings

// Block scoping
var a =1;
function method() {
    var b =2;
}
//console.log(b);  // b is not defined  function blocking own scope

if(true){            //block scoping  better use let
    var c =3;
}
console.log(`c=${c}`);

//class

//arrow function  automatically do binding with arrow function
var module = {
    age : 1,
    foo : function(){
        setTimeout(function(){
            console.log(this.age);
        }.bind(this),100);
    },
    foo1 : function(){
        setTimeout(()=>{ 
            console.log(this.age);
        },100);    
    }
};
module.foo1();

var arr = [0,1,2].map(val=>val+1);
console.log(arr);


//Generator functions


// Module
// default export
// standard export

export default use
export { printName, printAge}
