window.onload = function () {
    //document.querySelector('h1').onmouseover = pOnMouseOver;
    //document.querySelector('h1').onmouseout = pOnMouseOut;
    document.querySelector('p').onmouseover = p1OnMouseOver;
    document.querySelector('p').onmouseout = p1OnMouseOut;
    console.log(document.querySelectorALL('ul li'));
    for (let i of document.querySelectorAll('ul li')) {
        i.onmouseover = liMouseOver;
        i.onmouseout = liMouseOut;
    }
}

function p1OnMouseOver() {
    $(this).text("Note- If This is Red then JavaScript is not working if Green then JavaScript is working")
    if (document.querySelector('p').onmouseout = h1OnMouseOut) {
        this.style.color = "green"
    } else {
        this.style.color = "red"
    }

}


function p1OnMouseOut() {
    $(this).tex = "Verification of JavaScript"
    if (document.querySelector('p').onmouseout = p1OnMouseOut) {
        this.style.color = "green"
    } else {
        this.style.color = "red"
    }
}




/*
$(document).ready(function () {
    $('h1').hover(pOnMouseOver, pOnMouseOut);
    $('h2').hover(p1OnMouseOver, p1OnMouseOut);

});


function pOnMouseOver() {
    $(this).text("Note- This will change colors to Green if JavaScript is working ");
    $(this).css({
        "backgroundcolor": "black",
        "color": "white"
    });
}
function pOnMouseOut() {
    $(this).text("Verification of JavaScript");
    $(this).css({
        "color": "green",
        "backgroundcolor": "white"
    });
}
*/


