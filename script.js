
const roles=[
"Cloud Engineer",
"DevOps Engineer",
"AWS Learner",
"Kubernetes Enthusiast"
];

let roleIndex=0;
let charIndex=0;

const typingText=document.querySelector(".typing-text");

function typeEffect(){

if(charIndex<roles[roleIndex].length){

typingText.textContent+=roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}

else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex>0){

typingText.textContent=roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}

else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(typeEffect,300);

}

}

typeEffect();
