import "./styles.css";
import myImage from "../src/img/pngtree-butterfly-watercolor-blooming-pink-butterfly-png-image_3792318.jpg"

const saludo = () => {
    console.log("hola mundo");
}

saludo();

const img = document.createElement("img");
img.src = myImage;
document.body.appendChild(img);