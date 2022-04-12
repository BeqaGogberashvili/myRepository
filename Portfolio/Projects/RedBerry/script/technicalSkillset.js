
// Getting Skills list from API and fetching them. 

fetch('https://bootcamp-2022.devtest.ge/api/skills')
  .then(response => response.json())
  .then(data => fetchSkills(data))

    // Writing them into HTML as option values

  function fetchSkills(data) {
    data.map(e => {
        const skillsSelector = document.querySelector("#skills")
        skillsSelector.innerHTML += `<option value='`+ e.title + `'>` + e.title + `</option>`
    })
}

    function advance() {
    location.replace("./covid.html");
}

    // Function below checks if localStorage has saved skills. It gets 2 parameters, skill name and experience. Process of saving skills in localStorage is written below this function.

    //This function creates as many <div>'s as user has added skills. Each one gets same class and img that serves removing purpose. removeHtml() function does that and is written at the end of this JS.
    
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
  
  // Checking each result of saved skills and giving above functions parameters accordingly.

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

// Using parameters function identifies which <div> must be removed

function removeHtml(input, lang) {
    document.getElementById('area').removeChild(input.parentNode);
    localStorage.removeItem(lang);

// if() there is no saved record of skills in localStorage then right arrow looses it's ability to advance to next page.

    if(localStorage.getItem("HTML") === null && localStorage.getItem("CSS") === null && localStorage.getItem("PHP") === null && localStorage.getItem("Laravel") === null && localStorage.getItem("React.JS") === null && localStorage.getItem("Vue.JS") === null && localStorage.getItem("Svelte") === null && localStorage.getItem("Angular") === null){
        const one = document.getElementById("nextButton");
        const two = document.getElementById("nextButton2");
        one.removeEventListener('click', advance);
        two.removeEventListener('click', advance);
        
      }
}






