const txt = '{ "type": "Moba", "Title": "urmom", "platform": "pc", "img": "pp.jpg", "info": "Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainments Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character known as a &amp;quot;hero&amp;quot; that all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to successfully defeat the opposing teams heroes in player versus player combat. A team wins by being the first to destroy the other teams &amp;quot;Ancient&amp;quot;, a large structure located within their base."}';
const obj = JSON.parse(txt);





document.getElementById("info").innerHTML = obj.info;
document.getElementById("type").innerHTML = obj.type;
document.getElementById("img").innerHTML = obj.img;
document.getElementById("platform").innerHTML = obj.platform;
document.getElementById("Title").innerHTML = "Title of the game :" + obj.Title;