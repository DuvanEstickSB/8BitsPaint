const canvaspaleta = document.getElementById("paletaColores");
const contexto = canvaspaleta.getContext("2d");
const vista = document.getElementById("VistaColor");

const columnas = 18, vertical = 8;

const celdaW = canvaspaleta.width / columnas, celdaH= canvaspaleta.heigth / vertical;

const paleta = [];

const ejeY = 0;
const ejeX = 0;

for(ejeY; ejeY < vertical; ejeY++){
    for(ejeX; ejeX < columnas; ejeY){
        const hue = (ejeX / 16) * 360;
        const luminancia = (ejeY + 1 ) / 10;
        const saturacion = 1.0;

    }
}