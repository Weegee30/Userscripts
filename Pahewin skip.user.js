// ==UserScript==
// @name         Pahewin skip
// @namespace    https://animepahe.ru
// @version      0.1
// @description  Tired of waiting to redirect to download from animepahe? Use this script. It's literally just one line of code.
// @author       Weegee
// @match        https://pahe.win/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animepahe.ru
// @grant        none
// ==/UserScript==

(function() {
    document.getElementsByClassName("redirect")[0].click();
})();