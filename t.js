let separator = '********************';
var obj = {
    param1: 'something',
    param2: 'somethingelse',
    param3: 'another'
 }
 
 console.log(obj);
 console.log( typeof(obj) );
 obj["param4"] = 'yetanother';
 
 function obj2QueryString(obj){
    let str = "";
    for (let key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + obj[key];
    }
   return str;
 }

 let str = obj2QueryString(obj);
 console.log(str);
 console.log(separator);
 
 /**************
  * https://segmentfault.com/a/1190000012673854
  * https://www.toutiao.com/i6745692634074841603/?tt_from=copy_link&utm_campaign=client_share&timestamp=1576606421&app=news_article&utm_source=copy_link&utm_medium=toutiao_ios&req_id=20191218021341010014041148038DC8A4&group_id=6745692634074841603
  * https://www.sitepoint.com/shorthand-javascript-techniques/
  * **************************************** */
 
 let i=1;
 var l;
 const j=obj;
 const m=i>1? true:false;
 console.log( typeof(i) );
 console.log(i);

 console.log( typeof(l) );
 console.log(l);

 console.log( typeof(j) );
 console.log(j);

 console.log( typeof(m) );
 console.log(m);

 console.log(separator);

 let x,y,z=3;
 console.log( typeof(x) );
 console.log(x);
 console.log( typeof(y) );
 console.log(y);
 console.log( typeof(z) );
 console.log(z);

 console.log(separator);

 var likeJavaScript=null;  // the type of null is object  //https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 console.log(typeof(likeJavaScript));
 if(likeJavaScript)
    console.log(`likeJavaScript is presence`);
else    
    console.log(`likeJavaScript is not presence`);

console.log(separator);
let a=null;  // a is undefined value & type
if(!a){
    console.log('false');
}

console.log(separator);
console.log("JavaScript循环简写方法");
function aFunc(element,index,array){
    //console.log(array);
    console.log('arr['+ index +']=' + element);
}
let arr = [2,5,9];
arr.forEach(aFunc);

console.log(separator);
console.log("短路评价");

console.log(process.env.DB_HOST);
let b;
let c=null;
if(c===null) console.log('"null"');
if(b===undefined) console.log('"undefined"');


const dbHost = process.env.DB_HOST || 'localhost';
console.log(dbHost);

console.log(separator);
console.log("十进制指数");
let num = 1e8;
let num1 = 1e-5;
console.log(`num = ${num}, num1=${num1}`);

console.log(separator);
console.log("如果属性名与key名相同，则可以采用ES6的方法");
const xx = 1920, yy = 1080;
const obj1 = { xx: xx , yy : yy}
console.log(obj1);

const obj2 = {xx,yy}
console.log(obj2);

console.log(separator);
console.log("箭头函数简写");
function sayHello(name){
    console.log('Hello',name);
}

sayHello('abc');

arr.forEach(function(item,i,e){
    console.log(item,i,e);
});

sayHello1 = (name, age)  => console.log('Hello',name, age);
sayHello1('aa',33);

arr.forEach((item,i)=>{console.log(item,i)});

console.log(separator);
console.log("经常使用return语句来返回函数最终结果，一个单独语句的箭头函数能隐式返回其值（函数必须省略{}为了省略return关键字）");

var func = function func(){
    return { foo: 1};
};

var calcCircumFerence = diameter =>(
    Math.PI * diameter
);
//calcCircumFerence(3);
console.log(calcCircumFerence(3));

var func1 = ()=>({foo:1});
let aVal = func();
console.log(aVal);
let bVal = func1();
console.log(bVal);

console.log(separator);
console.log("为了给函数中参数传递默认值，通常使用if语句来编写，但是使用ES6定义默认值，则会很简洁");
volume = (l, w=3,h=4)=>(l* w * h);
console.log(typeof(volume));
console.log(volume);
console.log(volume(2));

console.log(separator);
console.log("在web框架中，经常需要从组件和API之间来回传递数组或对象字面形式的数据，然后需要解构它");
let outputStr=`
import { observable, action, runInAction} from 'mobx';
const { store, form, loading, errors, entity : contact } = this.props; //分配变量名 contact`
console.log(outputStr);

console.log(separator);
console.log("扩展运算符简写");
const odd =[1,3,5];
const nums = [2,4,6].concat(odd);
const nums1 = [2,7,6, ...odd,9,10];
console.log(nums);
console.log(nums1);

const arr1 = [1,2,3,4];
const arr2 = arr1.slice();
const arr3 = arr1;
const arr4 = [...arr1];
console.log(arr2);
console.log(arr3);
console.log(arr4);

const {x1,y1,...z1} = {x1:1,y1:2,u1:3,v1:4};
console.log(typeof(x1));
console.log(x1);
console.log(typeof(y1));
console.log(y1);
console.log(typeof(z1));
console.log(z1);

console.log(separator);
console.log("强制参数简写");
function foo(bar){
    if(bar===undefined){
        throw new Error('Missing parameter!');
    }
    return bar;
}

//foo();

mandatory = () => { throw new Error('Missing parameter!'); }

//console.log(mandatory());

foo1= (bar = mandatory()) =>{
    return bar;
}

console.log(foo1('a'));
//foo1();

console.log(separator);
console.log("Array.find简写");

const pets = [{type : 'Dog', name : 'Max'},{type : 'Cat', name : 'Karl'},{type : 'Dog', name : 'Tommy'}];

let findDog = (type='Dog',name='Tommy')=>{
    pets.find(pet => pet.type == type && pet.name== name);
}

console.log(findDog('Cat','Karl'));

console.log(separator);
console.log("Object[key]简写");

const schema = {
    first :{
        required : true
    },
    last : {
        required : true
    }
}

const validate = (schema,values) =>{
    for(field in schema){
        if(schema[field].required){
            if(!values[field]){
                return false;
            }
        }
    }
    return true;
}

console.log(validate(schema,{first : 'Bruce'}));
console.log(validate(schema,{first : 'Bruce', last : 'Cao', thrid : 1}));

console.log(separator);
console.log("双重非位运算简写");
console.log(Math.floor(4,9)===4);
console.log(~~4.9===5);
