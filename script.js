const userName = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const paragraph = document.getElementById("paragraph");

submit.onclick = function(){
    if(userName.value === "stephen" && password.value === "stephen123"){
        window.location.href = "https://sites.google.com/view/bedrockcollegeschool/jss1/stephen-jaiyesimi";
    }
    else if(userName.value === "rita" && password.value === "rita123"){
       window.location.href = "https://sites.google.com/view/bedrockcollegeschool/jss1/rita-sina";
    }
    else if(userName.value === "emeka" && password.value === "emeka123"){
        window.location.href = "https://sites.google.com/view/bedrockcollegeschool/jss1/emeka-azikiwe";
    }
}
