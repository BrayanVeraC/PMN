function hola(){
  var x = Math.floor(Math.random()*10);
  //var x = 0;
  switch (x){
    case 0:
      document.getElementById("mensaje").innerHTML = "Te quiero 3 millones";
      document.getElementById("imgc").src = "src/fl0.jpg";
      break;
    case 1:
      document.getElementById("mensaje").innerHTML = "Un abrazo con mucho lof";
      document.getElementById("imgc").src = "src/fl1.jpg";
      break;
    case 2:
      document.getElementById("mensaje").innerHTML = "Mi amada Persefone";
      document.getElementById("imgc").src = "src/fl2.jpg";
      break;
    case 3:
      document.getElementById("mensaje").innerHTML = "Somos el mejor equipo";
      document.getElementById("imgc").src = "src/fl3.jpg";
      break;
    case 4:
      document.getElementById("mensaje").innerHTML = "Te quiero cerca de mi";
      document.getElementById("imgc").src = "src/fl4.jpeg";
      break;
    case 5:
      document.getElementById("mensaje").innerHTML = "Por si no te lo dije te adoro";
      document.getElementById("imgc").src = "src/fl5.png";
      break;
    case 6:
      document.getElementById("mensaje").innerHTML = "Eres lo mejor del mundo";
      document.getElementById("imgc").src = "src/fl6.jpg";
      break;
    case 7:
      document.getElementById("mensaje").innerHTML = "La casualidad mas hermosa de mi vida";
      document.getElementById("imgc").src = "src/fl7.jfif";
      break;
    case 8:
      document.getElementById("mensaje").innerHTML = "Vales un universo y mas";
      document.getElementById("imgc").src = "src/fl8.jpg";
      break;
    case 9:
      document.getElementById("mensaje").innerHTML = "Que hermosa que eres";
      document.getElementById("imgc").src = "src/fl9.jpg";
      break;
    case 10:
      document.getElementById("mensaje").innerHTML = "Me tienes enamorado";
      document.getElementById("imgc").src = "src/fl10.png";
      break;
  }
}