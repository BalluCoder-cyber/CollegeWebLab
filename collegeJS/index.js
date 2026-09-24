// const student = {
//     name: 'Balwant' ,
//     age:40,
//     marks:59,
//     pass:"first divison",

// }
// console.log(student.pass);
// console.log(student.age);

// let marks = prompt("Enter student marksk");
// if(marks >80){
//     console.log("A+");
// }else if(marks < 80 && marks > 70){
//     console.log("A");
// }else if(marks < 70 && marks > 60){
//     console.log("B");
// }else if(marks < 60 && marks > 40){
//     console.log("C");
// }else if(marks < 40 && marks > 33){
//     console.log("D");
// }else{
//     console.log("fail");
// }


switch(true){
    case (marks > 85):
        console.log("A+");
        break;
    case(marks > 70 && marks <85):
       console.log("A");
       break;
    case(marks>50 && marks<70):
       console.log("B");
       break;
    default:
        console.log("filed");

}

//problem
let arr = [];
let arr2 =[];
for(let i=0; i<2; i++){
let pr = prompt("Enter your value");
arr[i] = pr;
}
console.log(arr);

for(let i of arr){
    arr2[i] = i*2;
}
console.log(arr2);

for (let key in arr2) {
   console.log(key);
    
}