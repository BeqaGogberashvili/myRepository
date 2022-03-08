


function postData() {
    let skills = [];

const check1 = localStorage.getItem("HTML");
  if(check1){
      const res = {"id": 1,"experience": check1};
      skills.push(res);
  }
  const check2 = localStorage.getItem("CSS");
  if(check2){
    const res = {"id": 2,"experience": check2};
    skills.push(res);
}
  const check3 = localStorage.getItem("PHP");
  if(check3){
    const res = {"id": 3,"experience": check3};
    skills.push(res);
}
  const check4 = localStorage.getItem("Laravel");
  if(check4){
    const res = {"id": 4,"experience": check4};
    skills.push(res);
}
  const check5 = localStorage.getItem("React.JS");
  if(check5){
    const res = {"id": 5,"experience": check5};
    skills.push(res);
}
  const check6 = localStorage.getItem("Vue.JS");
  if(check6){
    const res = {"id": 6,"experience": check6};
    skills.push(res);
}
  const check7 = localStorage.getItem("Svelte");
  if(check7){
    const res = {"id": 7,"experience": check7};
    skills.push(res);
}
  const check8 = localStorage.getItem("Angular");
  if(check8){
    const res = {"id": 8,"experience": check8};
    skills.push(res);
}

const first_name = localStorage.getItem("firstName");
const last_name = localStorage.getItem("lastName");
const email = localStorage.getItem("email");
const phone = localStorage.getItem("phone-mask");
const work_preference = localStorage.getItem("work_preference");
const had_covid = localStorage.getItem("had_covid");//
const had_covid_at = localStorage.getItem("had_covid_at");
const vaccinated = localStorage.getItem("vaccinated");//
const vaccinated_at = localStorage.getItem("vaccinated_at");
const will_organize_devtalk = localStorage.getItem("will_organize_devtalk");//
const devtalk_topic = localStorage.getItem("devtalk_topic");
let something_special = localStorage.getItem("something_special");
let covid;
let vaccine;
let dev;
if(had_covid == "true"){
    covid = true;
}
if(had_covid == "false"){
    covid = false;
    localStorage.setItem("had_covid_at", "2022-01-01");
}
if(vaccinated == "true"){
    vaccine = true;
}
if(vaccinated == "false"){
    vaccine = false;
    localStorage.setItem("vaccinated_at", "2022-01-01");
}
if(will_organize_devtalk == "true"){
    dev = true;
}
if(will_organize_devtalk == "false"){
    dev = false;
    localStorage.setItem("devtalk_topic", "Empty");
}
if(!something_special){
  something_special = "Empty";
}


    const data = {
        "token": "370b4718-3061-4dbe-b03b-90cca5e1f21f",
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "phone": phone,
        "skills": 
              skills
        ,
        "work_preference": work_preference,
        "had_covid": covid,
        "had_covid_at": had_covid_at,
        "vaccinated": vaccine,
        "vaccinated_at": vaccinated_at,
        "will_organize_devtalk": dev,
        "devtalk_topic": devtalk_topic,
        "something_special": something_special
      }
    const url = 'https://bootcamp-2022.devtest.ge/api/application'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data => console.log(data))
    location.replace("./thanks.html");
}



// {
//     "token": "43759b36-583a-42a1-a968-540c9c4e7f81",
//     "first_name": "gelabeqbadas",
//     "last_name": "gelashvili",
//     "email": "gelashvili@gela.ge",
//     "phone": "+995591933382",
//     "skills": [
//       {
//         "id": 1,
//         "experience": 3
//       }
//     ],
//     "work_preference": "from_home",
//     "had_covid": true,
//     "had_covid_at": "2022-02-23",
//     "vaccinated": true,
//     "vaccinated_at": "2022-02-23",
//     "will_organize_devtalk": true,
//     "devtalk_topic": "I would ...",
//     "something_special": "I am special!"
//   }
