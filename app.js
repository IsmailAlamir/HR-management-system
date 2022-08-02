var counter=999; 

const employeeOne = {
    ID:"",
    fullName: "Ghazi Samer",
    department:"Administration",
    level:"Senior",
    image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1659445682~exp=1659446282~hmac=62511702532c184ced26b6d42389c01d3e7590c17c9963a0f5ae6338bd3d5a7c",
    salary:"",
    generating: function(){
        this.ID=++counter;
    },
    calSalary: function() {
        let fallSalary=( Math.floor(Math.random() * (2000 - 1500) ) + 1500) ;
        let tax=fallSalary*0.075
        this.salary=fallSalary-tax ; 
    }

  }

  const employeeTwo = {
    ID:"",
    fullName: "Lana Ali",
    department:"Finance",
    level:"Senior",
    image: "https://img.freepik.com/free-photo/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling_295783-39.jpg?w=740&t=st=1659445726~exp=1659446326~hmac=adb9c6840dcbf21c08785b0893a74d7cf66020bc39012ffb04c54ddee0e39968",
    salary:"",
    generating: function(){
        this.ID=++counter;
    },
    calSalary: function() {
        let fallSalary=( Math.floor(Math.random() * (2000 - 1500) ) + 1500) ;
        let tax=fallSalary*0.075
        this.salary=fallSalary-tax ; 
    }

  }


  const employeeThree = {
    ID:"",
    fullName: "Tamara Ayoub",
    department:"Marketing",
    level:"Senior",
    image: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1659445719~exp=1659446319~hmac=eb21dd98fbcec5b50d3522ab0b9fd8f0f35c901023e12ea7f2faddf6421b01d2",
    salary:"",
    generating: function(){
        this.ID=++counter;
    },
    calSalary: function() {
        let fallSalary=( Math.floor(Math.random() * (2000 - 1500) ) + 1500) ;
        let tax=fallSalary*0.075
        this.salary=fallSalary-tax ; 
    }

  }

  const employeeFour = {
    ID:"",
    fullName: "Safi Walid",
    department:"Administration",
    level:"Mid-Senior",
    image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1659445722~exp=1659446322~hmac=cc47d41846a064b5954d4ffbd265b909fa7fc21a11d820e2a56d5b3aa04ddb38",
    salary:"",
    generating: function(){
        this.ID=++counter;
    },
    calSalary: function() {
        let fallSalary=( Math.floor(Math.random() * (1500 - 1000) ) + 1000) ;
        let tax=fallSalary*0.075
        this.salary=fallSalary-tax ; 
    }

  }



  const employeeFive = {
    ID:"",
    fullName: "Omar Zaid",
    department:"Development",
    level:"Senior",
    image: "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?w=740&t=st=1659445725~exp=1659446325~hmac=e4eb95770559e37b87eaefd08717f6d39919f37240e9d684b3b3ccd9d28e4ef6",
    salary:"",
    generating: function(){
        this.ID=++counter;
    },
    calSalary: function() {
        let fallSalary=( Math.floor(Math.random() * (2000 - 1500) ) + 1500) ;
        let tax=fallSalary*0.075
        this.salary=fallSalary-tax ; 
    }

  }

  const employeeSix = {
    ID:"",
    fullName: "Rana Saleh",
    department:"Development",
    level:"Junior",
    image: "https://img.freepik.com/free-photo/photo-positive-european-female-model-makes-okay-gesture-agrees-with-nice-idea_273609-25629.jpg?w=740&t=st=1659445737~exp=1659446337~hmac=998e7e7b614b7b657654ae61f94601590f52111964b117838899ac8a187c6ad9",
    salary:"",
    generating: function(){
        this.ID=++counter;
    },
    calSalary: function() {
        let fallSalary=( Math.floor(Math.random() * (1000 - 500) ) + 500) ;
        let tax=fallSalary*0.075
        this.salary=fallSalary-tax ; 
    }

  }

  
  const employeeSeven = {
    ID:"",
    fullName: "Hadi Ahmad",
    department:"Finance",
    level:"Mid-Senior",
    image: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=740&t=st=1659445714~exp=1659446314~hmac=7216114a8a927e7526a48ca2d650ff753399c2054c3e921c2df31dc1227d6d2f",
    salary:"",
    generating: function (){
        this.ID=++counter;
    },
    calSalary: function() {
        let fallSalary=( Math.floor(Math.random() * (1500 - 1000) ) + 1000) ;
        let tax=fallSalary*0.075
        this.salary=fallSalary-tax ; 
    }

  }
  
const allEmployee =[employeeOne,employeeTwo,employeeThree,employeeFour,employeeFive,employeeSix,employeeSeven];

for(let i=0 ; i<allEmployee.length; i++){
    allEmployee[i].generating();
    allEmployee[i].calSalary();
    console.log(`Employee name: ${allEmployee[i].fullName} \nEmployee salary: ${allEmployee[i].salary}\n\n`)    
    }
