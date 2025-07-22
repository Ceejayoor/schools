const userName = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const paragraph = document.getElementById("paragraph");

submit.onclick = function(){
    if(userName.value === "Ogeleka" && password.value === "Ogeleka123"){
        window.location.href = "https://sites.google.com/view/donumchristischool/college/jss2-learners/ax-student";
    }
    else if(userName.value === "David" && password.value === "David123"){
       window.location.href = "https://sites.google.com/view/donumchristischool/college/jss2-learners/ay-student";
    }
    else if(userName.value === "Peculiar" && password.value === "Peculiar123"){
        window.location.href = "https://sites.google.com/view/donumchristischool/college/jss2-learners/az-student";
    }
}
