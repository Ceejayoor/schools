const userName = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const paragraph = document.getElementById("paragraph");

submit.onclick = function(){
    if(userName.value === "Stephen" && password.value === "Stephen123"){
        window.location.href = "https://sites.google.com/view/bedrockcollegeschool/jss1/stephen-jaiyesimi";
    }
    else if(userName.value === "Rita" && password.value === "Rita123"){
       window.location.href = "https://sites.google.com/view/bedrockcollegeschool/jss1/rita-sina";
    }
    else if(userName.value === "Emeka" && password.value === "Emeka123"){
        window.location.href = "https://sites.google.com/view/bedrockcollegeschool/jss1/emeka-azikiwe";
    }
}
