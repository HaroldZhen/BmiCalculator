!function a(i,r,c){function s(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(o)return o(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=r[t]={exports:{}},i[t][0].call(n.exports,function(e){return s(i[t][1][e]||e)},n,n.exports,a,i,r,c)}return r[t].exports}for(var o="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,n){"use strict";var c=document.getElementById("height"),s=document.getElementById("weight"),a=document.getElementById("calculator"),o=document.querySelector(".btnBox"),l=document.getElementById("resultBox"),d=document.getElementById("bmi-number"),u=document.getElementById("bmi-messages"),i=document.querySelector(".resetBtn"),r=document.getElementById("clearBtn"),m=document.querySelector(".records"),g=document.querySelectorAll(".input"),f=[],v=!1;function h(){c.value="",s.value="",o.classList.remove("active"),v=!v}function y(){v&&h()}function p(e){var n="";e.forEach(function(e,t){n+='<li class="record-list '.concat(e.statue,'" data-id="').concat(t,'">\n    <div class="record-list-status">\n      <span class="tag"></span>\n      <span>').concat(e.stateTxt,'</span>\n    </div>\n    <div class="record-list-bmi">').concat(e.bmi,'</div>\n    <div class="record-list-weight">').concat(e.weight,'kg</div>\n    <div class="record-list-height">').concat(e.height,'cm</div>\n    <div class="record-list-date">').concat(e.date,'</div>\n    <div class="record-list-btn">\n      <a href="#" class="delete">\n        <i class="material-icons" data-id="').concat(t,'" data-action="delete">delete</i>\n      </a>\n    </div>\n  </li>')}),m.innerHTML=n}function I(){f=[],localStorage.setItem("myBMI",JSON.stringify(f)),p(f)}function E(e){e.preventDefault(),"I"!==e.target.tagName||"delete"===(e=e.target.dataset).action&&(e=e.id,f.splice(e,1),localStorage.setItem("myBMI",JSON.stringify(f)),p(f))}function B(e){g.forEach(function(e){0<e.value.length?e.classList.remove("error"):e.classList.add("error")}),e.preventDefault();var t,n,a,i=parseInt(c.value,10)||0,r=parseInt(s.value,10)||0;0!==i&&0!==r&&(n=(new Date).toLocaleDateString(),t=i,a=r,e=Math.round(a/Math.pow(t/100,2)*100)/100,t=a="",e<18.5?(t="underweight",a="過輕"):e<24?(t="normalweight",a="理想"):e<27?(t="overweight",a="過重"):e<30?(t="slightobesity",a="輕度肥胖"):e<35?(t="middleobesity",a="中度肥胖"):35<=e&&(t="extremeobesity",a="重度肥胖"),n={height:i,weight:r,bmi:(a={bmi:e,statue:t,stateTxt:a}).bmi,date:n,statue:a.statue,stateTxt:a.stateTxt},v=!v,o.classList.add("active"),a=n,l.className="result",l.classList.add(a.statue),d.innerText=a.bmi,u.innerText=a.stateTxt,f.unshift(n),localStorage.setItem("myBMI",JSON.stringify(f)),p(f))}f=JSON.parse(localStorage.getItem("myBMI"))||[],a.addEventListener("click",B),i.addEventListener("click",h),m.addEventListener("click",E),r.addEventListener("click",I),g.forEach(function(e){e.addEventListener("focus",y)}),p(f)},{}]},{},[1]);