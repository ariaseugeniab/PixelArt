var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");


// Funcion para crear paleta de colores
function recorrerPaleta(){
  for(var i = 0; i < nombreColores.length; i++){
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = "color-paleta";
    nuevoDiv.style.backgroundColor = nombreColores[i];
    paleta.appendChild(nuevoDiv);
  }
}

// Ejecución de función
recorrerPaleta();

//Función para crear grilla de pixeles
function crearPixeles(){
  for(var i = 0; i < 1750; i++){
    let nuevoDiv = document.createElement("div");
    grillaPixeles.appendChild(nuevoDiv);
  }
}

// Ejecución de función
crearPixeles();

// Función para paleta personalizada
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    let indicadorColor = document.querySelector("#indicador-de-color");
    indicadorColor.style.backgroundColor = colorActual;
  })
);

$(document).ready(function(){ //abrir jquery

  // Seleccionar color de paleta
$(".color-paleta").click(function(){
  let $colorNuevo = $(this).css('backgroundColor');
  $("#indicador-de-color").css("backgroundColor", $colorNuevo);
})

  // Pintar grilla
$("#grilla-pixeles div").click(function(){
  let $colorSeleccionado = $("#indicador-de-color").css("backgroundColor");
  $(this).css("backgroundColor", $colorSeleccionado);
});

// Identificar si el mouse se encuentra en movimiento
var $mousePresionado = false;

$("#grilla-pixeles div").mousedown(function(){
  $mousePresionado = true;
});

$("#grilla-pixeles div").mouseup(function(){
  $mousePresionado = false;
});

// Funcion para pintar en movimiento
$("#grilla-pixeles div").mouseover(function(){

  if($mousePresionado){
    let $colorSeleccionado = $("#indicador-de-color").css("backgroundColor");
    $(this).css("backgroundColor", $colorSeleccionado);
  };
});

// Guardar el pixelArt
$("#guardar").click(function(){
  guardarPixelArt();
});

// Borrar pantalla
$("#borrar").click(function(){
  $("#grilla-pixeles div").animate({"backgroundColor": "white"}, 2000);
});

// // Cargar Superhéroe
$("#batman").click(function(){
  cargarSuperheroe(batman);
});

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
});

$("#flash").click(function(){
  cargarSuperheroe(flash);
});

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
});

});// cerrar jquery



