$(function () {
    $(".toggleMenu"). on("click",function () {
        if ($(".navbar").hasClass("active")) {
            $(".navbar").removeClass("active")
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>")
        } else {
            $(".navbar").addClass("active");
            $(this).find("a").html("<ion-icon name='clove-outline'></ion-icon>")
        }
        
    })
    
})

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}


