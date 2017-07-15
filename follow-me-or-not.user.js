// ==UserScript==
// @name         Follow Me or Not
// @namespace    Follow-Me-or-Not
// @version      1.1.0
// @description  Show the GitHub profile you are visiting, follows you or not in a Twitter-like UI
// @homepage     https://github.com/yfdyh000/follow-me-or-not
// @icon         https://raw.githubusercontent.com/yfdyh000/follow-me-or-not/usersciript/icon.png
// @author       YFdyh000
// @match        *://github.com/*
// @license      MIT
// @run-at       document-end
// ==/UserScript==

var my_username = document.querySelector('meta[name=user-login]').getAttribute("content").trim();
var profile_username = document.querySelector("meta[property='profile:username']").getAttribute("content").trim();
var url = "https://api.github.com/users/" + profile_username + "/following/" + my_username;
var isOrganization = (document.querySelector('.orgnav') !== null);
var new_text = profile_username + "<br><span class='text-muted text-small'>FOLLOWS YOU</span>";

// if "my_username" is empty, user is not logged in
// is "profile_username" is empty, it is not user page
if (my_username.length > 0 && profile_username.length > 0 && my_username != profile_username && !isOrganization) {
    fetch(url).then((response) => {
        if (response.ok) {
            document.querySelector("span.vcard-username").innerHTML = new_text;
        }
    });
}
