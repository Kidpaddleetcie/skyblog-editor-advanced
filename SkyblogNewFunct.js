//// ==UserScript==
// @name         SkyblogNewFuncts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ajouter des nouvelles fonctionnalités dans l'éditeur de texte expert de Skyrock - Blog 
// @author       Glin Kidpaddleetcie
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Notre but est d'atteindre " https://www.skyrock.com/m/blog/article_new.php?from_frontadmin=0 "
    let tspliteuh = document.URL.split('/');

    console.log(tspliteuh[2]); // Le nom du site web

})();