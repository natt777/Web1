$(document).ready(function(){;
    $("p#segundo").css({"background-color":"pink"});
    $("button#hide").click(function(){$("p#segundo").hide()})
    $("button#show").click(function(){$("p#segundo").show()})

    $("p#primero").mouseenter(function(){$("p#primero").hide()})
    $("p#primero").mouseleave(function(){$("p#primero").show()})

    $("p#tercero").click(function(){$("p#tercero").animate({width:400})})
    
    $("p#tercero").mouseleave(function(){$("p#tercero").animate({width:900})})


    $("button#al").click(function(){alert("Hello there")})
    
    $("button#txt").click(function(){
        text = prompt("Que quiere hacer", ["Introduzca texto"])
        $("p#text").append(text + " ");
    })
	$("#button-style").click(function(){
		$("h1").addClass("red");
	});
	$("#button-nostyle").click(function(){
		$("h1").removeClass("red");
	});
	$("#button-toggestyle").click(function(){
		$("h1").toggleClass("blue");
	});

});