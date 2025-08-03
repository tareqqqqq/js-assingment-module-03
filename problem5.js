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
// done