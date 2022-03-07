
const check1 = localStorage.getItem("firstName");
const check2 = localStorage.getItem("lastName");
const check3 = localStorage.getItem("email");
const check4 = localStorage.getItem("phone-mask");



function advance() {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const tel = document.querySelector("#phone-mask");

  if(firstName.value.length < 3){
    const fn = document.getElementById("firstName");
    fn.classList.add("error");
  }
  if(lastName.value.length < 3){
    const fn = document.getElementById("lastName");
    fn.classList.add("error");
  }
  if(email.value.length < 3){
    const fn = document.getElementById("email");
    fn.classList.add("error");
  }
  if(tel.value.length !== 13 || tel.value.charAt(0) != "+" || tel.value.charAt(1) != "9" || tel.value.charAt(2) != "9" || tel.value.charAt(3) != "5" ){
    const fn = document.getElementById("phone-mask");
    fn.classList.add("error");
  }

  if( firstName && firstName.value.length > 2 && lastName && lastName.value.length > 2 && email && email.value.length > 2 && tel && tel.value.length > 2 && tel.value.length === 13 && (tel.value.charAt(0) == "+" && tel.value.charAt(1) == "9" && tel.value.charAt(2) == "9" && tel.value.charAt(3) == "5" )){
      localStorage.setItem("firstName", firstName.value);
      localStorage.setItem("lastName", lastName.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("phone-mask", tel.value);
      location.replace("./technicalSkillset.html");      
  }

}

document.querySelector("#nextButton").addEventListener("click", advance);
document.querySelector("#nextButton2").addEventListener("click", advance);


  if(check1 && check2 && check3 && check4){
    document.getElementById("firstName").value = localStorage.getItem("firstName");
    document.getElementById("lastName").value = localStorage.getItem("lastName");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("phone-mask").value = localStorage.getItem("phone-mask");

    const one = document.getElementById("nextButton");
    const two = document.getElementById("nextButton2");
    one.addEventListener('click', function(){
        location.replace("./technicalSkillset.html");
    });
    two.addEventListener('click', function(){
        location.replace("./technicalSkillset.html");
    });
  }

