document.getElementById("hamburgerBtn").addEventListener("click", onHamburgerBtnClick, false);

window.addEventListener('resize', hideHamburgerContentIfOpen);

function onHamburgerBtnClick(){
    const currentDisplay = document.getElementById("hamburgerMenuContent").style.display;
    if(currentDisplay === "flex")
        document.getElementById("hamburgerMenuContent").style.display = "none";
    else
        document.getElementById("hamburgerMenuContent").style.display = "flex";
}

function hideHamburgerContentIfOpen(){
    const currentWidth = document.body.clientWidth;
    if(currentWidth > 768)
        document.getElementById("hamburgerMenuContent").style.display = "none";
}