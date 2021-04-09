var obj =  { name : 'Shan' , age : 21}

function addVal(years,additional=0){
	return this.age + years + additional
}

console.log(addVal.call(obj, 2));

var arr = [2,3]
console.log(addVal.apply(obj,arr));

var bound = addVal.bind(obj);
console.log(bound(1));

var Student = {age:20}

function studentAge(){
	return this.age;
}
var bounded = studentAge.bind(Student);
console.log(bounded())