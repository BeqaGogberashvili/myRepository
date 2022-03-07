console.log(localStorage);

fetch('https://bootcamp-2022.devtest.ge/api/skills')
  .then(response => response.json())
  .then(data => fetchSkills(data))

  function fetchSkills(data) {
    data.map(e => {
        const skillsSelector = document.querySelector("#skills")
        skillsSelector.innerHTML += `<option value='`+ e.title + `'>` + e.title + `</option>`
    })
}
function advance() {
    location.replace("./covid.html");
}




function addHtml(check, par) {
    const div = document.createElement('div');
    const skills = document.getElementById('skills').value;
    const exp = document.getElementById('yearsExp').value;
    const vv = localStorage.getItem(skills); 

    if(check !== undefined){
        div.className = 'mine';      
        div.innerHTML = `
        <h3>` + par + `</h3>
        <h4> Years of Experience: ` + check + `</h4>
        <button class="butt" onclick="removeHtml(this, '` + par + `')"><img src="../img/Remove.png"  alt=""></button>
        `;
        document.getElementById('area').appendChild(div);
        localStorage.setItem(skills, check);
        const one = document.getElementById("nextButton");
        const two = document.getElementById("nextButton2");
        one.addEventListener('click', advance);
        two.addEventListener('click', advance);
    } else if (exp !== "" && !vv) {
        div.className = 'mine';      
        div.innerHTML = `
        <h3>` + skills + `</h3>
        <h4> Years of Experience: ` + exp + `</h4>
        <button class="butt" onclick="removeHtml(this, '` + skills + `')"><img src="../img/Remove.png"  alt=""></button>
        `;
        document.getElementById('area').appendChild(div);
        localStorage.setItem(skills, exp);
        const one = document.getElementById("nextButton");
        const two = document.getElementById("nextButton2");
        one.addEventListener('click', advance);
        two.addEventListener('click', advance);
    }

  }
  

  const check1 = localStorage.getItem("HTML");
  if(check1){
      addHtml(check1, "HTML");
  }
  const check2 = localStorage.getItem("CSS");
  if(check2){
      addHtml(check2, "CSS");
  }
  const check3 = localStorage.getItem("PHP");
  if(check3){
      addHtml(check3, "PHP");
  }
  const check4 = localStorage.getItem("Laravel");
  if(check4){
      addHtml(check4, "Laravel");
  }
  const check5 = localStorage.getItem("React.JS");
  if(check5){
      addHtml(check5, "React.JS");
  }
  const check6 = localStorage.getItem("Vue.JS");
  if(check6){
      addHtml(check6, "Vue.JS");
  }
  const check7 = localStorage.getItem("Svelte");
  if(check7){
      addHtml(check7, "Svelte");
  }
  const check8 = localStorage.getItem("Angular");
  if(check8){
      addHtml(check8, "Angular");
  }

  






function removeHtml(input, lang) {
    document.getElementById('area').removeChild(input.parentNode);
    localStorage.removeItem(lang);


    if(localStorage.getItem("HTML") === null && localStorage.getItem("CSS") === null && localStorage.getItem("PHP") === null && localStorage.getItem("Laravel") === null && localStorage.getItem("React.JS") === null && localStorage.getItem("Vue.JS") === null && localStorage.getItem("Svelte") === null && localStorage.getItem("Angular") === null){
        const one = document.getElementById("nextButton");
        const two = document.getElementById("nextButton2");
        one.removeEventListener('click', advance);
        two.removeEventListener('click', advance);
        
      }
}


// const one = document.getElementById("nextButton");
//     one.addEventListener('click', function(){
//         alert("Do not leave empty!");
//     });



