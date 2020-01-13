const languages = {
    ENGLISH: "english",
    SPANISH: "spanish"
}

const classLanguageButtonRelation = {
    english: "englishBtn",
    spanish: "spanishBtn"
}


let currentLanguage = languages.ENGLISH;

document.getElementById("englishBtn").addEventListener("click", onLanguageBtnClick, false);
document.getElementById("spanishBtn").addEventListener("click", onLanguageBtnClick, false);

function initialize(){
    updateLanguageButtonsStyle(englishBtn);
    changeTextLanguage();
}



function onLanguageBtnClick(element) {
    const selectedBtnId = element.target.id
    if (getCurrentLanguageButtonId() !== classLanguageButtonRelation[selectedBtnId]) {
        hideCurrentText();
        currentLanguage = getButtonLanguage(selectedBtnId);
        updateLanguageButtonsStyle();
        changeTextLanguage();
    }
}

function hideCurrentText() {
    const elements = document.getElementsByClassName(currentLanguage);
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).classList.add("hidden");
    }
}

function updateLanguageButtonsStyle(){
    removeBoldStyleFromLanguageButtons();
    setBoldStyleinLanguageButton(classLanguageButtonRelation[currentLanguage]);
}

function removeBoldStyleFromLanguageButtons(){
    Object.values(classLanguageButtonRelation).forEach(buttonId =>
        document.getElementById(buttonId).classList.remove("boldText"));
}

function setBoldStyleinLanguageButton(selectedBtnId){
    document.getElementById(selectedBtnId).classList.add("boldText");
}

function changeTextLanguage() {
    const elements = document.getElementsByClassName(currentLanguage);
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).classList.remove("hidden");
    }
}

function getCurrentLanguageButtonId(){
    return classLanguageButtonRelation[currentLanguage];
}

function getButtonLanguage(selectedBtnId){
    return Object.keys(classLanguageButtonRelation).filter(item => classLanguageButtonRelation[item] === selectedBtnId)[0];
}

initialize();
