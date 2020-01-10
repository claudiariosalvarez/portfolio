document.getElementById("hamburgerBtn").addEventListener("click", onHamburgerBtnClick, false);

function onHamburgerBtnClick(){
    let currentDisplay = document.getElementById("hamburgerMenuContent").style.display;
    if(currentDisplay === "none")
        document.getElementById("hamburgerMenuContent").style.display = "flex";
    else
        document.getElementById("hamburgerMenuContent").style.display = "none";
}