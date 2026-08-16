var studentStr=`{"name":"Rahul","age":21,
\"courses":["Node.js","MongoDB"],"RollNo":101,\
"College":"ABC college"}`;
var stuobj=JSON.parse(studentStr);
console.log(stuobj.name);
console.log(stuobj.courses);
console.log(stuobj.RollNo);