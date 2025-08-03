/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here

var result=area/2;
console.log(result);

// done-01

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money>=25000){
    console.log('Laptop');
}
else if(money>=10000){
    console.log('Cycle');
}
else{
    console.log('Chocolate')
}
// done-02;

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here
for(let i=1; i<=lastDay; i++){
    if(i%3===0){
        console.log(i + '-' + 'medicine');
    }else{
        console.log(i + '-' + 'rest');
    }
    
}
// done-03;

/** Problem 04 - (Delete / Store) */
var fileName= "data.docx";
//write your code here
if(fileName.startsWith('#')||fileName.endsWith('.pdf') || fileName.endsWith('.docx') ){
    console.log('Store');
}
else{
     console.log('Delete');
}

// done-04

/** Problem 05 - ( PH Email Generator )  */
var student= { 
    name: "jhanku" ,
     roll:1014 ,
     department: "cse"
     };
//write your code here
 var fullName=student['name']
 var rollNumber=student.roll
 var departmentName=student['department']
 var gmail=fullName+rollNumber+'.'+departmentName+'@ph.ac.bd';
 console.log(gmail);

// done-05;

/** Problem 06 : (Current Salary ) */
var experience = 30;
var startingSalary = 45000;
//write your code here 
for(let i = 1; i <= experience; i++) {
startingSalary=startingSalary+(startingSalary*5)/100;
}
newSalary=startingSalary.toFixed(2);
newSalary=Number(newSalary)
console.log(newSalary);

// done-06;

// assingment dox link:

 
 
 
//     https://docs.google.com/document/d/1vVVdK72by0f9nnA2fIPxHQqMxadySbcsSXY-8Ft8l5k/preview?tab=t.0#
 
