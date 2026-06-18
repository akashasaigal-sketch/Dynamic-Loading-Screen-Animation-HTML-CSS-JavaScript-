const loader = document.getElementById("loader");
const percent = document.getElementById("percent");

let count = 0;

function loadBar(){
    if(count <= 100){
        loader.style.width = count + "%";
        percent.innerText = count + "%;";

        count++;
    }else{
        count=0;
    }
}

setInterval(loadBar,40);