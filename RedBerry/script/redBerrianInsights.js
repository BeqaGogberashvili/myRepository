// If we already have recording, make them appear on page.

const dev = localStorage.getItem("will_organize_devtalk");
if(dev == "true"){
    const sel = document.getElementById("yes3");
    sel.checked = true;
    appear3();
}
if(dev == "false"){
    const sel = document.getElementById("no3");
    sel.checked = true;
    const area2 = document.getElementById("area2");
    const area2check =localStorage.getItem("area2");
    if(area2check){
        area2.value = area2check;
    }
    localStorage.setItem("devtalk_topic", "");
}

// Last radio input checking

if (document.querySelector('input[name="selection4"]')) {
    document.querySelectorAll('input[name="selection4"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        const item = event.target.value;
        if(item == "yes"){
            appear3();
            localStorage.setItem("will_organize_devtalk", true);
        }
        if(item == "no"){
            hide3();
            localStorage.setItem("will_organize_devtalk", false);
            localStorage.setItem("devtalk_topic", "Empty");
        }
      });
    });
  }

  // Same kind of appear() and hide() functions adding/removing <textarea> depending on radio input.

  function hide3(){
    const x = document.getElementById('first3');
    x.innerHTML = ``;
    const area2 = document.getElementById("area2");
    const area2check =localStorage.getItem("area2");
    if(area2check){
        area2.value = area2check;
    }
  }
  function appear3(){
    const x = document.getElementById('first3');
    x.innerHTML = `
    <div class="first">
                        <h2>When?</h2>
                        <textarea name="area1" id="area1" class="areaText" cols="70" rows="4" placeholder="I would..."></textarea>
                    </div>
    `;
    const area1 = document.getElementById("area1");
    const area2 = document.getElementById("area2");
    const area1check = localStorage.getItem("devtalk_topic");
    const area2check =localStorage.getItem("something_special");
    if(area1check){
        area1.value = area1check;
    }
    if(area2check){
        area2.value = area2check;
    }
}

// If radios are filled we're ready to move on.

function advance(){
    const sel1 = document.getElementById("yes3");
    const sel2 = document.getElementById("no3");
    const sel3 = document.getElementById("area1");
    const sel4 = document.getElementById("area2");

      if( sel1.checked == true || sel2.checked == true) {
        
        if(sel3){
            localStorage.setItem("devtalk_topic", sel3.value)
        }
        if(sel4){
            localStorage.setItem("something_special", sel4.value)
        }
        location.replace("./submit.html");
        }
    }

    
  const nextButton = document.getElementById("nextButton");
  const nextButton2 = document.getElementById("nextButton2");
        nextButton.addEventListener('click', advance);
        nextButton2.addEventListener('click', advance);