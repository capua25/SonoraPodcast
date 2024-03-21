const navbar = document.getElementById("navbar");
const logo1 = document.getElementById("nav_logo1");
const logo2 = document.getElementById("nav_logo2");
const video = document.getElementById("video");
const floats = document.getElementsByClassName("fl-fl");
const toggle = document.getElementById("togglebtn");
const date = document.getElementById("date");
const arrow = document.getElementById("scrolldown");

let scrolled = false;
window.onscroll = () => {
    let last_scrolled = false;
    last_scrolled = scrolled;
    if(window.outerWidth>600){
        if (window.scrollY>=200){
            if (window.scrollY>380){
                scrolled = true;
            }else{
                scrolled = false;
            }
        }else{
            if (window.scrollY>200){
                scrolled = true;
            }else{
                scrolled = false;
            }
        }
        if (last_scrolled!=scrolled){
            if (!navbar.classList.contains("nav_hidden")&&scrolled){
                navbar.classList.add("nav_hidden");
                date.classList.add("hide");
                logo1.classList.add("logo_hidden");
                logo2.classList.remove("logo_hidden");
                video.classList.add("video_nav_hidden");
                for(let i=0; i<floats.length; i++){floats[i].classList.remove("hide-fl");}
                toggle.classList.remove("hide-toggle");
            }else{
                navbar.classList.remove("nav_hidden");
                date.classList.remove("hide");
                logo1.classList.remove("logo_hidden");
                logo2.classList.add("logo_hidden");
                video.classList.remove("video_nav_hidden");
                for(let i=0; i<floats.length; i++){floats[i].classList.add("hide-fl");}
                toggle.classList.add("hide-toggle");
            }
        }
    }else{
        if (window.scrollY>=300){
            scrolled = true;
        }else{
            scrolled = false;
        }
        if (last_scrolled!=scrolled){
            if (!navbar.classList.contains("nav_hidden")&&scrolled){
                date.classList.add("hide");
                for(let i=0; i<floats.length; i++){floats[i].classList.remove("hide-fl");}
                toggle.classList.remove("hide-toggle");
            }else{
                date.classList.remove("hide");
                for(let i=0; i<floats.length; i++){floats[i].classList.add("hide-fl");}
                toggle.classList.add("hide-toggle");
            }
        }
    }
    
    if(window.scrollY>10){
        arrow.classList.add("hide");
    }else{
        arrow.classList.remove("hide");
    }
}

arrow.addEventListener("click", ()=>{
    arrow.classList.add("hide");
    video.scrollIntoView({behavior: "smooth"});
});