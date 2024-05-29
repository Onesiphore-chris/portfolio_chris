/****************** typed  animation*/

let typed = new Typed(".typing", {
    strings:["Web Designer", "Web Developper", "Graphic Designer", "Buisness Man"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


/****** Language */

function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}