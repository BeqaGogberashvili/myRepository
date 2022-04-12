const f = localStorage.getItem("work_preference");
const s = localStorage.getItem("had_covid");
const t = localStorage.getItem("vaccinated");
const dateInput1check = localStorage.getItem("had_covid_at");
const dateInput2check = localStorage.getItem("vaccinated_at");

// Here I check if localStorage already has saved radio answers and in that case make them appear .checked if page refreshes 

if(f){
    if(f == "from_office"){
        const sel = document.getElementById("sairme");
        sel.checked = true;
    } if (f == "from_home"){
        const sel = document.getElementById("home");
        sel.checked = true;
    } if (f == "hybrid"){
        const sel = document.getElementById("hybrid");
        sel.checked = true;
    }
}
if(s){
    if(s == "true"){
        const sel = document.getElementById("yes1");
        sel.checked = true;
        appear1();
    } if (s == "false"){
        const sel = document.getElementById("no1");
        sel.checked = true;
        localStorage.setItem("had_covid_at", "2000-01-01");
    }
}
if(t){
    if(t == "true"){
        const sel = document.getElementById("yes2");
        sel.checked = true;
        appear2();
    } if (t == "false"){
        const sel = document.getElementById("no2");
        sel.checked = true;
        localStorage.setItem("vaccinated_at", "2000-01-01");
    }
}

  // appear1() and appear2() functions add html of date input in case user selected yes. hide1() and hide2() removes them

  function appear1(){
    const x = document.getElementById('first1');
    x.innerHTML = `<div class="first">
                          <h2>When?</h2>
                          <input type="date" class="dateInput" id="dateInput1">
                      </div>`;
    if(dateInput1check){
        const dateInput1 = document.getElementById("dateInput1");
        dateInput1.value = dateInput1check;
    }
  }
  function hide1(){
    const x = document.getElementById('first1');
    x.innerHTML = ``;
  }
  function appear2(){
    const x = document.getElementById('first2');
    x.innerHTML = `<div class="first">
                        <h2>When did you get your last covid vaccine?</h2>
                        <input type="date" class="dateInput" id="dateInput2">
                    </div>`;
    if(dateInput2check){
        const dateInput2 = document.getElementById("dateInput2");
        dateInput2.value = dateInput2check;
    }
  
  }
  function hide2(){
    const x = document.getElementById('first2');
    x.innerHTML = ``;
  }

  // Next 3 if() checkes radio inputs and adds them into localStorage accordingly

  if (document.querySelector('input[name="selection1"]')) {
    document.querySelectorAll('input[name="selection1"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        const item = event.target.value;
        if(item == "sairme"){
            localStorage.setItem("work_preference", "from_office");
        }
        if(item == "home"){
            localStorage.setItem("work_preference", "from_home");
        }
        if(item == "hybrid"){
            localStorage.setItem("work_preference", "hybrid");
        }
      });
    });
  }

  if (document.querySelector('input[name="selection2"]')) {
    document.querySelectorAll('input[name="selection2"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        const item = event.target.value;
        if(item == "yes"){
            appear1();
            localStorage.setItem("had_covid", true);
        }
        if(item == "no"){
            hide1();
            localStorage.setItem("had_covid", false);
            localStorage.setItem("had_covid_at", "2000-01-01");
        }
      });
    });
  }

  if (document.querySelector('input[name="selection3"]')) {
    document.querySelectorAll('input[name="selection3"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        const item = event.target.value;
        if(item == "yes"){
            appear2();
            localStorage.setItem("vaccinated", true);
        }
        if(item == "no"){
            hide2();
            localStorage.setItem("vaccinated", false);
            localStorage.setItem("vaccinated_at", "2000-01-01");
        }
      });
    });
  }

  // Adding function to right arrow.

  const nextButton = document.getElementById("nextButton");
  const nextButton2 = document.getElementById("nextButton2");
        nextButton.addEventListener('click', advance);
        nextButton2.addEventListener('click', advance);

  // advance() function again.
  
  function advance(){
    const sel1 = document.getElementById("sairme");
    const sel2 = document.getElementById("home");
    const sel3 = document.getElementById("hybrid");
    const sel4 = document.getElementById("yes1");
    const sel5 = document.getElementById("no1");
    const sel6 = document.getElementById("yes2");
    const sel7 = document.getElementById("no2");
    const dateInput1 = document.getElementById("dateInput1");
    const dateInput2 = document.getElementById("dateInput2");

      if((sel1.checked == true || sel2.checked == true || sel3.checked == true) && (sel4.checked == true || sel5.checked == true) && (sel6.checked == true || sel7.checked == true) ){
        
        if(dateInput1){
            localStorage.setItem("had_covid_at", dateInput1.value)
        }
        if(dateInput2){
            localStorage.setItem("vaccinated_at", dateInput2.value)
        }
        location.replace("./redberrianInsights.html");
        }
    }