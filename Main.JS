const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighLighter);

function navHighLighter ()
{
let scrollY = window.pageYOffset;
sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.OffsetTop -50,
    sectionId = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else
    {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
}
    )
}


var icon = document.getElementById("dark");

icon.onclick = function(){
document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
icon.src = "sun.png";

}else{
icon.src = "moon.png";

}

}
