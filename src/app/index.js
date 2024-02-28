import "./styles/style.scss"
import logo from "./assets/image/logo.svg"
//Actualizar la imagen en el atributo src de la etiqueta

const logoImage = document.getElementById("logo");

logoImage.setAttribute("src", logo)