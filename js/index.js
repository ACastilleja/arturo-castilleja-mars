//Footer element
var footerElement = document.createElement('footer');
document.body.appendChild(footerElement);

// Copyright Text in Footer variables
var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');

//Adding variables to p element of copyright
copyright.innerHTML = ` Arturo Castilleja ${thisYear} &copy;`;

//adding class to footer for css styling
footer.classList.add('footer');

//appending copyright to footer and to html body
footer.appendChild(copyright);
document.body.appendChild(footer);

//List of Skills array
var skills = ["Javascript","Python","HTML","CSS","GitHub"]

//Skills List Variables
var skillsSection = document.getElementById("Skills");
var skillsList = skillsSection.querySelector('ul');
skillsList.classList.add('skill-list');
//for Loop
for (var i=0; i<skills.length;i++){
    var skill = document.createElement('li');
    skill.textContent = skills[i];
    skill.classList.add('skill-item');
    skillsList.appendChild(skill);
}

// Handling Message Form Submit
var messageForm = document.getElementsByName('leave_message')[0];

messageForm.addEventListener('submit',(event)=>{

    event.preventDefault();

    var userName = event.target.usersName.value;
    var userEmail = event.target.usersEmail.value;
    var userMessage = event.target.usersMessage.value;

    console.log('Username:', userName);
    console.log('Email:',userEmail);
    console.log('Message:',userMessage);
});







