
var time = new Date().getHours();
function time(){ 
if (time <= 12) {
    return "Good afternoon";
} else if(12 < time < 17) {
    return "Good evening";
} else if( time > 17){
    return "Good night";
}
    
} 