/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map((student)=>{
        if(student.marks > 50){
            console.log(student);
        }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((student)=>{
        if(student.marks > 50){
            console.log(student);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = {id:4,name:"susan",age:"20",marks:45};
    arr.push(obj);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let filteredArr = arr.filter(student => student.marks > 50);
    console.log(filteredArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 5, name: "captainCool", age: "41", marks: 100 },
        { id: 6, name: "Hitman", age: "36", marks: 100 },
        { id: 7, name: "KingKohli", age: "34", marks: 100 },
    ]
    arr.splice(arr.length, 0, ...newArr);
    console.log(arr);
  }