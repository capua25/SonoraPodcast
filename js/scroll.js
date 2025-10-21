const navbar = document.getElementById("navbar");
const logo1 = document.getElementById("nav_logo1");
const logo2 = document.getElementById("nav_logo2");
//const video = document.getElementById("podcast")
const video = document.getElementById("about");
const floats = document.getElementsByClassName("fl-fl");
const date = document.getElementById("date");
const arrow = document.getElementById("scrolldown");
const optalogo = document.getElementById("optalogo");

let scrolled = false;
window.onscroll = () => {
    let last_scrolled = false;
    last_scrolled = scrolled;
    if (window.outerWidth > 600) {
        if (window.scrollY >= window.innerHeight / 4) {
            if (window.scrollY > window.innerHeight * 3 / 4) {
                scrolled = true;
            } else {
                scrolled = false;
            }
        } else {
            if (window.scrollY > window.innerHeight / 4) {
                scrolled = true;
            } else {
                scrolled = false;
            }
        }
        if (last_scrolled != scrolled) {
            if (!navbar.classList.contains("nav_hidden") && scrolled) {
                navbar.classList.add("nav_hidden");
                date.classList.add("hide_date");
                logo1.classList.add("logo_hidden");
                if (window.outerWidth > 1360) {
                    logo2.classList.remove("logo_hidden");
                } else {
                    date.classList.add("hide");
                }
                video.classList.add("video_nav_hidden");
                optalogo.classList.add("logo_hidden");
                for (let i = 0; i < floats.length; i++) { floats[i].classList.remove("hide-fl"); }
            } else {
                navbar.classList.remove("nav_hidden");
                date.classList.remove("hide_date");
                date.classList.remove("hide");
                logo1.classList.remove("logo_hidden");
                logo2.classList.add("logo_hidden");
                video.classList.remove("video_nav_hidden");
                optalogo.classList.remove("logo_hidden");
                for (let i = 0; i < floats.length; i++) { floats[i].classList.add("hide-fl"); }

            }
        }
    } else {
        if (window.scrollY >= 300) {
            scrolled = true;
        } else {
            scrolled = false;
        }
        if (last_scrolled != scrolled) {
            if (!navbar.classList.contains("nav_hidden") && scrolled) {
                date.classList.add("hide");
                for (let i = 0; i < floats.length; i++) { floats[i].classList.remove("hide-fl"); }
            } else {
                date.classList.remove("hide");
                for (let i = 0; i < floats.length; i++) { floats[i].classList.add("hide-fl"); }
            }
        }
    }

    if (window.scrollY > 10) {
        arrow.classList.add("hide");
    } else {
        arrow.classList.remove("hide");
    }
}

arrow.addEventListener("click", () => {
    arrow.classList.add("hide");
    video.scrollIntoView({ behavior: "smooth" });
});