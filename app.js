var counter=999; 

const allEmployee=[];
function Employee(fullName,department,level,image){
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.image=image;
    this.generating= function(){
        this["id"]=++counter;

    }
    this.calSalary= function(level) {
        let max, min;
        switch(level){
        case "Senior": max=2000, min=1500;
        break;
        case "Mid-Senior": max=1500, min=1000;
        break;
        case "Junior": max=1000, min=500;
        break;
        }

        let fallSalary=( Math.floor(Math.random() * (max - min) ) + min) ;
        let tax=fallSalary*0.075
        this["salary"]=fallSalary-tax;
    }

    this.generating();
    this.calSalary(level);
    allEmployee.push(this);
}

const employeeOne =new Employee("Ghazi Samer","Administration","Senior","https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1659445682~exp=1659446282~hmac=62511702532c184ced26b6d42389c01d3e7590c17c9963a0f5ae6338bd3d5a7c")
const employeeTwo =new Employee("Lana Ali","Finance","Senior","https://img.freepik.com/free-photo/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling_295783-39.jpg?w=740&t=st=1659445726~exp=1659446326~hmac=adb9c6840dcbf21c08785b0893a74d7cf66020bc39012ffb04c54ddee0e39968")
const employeeThree =new Employee("Tamara Ayoub","Marketing","Senior","https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1659445719~exp=1659446319~hmac=eb21dd98fbcec5b50d3522ab0b9fd8f0f35c901023e12ea7f2faddf6421b01d2")
const employeeFour =new Employee("Safi Walid","Administration","Mid-Senior","https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1659445722~exp=1659446322~hmac=cc47d41846a064b5954d4ffbd265b909fa7fc21a11d820e2a56d5b3aa04ddb38")
const employeeFive =new Employee("Omar Zaid","Development","Senior","https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?w=740&t=st=1659445725~exp=1659446325~hmac=e4eb95770559e37b87eaefd08717f6d39919f37240e9d684b3b3ccd9d28e4ef6")
const employeeSix =new Employee("Rana Saleh","Development","Junior","https://img.freepik.com/free-photo/photo-positive-european-female-model-makes-okay-gesture-agrees-with-nice-idea_273609-25629.jpg?w=740&t=st=1659445737~exp=1659446337~hmac=998e7e7b614b7b657654ae61f94601590f52111964b117838899ac8a187c6ad9")
const employeeSeven =new Employee("Hadi Ahmad","Finance","Mid-Senior","https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=740&t=st=1659445714~exp=1659446314~hmac=7216114a8a927e7526a48ca2d650ff753399c2054c3e921c2df31dc1227d6d2f")

Employee.prototype.render=function(){
    document.write(`<p> <b>Employee name: </b>${this.fullName} <br> <b>Department: </b>${this.department} <br> <b>Employee salary: </b>${this.salary}<br><br><\p>`)
}

for(let i=0 ; i<allEmployee.length; i++){
    allEmployee[i].render();
    }