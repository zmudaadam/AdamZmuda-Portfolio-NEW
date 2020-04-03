function CheckCookies(){
    if(!localStorage.cookies_accepted) {
        var cookies_message = document.getElementById("cookies-message"); 
        cookies_message.style.display="block" 
    } 
} 
window.onload = CheckCookies;

function CloseCookies(){ 
    localStorage.cookies_accepted = true; 
    document.getElementById("cookies-container").removeChild(document.getElementById("cookies-message"));
}