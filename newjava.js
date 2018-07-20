window.onload = function () {
    //document.querySelector('p').onmouseover = pOnMouseOver;
    //document.querySelector('p').onmouseout = pOnMouseOut;
    document.querySelector('h1').onmouseover = h1OnMouseOver;
    document.querySelector('h1').onmouseout = h1OnMouseOut;
    document.querySelector('h2').onmouseover = h2OnMouseOver;
    document.querySelector('h2').onmouseout = h2OnMouseOut;

    console.log(document.querySelectorALL('ul li'));
    for (let i of document.querySelectorAll('ul li')) {
        i.onmouseover = liMouseOver;
        i.onmouseout = liMouseOut;
    }
}
//function pOnMouseOver(){
//    this.innerHTML = "Note-This is not the Real San Antonio Zoo Website"
//    this.style.color = "black";
//    this.style.backgroundcolor = "white";
//
//}
//
//
//function pOnMouseOut(){
//    this.innerHTML = "San Antonio Zoo"
//   this.style.color = "black";
//   this.style.backgroundcolor = "White";
//}
/* if () {

}*/


$(document).ready(function () {
    $('h1').hover(h1OnMouseOver, h1OnMouseOut)
    $('h2').hover(h2OnMouseOver, h2OnMouseOut)
});


function h1OnMouseOver() {
    $(this).text("Note- This is not the Real San Antonio Zoo Website")
    $(this).css({
        "color": "black",
        "backgroundcolor": "white"
    });
}


function h1OnMouseOut() {
    $(this).text("San Antonio Zoo")
    $(this).css({
        "color": "black",
        "backgroundcolor": "White"
    });
}
function h2OnMouseOver() {
    $(this).text("this is a SubHeader")
    $(this).css({
        "color": "black",
        "backgroundcolor": "White"
    });
}

function h2OnMouseOut() {
    $(this).innerHTML = "The Zoo's History";
    $(this).style.color = "black";
    $(this).style.backgroundColor = "white";
}









/*









*/