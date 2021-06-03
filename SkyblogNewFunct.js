//// ==UserScript==
// @name         SkyblogNewFuncts
// @namespace    https://kidpaddleetcieglin.skyrock.com/
// @version      0.1
// @description  Ajouter des nouvelles fonctionnalités dans l'éditeur de texte expert de Skyrock-Blog
// @homepageURL https://github.com/Kidpaddleetcie/skyblog-editor-advanced
// @author       Glin Kidpaddleetcie
// @match        http://*/*
// @include     http://*
// @include     https://*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @connect skyrock.com
// @connect     *
// @connect     self
// @run-at      document-end
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_info
// @grant       GM_openInTab
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_notification
// @grant       GM_download
// @grant       GM.info
// @grant       GM.listValues
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       GM.deleteValue
// @grant       GM.openInTab
// @grant       GM.setClipboard
// @grant       GM.xmlHttpRequest
// ==/UserScript==

(function() {
    'use strict';


    let buttons = [{
            "type": "evidence",
            "avant": "'[c=#3366ff;][g]'",
            "pour": "'[/g][/c]'",
            "title": "Mettre en évidence",
            "image": "#"
        },
        {
            "type": "correction",
            "avant": "'[c=#ff0000;][g]'",
            "pour": "'[/g][/c]'",
            "title": "Corriger",
            "image": "#"
        },
        {
            "type": "insiste",
            "avant": "'[s]'",
            "pour": "'[/s]'",
            "title": "Insister",
            "image": "#"
        },
        {
            "type": "citation",
            "avant": "'[c=#ff9900;][i][g]'",
            "pour": "'[/g][/i][/c]'",
            "title": "Citer",
            "image": "#"
        },
        {
            "type": "Titre",
            "avant": "'[size=16px]'",
            "pour": "'[/size]'",
            "title": "Titre",
            "image": "#"
        },
        {
            "type": "Lister",
            "avant": "'👉'",
            "pour": "'[break]'",
            "title": "Lister",
            "image": "#"
        }
    ]



    let buttons_map = " ";
    for (let i = 0; i < buttons.length; i++) {
        buttons_map += '<li><a href="#" class="edit_' + buttons[i].type + '" onclick="(TAinsert(' + buttons[i].avant + ');return false;"title="' + buttons[i].title + '"><img src="' + buttons[i].image + '" alt="' + buttons[i].image + '"></a></li>';
    }
    document.getElementById("toolbar").after().innerHTML += buttons_map;
    console.log(document.getElementById("toolbar").innerHTML);
})