var target =0;
$(document).ready( function(){
    
    var $botones = $(".control")
    var $anterior = $(".previous")
    var $siguiente = $(".next")
    
    $botones.click(cambiarImagen)
    $anterior.click(anteriorImagen)
    $siguiente.click(siguienteImagen)
})


function cambiarImagen(){
//    target = (event.currentTarget)
    target = parseInt($(this).data("target")) //otra forma de data
    mostrarImagen(target)
    console.log(target)
}

var mostrarImagen = function (target) {
   
	var $lastSlide = $("div.active");
	var $slide = $("div[data-slide='" + target + "']");
	$lastSlide.removeClass("active");
	$slide.addClass("active");
};

var anteriorImagen = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 3 : target;
	mostrarImagen(target);
};

var siguienteImagen = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 3) ? 0 : target;
	mostrarImagen(target);
    mostrarImagen(target);
};




















