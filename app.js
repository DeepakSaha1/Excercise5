'use strict';

function simpleInterest() {
  var amount = prompt("Enter amount: ","");

  var interest_rate = prompt("Enter interest rate: ", "");
  var  num_years = prompt("Enter number of years: ", "");
  var simple_interest;

  if (amount!= null && interest_rate != null && num_years != null) {

      document.getElementById("amount").innerHTML = "Amount: " + amount;
      document.getElementById("interest").innerHTML = "Total Interest: " + interest_rate;
      document.getElementById("years").innerHTML = "Total Years: " + num_years;
      simple_interest = (amount * interest_rate * num_years) / 100;

      document.getElementById("SI").innerHTML = "Simple Interest: " + simple_interest;

  }
}

function isPalindrome() {
  var str = prompt("Enter a string to check: ", "");
  var len = str.length;
  var mid = Math.floor(len/2);

  for(var i = 0; i < mid;  i++ ) {
    if (str[i] !== str[len - 1 - i]) {
           alert(str +" not Palindrome.");
       }
  }
  alert(str +" is Palindrome.");;
}

function areaCircle() {
  var radius = prompt("Enter radius for CIRCLE: ", "");
  var area = 2.14 * radius * radius;

  alert("Required Circle Area: " + area);
}
var person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue"
};

var personCopy = {};

function copyObj() {
  for (var key in person) {
  personCopy[key] = person[key];
  }

  console.log(personCopy);
  console.log(personCopy.firstName);
}

var Employee = [
    { Name: 'Jhon', Age: 34, Salary: 10000, DOB: '16/08/1096' },
    { Name: 'Peter', Age: 18, Salary: 11500, DOB: '1/06/1096' },
    { Name: 'Mohan', Age: 55, Salary: 700, DOB: '11/04/1086' },
    { Name: 'Bob', Age: 21, Salary: 35000, DOB: '6/12/1094' },
    { Name: 'Sam', Age: 29, Salary: 45000, DOB: '11/4/1096' },
];



function listEmployee() {
  var len = Employee.length;
  var employeeName = "";
  var trainee = "";
  var software_engineer = "";
  var senior_engineer = "";
  
  for(var i = 0; i<len; i++) {
    if(Employee[i].Salary > 5000) {
      employeeName += Employee[i].Name + ", ";
    }

    if(Employee[i].Age < 20) {
      trainee += Employee[i].Name + " ";
    } else if (Employee[i].Age >= 21 && Employee[i].Age <35) {
      software_engineer += Employee[i].Name + ", ";
    } else {
      senior_engineer += Employee[i].Name + ", ";
    }

    if(Employee[i].Salary < 1000 && Employee[i].Age > 20) {
      Employee[i].Salary  *= 5;
    }
  }

  // alert(employeeName);
  // alert(trainee);
  document.getElementById("salary_less").innerHTML = "Employee salary greater than 5000: " + employeeName;
  document.getElementById("trainee").innerHTML = "Trainee Age < 20: " + trainee;

  // alert(software_engineer);

  document.getElementById("software_engineer").innerHTML = "21 =< Software_Engineer_list Age < 35: " + software_engineer;

  // alert(senior_engineer);
  document.getElementById("senior_engineer").innerHTML = "Senior_Engineer_list Age >= 35: " + senior_engineer;
  document.getElementById("salary_inc").innerHTML = Employee[2].Salary;

  // document.getElementById("disable").disabled = true;

}
