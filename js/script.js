function mapa(n) {
    if (n == 1) {
        document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.799532390004!2d-83.94546908538564!3d9.867179392942303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e1c719f7ddf5%3A0x9ad878c5b0079b47!2sEs+de+Pejibaye!5e0!3m2!1ses!2scr!4v1554687489592!5m2!1ses!2scr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
    } else if (n == 2) {
        document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.4120373203352!2d-83.9211084710108!3d9.865122521415614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0dfe8c3da4b71%3A0xbe2bd715abcc3836!2sPizza+Hut!5e0!3m2!1ses!2scr!4v1554688896384!5m2!1ses!2scr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
    } else if (n == 3) {
        document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8372092520785!2d-83.92327293538567!3d9.864021542944519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b35bd9959ce10c!2sTaco+Bell!5e0!3m2!1ses!2scr!4v1554689039033!5m2!1ses!2scr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
    } else if (n == 4) {
        document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8076919405567!2d-83.94529938538568!3d9.866495592942774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e0127a45e5bf%3A0x8e24754d7cf9faad!2sCarl&#39;s+Jr.!5e0!3m2!1ses!2scr!4v1554689135407!5m2!1ses!2scr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
    } else if (n == 5) {
        document.getElementById("mapa").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.80605959794!2d-83.94534638538569!3d9.866632392942696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e0127ae9d15f%3A0x71ad11fcf5156b7c!2sMcDonald&#39;s!5e0!3m2!1ses!2scr!4v1554689213847!5m2!1ses!2scr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
}

function cargarMenus(n){
    if(n == 1){
        initMap1(9.865052, -83.920016, "pizza hut");
        document.getElementById("menus").innerHTML = '<div id="m1" class="thumbnail"><img class="img-responsive" src="img/res2plato3.jpg" width="100%" height="100%" onclick="agregar(\'Spaguettis\',6500, \'Pizza hut\')"></div> <div id="m2" class="thumbnail"><img class="img-responsive" src="img/res2plato1.jpg" width="100%" height="100%" onclick="agregar(\'PIZZA PERSONAL\',3500, \'Pizza hut\')"></div> <div id="m3" class="thumbnail"><img class="img-responsive" src="img/res2plato2.jpg" width="100%" height="100%" onclick="agregar(\'Lasagna\',5250, \'Pizza hut\')"></div>';

    } else if(n == 2){
        initMap1(9.865149, -83.920109, "Taco Bell");
        document.getElementById("menus").innerHTML = '<div id="m4" class="thumbnail"><img class="img-responsive" src="img/res1plato1.jpg" width="100%" height="100%" onclick="agregar(\'BURRITO LOVERS\',1850, \'Taco Bell\')"></div> <div id="m5" class="thumbnail"><img class="img-responsive" src="img/res1plato2.jpg" width="100%" height="100%" onclick="agregar(\'SOLO POR HOY\',1950, \'Taco Bell\')"></div> <div id="m6" class="thumbnail"><img class="img-responsive" src="img/res1plato3.jpg" width="100%" height="100%" onclick="agregar(\'BIG BELL BOX\',3000, \'Taco Bell\')"></div>';
    }else if(n == 3){
        initMap1(9.866943, -83.943550, "Popeyes");
        document.getElementById("menus").innerHTML = '<div id="m7" class="thumbnail"><img class="img-responsive" src="img/res3plato1.jpg" width="100%" height="100%" onclick="agregar(\'9 Piezas\',4500, \'Popeyes\')"></div> <div id="m8" class="thumbnail"><img class="img-responsive" src="img/res3plato2.jpg" width="100%" height="100%" onclick="agregar(\'8 Piezas\',3300, \'Popeyes\')"></div> <div id="m9" class="thumbnail"><img class="img-responsive" src="img/res3plato3.jpg" width="100%" height="100%" onclick="agregar(\'Caja Cajun\',2500, \'Popeyes\')"></div>';

    }else if(n == 4){
        initMap1(9.866802, -83.943154, "Carl's Jr.");
        document.getElementById("menus").innerHTML = '<div id="m10" class="thumbnail"><img class="img-responsive" src="img/res4plato1.jpg" width="100%" height="100%" onclick="agregar(\'The Real Deal\',2500, \'Carl Jr.\')"></div> <div id="m11" class="thumbnail"><img class="img-responsive" src="img/res4plato2.jpg" width="100%" height="100%" onclick="agregar(\'GRANDES ECONOMICOS\',750, \'Carl Jr.\')"></div> <div id="m12" class="thumbnail"><img class="img-responsive" src="img/res4plato3.jpg" width="100%" height="100%" onclick="agregar(\'Burger\',2500, \'Carl Jr.\')"></div>';

    }else if(n == 5){
        initMap1(9.866795, -83.943169, "McDonalds");
        document.getElementById("menus").innerHTML = '<div id="m13" class="thumbnail"><img class="img-responsive" src="img/res5plato1.jpg" width="100%" height="100%" onclick="agregar(\'Mac Duo\',1850, \'Mac Donald\')"></div> <div id="m14" class="thumbnail"><img class="img-responsive" src="img/res5plato2.jpg" width="100%" height="100%" onclick="agregar(\'Mac Compo\',2190, \'Mac Donald\')"></div> <div id="m15" class="thumbnail"><img class="img-responsive" src="img/res5plato3.jpg" width="100%" height="100%" onclick="agregar(\'Burger\',2790, \'Mac Donald\')"></div>';

    }
}


function ventana() { }

var precioPromo=0;

function mostrarVentana(n) {
    if(n == 1){
        var ventana = document.getElementById('miVentana');
        precioPromo = 139000;
    } else if(n == 2){
        var ventana = document.getElementById('miVentana2');
        precioPromo =2500;
    }else{
        var ventana = document.getElementById('miVentana3');
        precioPromo = 2400;
    }
    
    ventana.style.marginTop = "20em";
    ventana.style.left=((document.body.clientWidth-450)/2)+"px";
    ventana.style.display = 'block';
}
function ocultarVentana(n) {

    if(n == 1){
        var ventana = document.getElementById('miVentana');
    } else if(n == 2){
        var ventana = document.getElementById('miVentana2');
    }else{
        var ventana = document.getElementById('miVentana3');
    }

    ventana.style.display = 'none';
}

var listaNombre = [];
var listaPrecio = [];
var listaRestaurante = [];

function agregar(nombre, precio, restaurante){

   
    if(restaurante == 'Pizza Hut'){
        ocultarVentana(1);

    } else if(restaurante == 'Taco Bell'){
        ocultarVentana(2);
    }else if(restaurante == 'Carls Jr.'){
        ocultarVentana(3);  
    }

    alert("Agregado al carrito");

    listaNombre.push(nombre);
    listaPrecio.push(precio);
    listaRestaurante.push(restaurante);

    sessionStorage.setItem("listanombre", listaNombre);
    sessionStorage.setItem("listaprecio", listaPrecio);
    sessionStorage.setItem("listarestaurante", listaRestaurante);
  
}

function limpiar(){
    while(listaNombre.length>0){
        listaNombre.pop();
        listaPrecio.pop();
        listaRestaurante.pop();
    }
  
}


function cargarCarrito(){
    
    var totalImp = 0;
    var nombres = window.onload = sessionStorage.getItem("listanombre");
    var precios = window.onload = sessionStorage.getItem("listaprecio");
    var restaurantes = window.onload = sessionStorage.getItem("listarestaurante");
    

    var cadNombres = "";
    var cadPrecios = "";
    var cadRestaurantes = "";
    var total = 0;
    var totalImp = 0;

    for(var i =0; i<nombres.length; i++){
        cadNombres = cadNombres + nombres[i];
        
    }
    for(var i =0; i<precios.length; i++){
        cadPrecios = cadPrecios + precios[i];
    }

    for(var i =0; i<restaurantes.length; i++){
        cadRestaurantes = cadRestaurantes + restaurantes[i];
    }

    var arrayNombres = cadNombres.split(',');
   
    var arrayPrecios = cadPrecios.split(',');
    var arrayRestaurantes = cadRestaurantes.split(',');

    var html ="";
    for(var n=0; n < arrayNombres.length; n++){
        html=html+'<div><label>Producto: '+arrayNombres[n]+' </label></div> <div><label>Precio: '+arrayPrecios[n]+' </label></div> <div><label>Restaurante: '+arrayRestaurantes[n]+' </label></div></br>';
    }

    for(var n=0; n < arrayPrecios.length; n++){
        total += parseInt(arrayPrecios[n]);
    }
    totalImp = total*0.13;
    totalImp +=total;

    html=html+'<div><label>TOTAL: '+total+' </label></div>';
    html=html+'<div><label>TOTAL ivi: '+parseInt(totalImp)+' </label></div>';
    html=html+'<div><label>TOTAL con envio: '+(parseInt(totalImp)+1209)+' </label></div>';
    document.getElementById("datos").innerHTML = html;
    
} 

function finalizar(){
    
    sessionStorage.clear();
   
    alert("Muchas gracias por su compra");
    window.close();
} 


var pizza = 13900;
var taco = 3000;
var polloPopeyes = 4500;
var carl = 2500;
var mc = 2790;
new Chart(document.getElementById("bar-chart"), {
    
    type: 'bar',
    data: {
      labels: ["Pizza hut", "Taco Bell", "Popeyes", "Carls Jr.", "McDonalds"],
      datasets: [
        {
          label: "Restaurantes",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [pizza,taco,polloPopeyes,carl,mc]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Platillo mas costoso restaurante'
      }
    }
});


var map;

function initMap() { }

function initMap1(c1, c2, title) {
    map = new google.maps.Map(document.getElementById('mapa'), {
        center: { lat: c1, lng: c2 },
        zoom: 16,
    });
    var marker = new google.maps.Marker({
        position: { lat: c1, lng: c2 },
        map: map,
        title: title
    });
}