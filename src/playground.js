// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Carrot", "Cucumber", "Radish", "Tomato", "Pepper"];

// console.log([...fruits, ...vegetables]);

const developer = {
	salary: 100000,
	experience: 4.5,
	techStack: ["React", "Vue", "Angular", "HTML", "CSS", "JavaScript"],
	lookingForWork: true,
	doubleSalary() {
		this.salary = this.salary * 2;
		this.lookingForWork = false;
	},
};

console.log("Developer: ", developer);
console.log("Salary: ", developer.salary);
console.log("Looking for work: ", developer.lookingForWork);

developer.doubleSalary();
console.log("Salary: ", developer.salary);
console.log("Looking for work: ", developer.lookingForWork);
