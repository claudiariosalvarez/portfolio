const languages = {
    ENGLISH: "english",
    SPANISH: "spanish"
}

const languageAndButtonIdsRelation = {
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
    if (getCurrentLanguageButtonId() !== languageAndButtonIdsRelation[selectedBtnId]) {
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
    setBoldStyleinLanguageButton(languageAndButtonIdsRelation[currentLanguage]);
}

function removeBoldStyleFromLanguageButtons(){
    Object.values(languageAndButtonIdsRelation).forEach(buttonId =>
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
    return languageAndButtonIdsRelation[currentLanguage];
}

function getButtonLanguage(selectedBtnId){
    return Object.keys(languageAndButtonIdsRelation).filter(item => languageAndButtonIdsRelation[item] === selectedBtnId)[0];
}

initialize();
