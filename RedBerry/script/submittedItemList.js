myHeaders = new Headers({
  'Authorization': 'Token ' + "3c70ac2a-e9f8-4162-8dbb-0ad02acca77b",
  'Content-Type': 'application/x-www-form-urlencoded'
});

fetch('https://bootcamp-2022.devtest.ge/api/applications?token=3c70ac2a-e9f8-4162-8dbb-0ad02acca77b', {
  headers: myHeaders,
  method: 'GET'
})
.then( response => response.json() )
.then( response => {
  let i = 0;
  console.log(response);
  while(i<response.length){
    const first_name = response[i].first_name;
    const last_name = response[i].last_name;
    const email = response[i].email;
    const phone = response[i].phone;
    const had_covid_at = response[i].had_covid_at;
    const vaccinated_at = response[i].vaccinated_at;
    const devtalk_topic = response[i].devtalk_topic;
    const something_special = response[i].something_special;
    let first1 = "";
    let second1 = "";
    let third1 = "";
    let first2 = "";
    let second2 = "";
    let first3 = "";
    let second3 = "";
    let first4 = "";
    let second4 = "";
    const res1 = response[i].work_preference;
    const res2 = response[i].had_covid;
    const res3 = response[i].vaccinated;
    const res4 = response[i].will_organize_devtalk;
    const skills = response[i].skills;
    let a = 0;
    let insert = ``;
    let lang = "";
    while(a<skills.length){
     const id = skills[a].id;
     const exp = skills[a].experience;
     if(id==1){
      lang = "HTML";
     }
     if(id==2){
      lang = "CSS";
     }
     if(id==3){
      lang = "PHP";
     }
     if(id==4){
      lang = "Laravel";
     }
     if(id==5){
      lang = "React.JS";
     }
     if(id==6){
      lang = "Vue.JS";
     }
     if(id==7){
      lang = "Svelte";
     }
     if(id==8){
      lang = "Angular";
     }
     insert += `
                    <tr>
                        <td>`+lang+`</td>
                        <td>Years of Experience: `+exp+`</td>
                    </tr>
     `;
      a++;
    }
    if(res4 == true){
      first4 = "button";
      second4 = "radio button"
    }
    if(res4 == false){
      first4 = "radio button";
      second4 = "button"
    }
    if(res3 == true){
      first3 = "button";
      second3 = "radio button"
    }
    if(res3 == false){
      first3 = "radio button";
      second3 = "button"
    }
    if(res2 == true){
      first2 = "button";
      second2 = "radio button"
    }
    if(res2 == false){
      first2 = "radio button";
      second2 = "button"
    }
    if(res1 == "from_office"){
      first1 = "button";
      second1 = "radio button";
      third1 = "radio button";
    } if (res1 == "from_home"){
      first1 = "radio button";
      second1 = "button";
      third1 = "radio button";
    } if (res1 == "hybrid"){
      first1 = "radio button";
      second1 = "radio button";
      third1 = "button";
    }
    const address = document.getElementById("place");
    address.innerHTML += `<br><div id="destination" style="cursor: pointer;" onclick="show(`+i+`)">
    <div class="submitted" id="sub1">
        <div class="expand" id="expand" style="cursor: pointer;">
            <h2>`+(i+1)+`</h2>
            <img src="../img/Vector.svg" alt="">
        </div>
        </div></div>
        <div id="expanded">   
    <div class="visible" id="remove`+i+`">
        <div class="expanded-inside" id="expins">
            <div class="exp1">
                <h3 class="bitSpace">Personal Information</h3>
                <table class="table1">
                    <tr>
                        <td>First Name</td>
                        <td>`+first_name+`</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>`+last_name+`</td>
                    </tr>
                    <tr>
                        <td>E Mail</td>
                        <td>`+email+`</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>`+phone+`</td>
                    </tr>
                </table>
                <div class="exp3">
                    <h3>Covid Situation</h3>
                    <div class="pad">
                        <h4>How would you prefer to work?</h4>
                        <table class="table3">
                            <tr>
                                <td><img src="../img/`+first1+`.svg" alt=""></td>
                                <td>From Sairme Office</td>
                            </tr>
                            <tr>
                                <td><img src="../img/`+second1+`.svg" alt=""></td>
                                <td>From Home</td>
                            </tr>
                            <tr>
                                <td><img src="../img/`+third1+`.svg" alt=""></td>
                                <td>Hybrid</td>
                            </tr>
                        </table>
                    </div>
                    <div class="pad">
                        <h4>Did you have covid 19?</h4>
                        <table class="table3">
                            <tr>
                                <td><img src="../img/`+first2+`.svg" alt=""></td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td><img src="../img/`+second2+`.svg" alt=""></td>
                                <td>No</td>
                            </tr>
                        </table>
                    </div>
                    <div class="pad">
                        <h4>When did you have covid 19?</h4>
                        <input type="date" class="dateInput" value="`+had_covid_at+`">
                    </div>
                    <div class="pad">
                        <h4>Have you been vaccinated?</h4>
                        <table class="table3">
                            <tr>
                                <td><img src="../img/`+first3+`.svg" alt=""></td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td><img src="../img/`+second3+`.svg" alt=""></td>
                                <td>No</td>
                            </tr>
                        </table>
                    </div>
                    <div class="pad">
                        <h4>When did you get covid vaccine?</h4>
                        <input type="date" class="dateInput" value="`+vaccinated_at+`">
                    </div>
                </div>
            </div>
            <div class="exp2">
                <h3 class="bitSpace">Skillset</h3>
                <table class="table1">
                    `+insert+`
                </table>
                <h3 style="padding-top: 10rem;">Insights</h3>
                <div class="pad">
                    <h4>Would you attend Devtalks and maybe also<br> organize your own?</h4>
                    <table class="table3">
                        <tr>
                            <td><img src="../img/`+first4+`.svg" alt=""></td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td><img src="../img/`+second4+`.svg" alt=""></td>
                            <td>No</td>
                        </tr>
                    </table>
                </div>
                <div class="pad">
                    <h4>What would you speak about at Devtalk?</h4>
                    <textarea name="area2" id="area2" class="areaText" cols="55" rows="4">`+devtalk_topic+`</textarea>
                </div>
                    <h4>Tell us somthing special</h4>
                    <textarea name="area2" id="area2" class="areaText" cols="55" rows="2">`+something_special+`</textarea>
            </div>
        </div>
        </div>
        
    </div>`;
    
    i++;
  }
} );



function show(i){
  let id = `remove`+i;
  console.log(id);
  const text = document.getElementById(id);
  text.classList.toggle("visible");
}


// let s;
// if (s === undefined) {
//   s = false;
// }
// const sub = document.getElementById("expand");
// const ex = document.getElementById("expanded");
// if(s === false){
//   sub.addEventListener('click', expand);
// } 
// function expand(){
  
//   ex.innerHTML = `<h2>GG</h2>`; ////
//   s = true;
//   sub.removeEventListener('click', expand);
//   sub.addEventListener('click', shrink);
// }
// function shrink(){
//   ex.innerHTML = ``;
//   s = false;
//   sub.removeEventListener('click', shrink);
//   sub.addEventListener('click', expand);
// }


const code = `<div id="destination" style="cursor: pointer;" onclick="show()">
<div class="submitted" id="sub1">
    <div class="expand" id="expand" style="cursor: pointer;">
        <h2>1</h2>
        <img src="../img/Vector.svg" alt="">
    </div>
    </div></div>
    <div id="expanded">   
<div class="visible" id="remove">
    <div class="expanded-inside" id="expins">
        <div class="exp1">
            <h3 class="bitSpace">Personal Information</h3>
            <table class="table1">
                <tr>
                    <td>First Name</td>
                    <td>name</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>last</td>
                </tr>
                <tr>
                    <td>E Mail</td>
                    <td>mail</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>+995 591 93 50 80</td>
                </tr>
            </table>
            <div class="exp3">
                <h3>Covid Situation</h3>
                <div class="pad">
                    <h4>How would you prefer to work?</h4>
                    <table class="table3">
                        <tr>
                            <td><img src="../img/button.svg" alt=""></td>
                            <td>From Sairme Office</td>
                        </tr>
                        <tr>
                            <td><img src="../img/radio button.svg" alt=""></td>
                            <td>From Home</td>
                        </tr>
                        <tr>
                            <td><img src="../img/radio button.svg" alt=""></td>
                            <td>Hybrid</td>
                        </tr>
                    </table>
                </div>
                <div class="pad">
                    <h4>Did you have covid 19?</h4>
                    <table class="table3">
                        <tr>
                            <td><img src="../img/button.svg" alt=""></td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td><img src="../img/radio button.svg" alt=""></td>
                            <td>No</td>
                        </tr>
                    </table>
                </div>
                <div class="pad">
                    <h4>When did you have covid 19?</h4>
                    <input type="date" class="dateInput" value="">
                </div>
                <div class="pad">
                    <h4>Have you been vaccinated?</h4>
                    <table class="table3">
                        <tr>
                            <td><img src="../img/button.svg" alt=""></td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td><img src="../img/radio button.svg" alt=""></td>
                            <td>No</td>
                        </tr>
                    </table>
                </div>
                <div class="pad">
                    <h4>When did you get covid vaccine?</h4>
                    <input type="date" class="dateInput" value="">
                </div>
            </div>
        </div>
        <div class="exp2">
            <h3 class="bitSpace">Skillset</h3>
            <table class="table1">
                <tr>
                    <td>PHP</td>
                    <td>Years of Experience: 3</td>
                </tr>
                <tr>
                    <td>React</td>
                    <td>Years of Experience: 9</td>
                </tr>
            </table>
            <h3 style="padding-top: 10rem;">Insights</h3>
            <div class="pad">
                <h4>Would you attend Devtalks and maybe also<br> organize your own?</h4>
                <table class="table3">
                    <tr>
                        <td><img src="../img/button.svg" alt=""></td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><img src="../img/radio button.svg" alt=""></td>
                        <td>No</td>
                    </tr>
                </table>
            </div>
            <div class="pad">
                <h4>What would you speak about at Devtalk?</h4>
                <textarea name="area2" id="area2" class="areaText" cols="55" rows="4">I would speak about subject of how to center a div</textarea>
            </div>
                <h4>Tell us somthing special</h4>
                <textarea name="area2" id="area2" class="areaText" cols="55" rows="2">I can deBUG anything!</textarea>
        </div>
    </div>
    </div>
    
</div>

`;