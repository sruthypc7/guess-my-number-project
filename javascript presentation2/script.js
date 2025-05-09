//topic:for..in,for..of,spread operator,rest parameter,destructuring of arrays and objects
//JavaScript for…in Loop*********

//It is used to iterate over the keys of an object.(extracting keys)
//  Used for objects or when you used to iterate through object keys.

// syntax***********
/* for(let i in objectname)
{
    code to execute
}
*/

//
// program***********
   // let obj2={};






//javascript for...of loop**********

//1. It is used to iterate over values such as arrays, strings, sets, maps.(extracting values)
//2. Returns values directly
//3. Does not work directly with objects.

//syntax
/* for(let i of arrayname)
{
    code to be executed
}
 */

//program*********
    //let arr=[];







// javascript Destructuring of arrays and objects

//1.It is used to unpacking values from arrays and objects into separate variable(each value have separate variable)
//2.Extracting values to separate variables.
//3. variable name should be same as keyname(object)
//4. variable name can different with valuename in array.but order should be maintained(array)

//syntax*******
//let {keyname1,}=Objectname;   variablename and keyname are same


//program (object)******

let object5=[9,10,76]
let [val2,val8,val3]=object5
console.log(val8,val2,val3);




//change variable name*******
//syntax********
//let{name:username}=objectname;
//program*************







//access nested objects and change variable name
let obj={name:'anu',
    age:10,
    place:'kollam',
    carrier:{sslc:2015,plustwo:2017}
};
let {name,age,place,carrier:{sslc}}=obj;
console.log(sslc);

//program array**********






//skipping values from array******

//spread operator(...)   *************
//1. It is used to expand an array or object into individual element.
//Used for copying.
//Used for merging.

//copied array program(spread operator using) *******







//merged array program (spread operator using)**********





//adding new value to array*********
//object using spread operator program *************










//Rest parameter(...) **********
//1.It allows,function to accept infinite number of arguments as an array.
//2.Arguments will be stored in array.
//3.rest parameter must be used after the other arguments.

//example program
let arr=[1,2,3];
function value(...arr2)
{
console.log(arr2);
}

value(...arr);



