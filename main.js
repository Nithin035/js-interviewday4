//1
// function tempo(){
//     message="hello tempo"
//     let message
// }
// tempo()

//2.map&filter
let map2=[10,20,30,40]
let modified= map2.map(function(element){
    return element*2
})
console.log(modified)
//filter
let fill=["pavan","nithin"]
let c=fill.filter(item=>item=String)
console.log(c)

//or
let fill1=[10,20,30]
let d=fill1.filter(item=>item>10)
console.log(d)

//3 passed by value 
let a=20
let b=a
b=a+5;
console.log(a);
console.log(b);
//passed by reference
let obj1={
    name:"nithin",
    age:23
}
let obj2=obj1
obj2.age=24
console.log(obj1)
console.log(obj2)

//4 arrow 
let arrow=((x,y)=>{
    result =x*y
    return result
})
let result1=arrow(10,20)
console.log(result1)

//5
 const person={
    name:"nithin",
    age:30,
    occupation:"engineer"
 }
 for(const key in person){
    console.log(key +":"+person[key])
 }
//6
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
//7
const mysym=Symbol()
const myobj1={
    [mysym]:"hello world!"
}
console.log(myobj1[mysym])

//8
let x;
function foo(){
 console.log(x)
}
foo()

//null
let y= null;
function poo1(){
    console.log(y)
}
poo1()