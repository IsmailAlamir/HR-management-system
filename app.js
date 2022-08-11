var counter = 999;
const mainEl = document.getElementsByTagName('main');
const allEmployee = [];
function Employee(fullName, department, level, image) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.generating = function () {
        this["id"] = ++counter;

    }
    this.calSalary = function (level) {
        let max, min;
        switch (level) {
            case "Senior": max = 2000, min = 1500;
                break;
            case "Mid-Senior": max = 1500, min = 1000;
                break;
            case "Junior": max = 1000, min = 500;
                break;
        }

        let fallSalary = (Math.floor(Math.random() * (max - min)) + min);
        let tax = Math.floor(fallSalary * 0.075)
        this["salary"] = fallSalary - tax;
    }

    this.generating();
    this.calSalary(level);
    allEmployee.push(this);
}

const employeeOne = new Employee("Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg")
const employeeTwo = new Employee("Lana Ali", "Finance", "Senior", "./assets/Lana.jpg")
const employeeThree = new Employee("Tamara Ayoub", "Marketing", "Senior", "./assets/Tamara.jpg")
const employeeFour = new Employee("Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg")
const employeeFive = new Employee("Omar Zaid", "Development", "Senior", "./assets/Omar.jpg")
const employeeSix = new Employee("Rana Saleh", "Development", "Junior", "./assets/Rana.jpg")
const employeeSeven = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg")



Employee.prototype.render = function () {
    
    const divEl = document.createElement('div');
    mainEl[0].appendChild(divEl);

    const imgEl = document.createElement('img');
    imgEl.src = this.image;
    imgEl.alt = this.fullName;
    
    divEl.appendChild(imgEl);
    const pEl = document.createElement('p');
    divEl.appendChild(pEl);

    pEl.textContent =`name : ${this.fullName} - ID : ${this.id} Department : ${this.department} - Level : ${this.level} ${this.salary}`
}

// Employee.prototype.render=function(){
//     document.write(`<p> <b>Employee name: </b>${this.fullName} <br> <b>Department: </b>${this.department} <br> <b>Employee salary: </b>${this.salary}<br><br><\p>`)
// }

for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].render();
}