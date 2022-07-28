var btn = document.getElementById('btns');
var div = document.getElementById('div9')

btn.addEventListener('click', e => {
    if(div.style.display === "inline-block"){
        div.style.display = "none";
    }
    else{
        div.style.display = "inline-block";
    }
});