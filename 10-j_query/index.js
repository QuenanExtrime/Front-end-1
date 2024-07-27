$("li").css({
    "color": "blue",
    "list-style": "square"
});

$("h1").addClass("style-header");
// $("h1").removeClass("style-header");
// $("h1").toggleClass("style-header");


// function handleClick(){
//     $("h1").toggleClass("style-header");
// }

$("#texto").text("O textop agora é esse");
$("#texto").append("Texto add no final");
$("#texto").prepend("Texto do começo");
console.log($(".container").html())

$(".item-2").before("<hr>")
$(".item-2").after("<li>Item 2.5</li>")

$("a").attr("href", "https://google.com")

$("button").on("click", () => {
    alert("Botão clicado")
})

$("h1").on("mouseenter", () => {
    $("h1").toggleClass("style-header")
})

let nome = ""

$("input").keypress((event) => {

    console.log(event.target)
})

// $("h1").on("click", () => {
//     $("h1").fadeOut(1500)
// })


// $("h1").on("click", () => {
//     $("h1").fadeIn(1500)
// })

// $("h1").on("click", () => {
//     $("h1").slideUp(1500)
// })

// $("h1").on("click", () => {
//     $("h1").slideDown(1500)
// })


$("h1").on("click", () => {
    $("h1").animate({
        "font-size": "60px",
        "opacity: "0.3",
    }, 1000)
    $("h1").animate({
        "font-size": "48px"
        "opacity": "1",
    }, 1000)
})

