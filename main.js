import "./styles.scss";

const button = document.querySelector("#fullScreenToggle");
let lastY = 0;

window.addEventListener("scroll", (event) => {
    let currentY = window.scrollY || document.documentElement.scrollTop;
    let diff = Math.abs(lastY - currentY);
    if (diff > 25) {
        if (lastY < currentY) {
            button.classList.remove("btn--hidden");
            button.classList.add("btn--show");
        } else {
            button.classList.remove("btn--show");
            button.classList.add("btn--hidden");
        }
        lastY = currentY;
    }
});

// let elem = document.createElement('h2')
function openFullScreen(elem) {
    const btnFaIcon = button.children[0]
    let fullScreenAvail;
    fullScreenAvail = !document.fullscreenElement;
    if (fullScreenAvail) {
        elem.requestFullscreen()
        .then(()=>button.dataset.full = true)
            .catch(() => {
                alert("Full Screen Not Possible!\nRemoving Button");
                button.remove();
            });
    } else {
        document.exitFullscreen();
        button.dataset.full = false;
        
    }
}

button.addEventListener("click", () => {
    openFullScreen(document.body);
});

window.addEventListener("fullscreenchange",()=>{
    const btnFaIcon = button.children[0]

    if (!document.fullscreenElement){
        btnFaIcon.classList.remove("fa-maximize")
        btnFaIcon.classList.add("fa-minimize");
    }
    else{
        btnFaIcon.classList.add("fa-maximize");
        btnFaIcon.classList.remove("fa-minimize");
    }
    

})