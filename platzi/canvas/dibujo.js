var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;

while (l < lineas)
{
    dibujarLinea("pink", 0, 0, 10, 300);
    console.log("linea " + 1);
    l = l + 1;
}

dibujarLinea("pink", 0, 0, 10, 300);
dibujarLinea("pink", 0, 10, 20, 300);
dibujarLinea("pink", 0, 20, 30, 300);
dibujarLinea("pink", 0, 30, 40, 300);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}