const members = {

1:{

photo:"Familypics/father.png",

name:"Kiran Kumar",

role:"Chairman & Managing Director",

relation:"Father",

age:"50",

education:"MBA",

occupation:"Business Leader",

experience:"25+ Years",

email:"kiran@gmail.com",

phone:"+91 9876543210",

description:"Founder of Kanigiri Group of Companies. With over two decades of leadership experience, he has successfully guided the family organization through growth, innovation, and excellence."

},

2:{

photo:"Familypics/mother.png",

name:"Sandhya",

role:"Director of Operations",

relation:"Mother",

age:"48",

education:"M.Sc",

occupation:"Operations Manager",

experience:"20+ Years",

email:"sandhya@gmail.com",

phone:"+91 9876543211",

description:"Responsible for planning, administration and ensuring smooth operations of the family organization."

},

3:{

photo:"Familypics/brother.png",

name:"Mahesh",

role:"Business Development Executive",

relation:"Brother",

age:"23",

education:"B.Tech",

occupation:"Student",

experience:"2 Years",

email:"mahesh@gmail.com",

phone:"+91 9876543212",

description:"A passionate learner interested in business management and digital technologies."

},

4:{

photo:"Familypics/me.png",

name:"Mahathi",

role:"Technology & Innovation Lead",

relation:"Daughter",

age:"25",

education:"B.Tech (CSE)",

occupation:"Student",

experience:"4 years",

email:"mahathi@gmail.com",

phone:"+91 9876543213",

description:"Passionate about Web Development, Full Stack Technologies, Cyber Security and Post-Quantum Cryptography research."

},

5:{

photo:"Familypics/grandmother.png",

name:"Lakshmi",

role:"Family Advisor",

relation:"Grandmother",

age:"72",

education:"Graduate",

occupation:"Homemaker",

experience:"40+ Years",

email:"lakshmi@gmail.com",

phone:"+91 9876543214",

description:"Provides guidance, values and wisdom that strengthen the unity and traditions of the family."

},

6:{

photo:"Familypics/grandfather.png",

name:"Venkata Rao",

role:"Senior Advisor",

relation:"Grandfather",

age:"75",

education:"B.A.",

occupation:"Retired Government Officer",

experience:"35+ Years",

email:"venkatarao@gmail.com",

phone:"+91 9876543215",

description:"A retired government officer known for discipline, integrity and decades of public service."

}

};


// Get ID from URL

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const person = members[id];

// Display Data

document.getElementById("photo").src = person.photo;

document.getElementById("name").innerHTML = person.name;

document.getElementById("role").innerHTML = person.role;

document.getElementById("relation").innerHTML =
"<strong>Relationship :</strong> " + person.relation;

document.getElementById("age").innerHTML =
"<strong>Age :</strong> " + person.age;

document.getElementById("education").innerHTML =
"<strong>Education :</strong> " + person.education;

document.getElementById("occupation").innerHTML =
"<strong>Occupation :</strong> " + person.occupation;

document.getElementById("experience").innerHTML =
"<strong>Experience :</strong> " + person.experience;

document.getElementById("email").innerHTML =
"<strong>Email :</strong> " + person.email;

document.getElementById("phone").innerHTML =
"<strong>Phone :</strong> " + person.phone;

document.getElementById("description").innerHTML =
"<strong>About :</strong> " + person.description;
