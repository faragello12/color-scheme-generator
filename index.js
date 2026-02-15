let colorInput = document.getElementById('favcolor')
let choise = document.getElementById('choices')
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${choise.value.toLowerCase()}&count=5`)
.then(res => res.json())
.then(data => {
    document.getElementById("color1").style.backgroundColor = data.colors[0].hex.value;
    document.getElementById("color2").style.backgroundColor = data.colors[1].hex.value;
    document.getElementById("color3").style.backgroundColor = data.colors[2].hex.value;
    document.getElementById("color4").style.backgroundColor = data.colors[3].hex.value;
    document.getElementById("color5").style.backgroundColor = data.colors[4].hex.value;
    document.getElementById("color-text1").innerText = data.colors[0].hex.value;
    document.getElementById("color-text2").innerText = data.colors[1].hex.value;
    document.getElementById("color-text3").innerText = data.colors[2].hex.value;
    document.getElementById("color-text4").innerText = data.colors[3].hex.value;
    document.getElementById("color-text5").innerText = data.colors[4].hex.value;
})
})
