let l = ["home","about","mywork","contact"];

function show(id){
  document.documentElement.scrollTop = 0;
  for(let i of l){
    if (i == id){
      let e1 = document.getElementById(id+"1");
      let e2 = document.getElementById(id+"2");
      e2.classList.remove("hidden");
      e1.classList.remove("use");
    }
    else{
      let e1 = document.getElementById(i+"1");
      let e2 = document.getElementById(i+"2");
      e2.classList.add("hidden");
      e1.classList.add("use");
    }
  }
}

show("home");