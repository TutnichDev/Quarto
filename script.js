//  const img1 = document.createElement("img");
//  img1.src = "src/todo.jpg"


//  var prueba = document.getElementById("1-1");
//  prueba.style.backgroundImage = `url(${img1.src})`
//  prueba.style.backgroundColor = "red"



function takeColor(object) {
    if(!midTile.used) {
        alert("ya haz elegido un tile")
        return
    }

    if (!object.used) {
        urlImage = object.style.backgroundImage
        object.used = true
        object.style.backgroundImage = "none"
        object.style.backgroundColor = "black"
        pincelCargado = true

        midTile.style.backgroundImage = urlImage
        midTile.used = !midTile.used 

    } else { alert("objeto ya fue utilizado") }
}

function putColor(object) {
    if (object.used) {
        alert("elemento utilizado")
        return
    }

    if (pincelCargado) {
        object.style.backgroundImage = urlImage
        object.used = true
        pincelCargado = false

        midTile.style.backgroundImage = "none"
        midTile.used = !midTile.used 

    } else alert("no se eligio color")
}

var pincelCargado = false
const urls = [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png",
    "img9.png",
    "img10.png",
    "img11.png",
    "img12.png",
    "img13.png",
    "img14.png",
    "img15.png",
    "img16.png",

];

var i = 0


var tablero = document.querySelector(".game-board")
var hijosTablero = tablero.children;

var fichasTop = document.querySelector(".game-tiles-1");
var hijosFichasTop = fichasTop.children;

var fichasBot = document.querySelector(".game-tiles-2");
var hijosFichasBot = fichasBot.children;

var midTile = document.querySelector(".game-tileSelected")
midTile.used = "false"



for (let hijos of hijosTablero) {
    hijos.setAttribute("onclick", "putColor(this)")

}

for (let hijos of hijosFichasTop) {
    hijos.style.backgroundImage = `url(${urls[i]})`
    hijos.setAttribute("onClick", "takeColor(this)")
    i++
}

for (let hijos of hijosFichasBot) {
    hijos.style.backgroundImage = `url(${urls[i]})`
    hijos.setAttribute("onClick", "takeColor(this)")
    i++
}








