"use strict";var precacheConfig=[["/react-game/index.html","b56126171529c0c14a0dfc549df1bab1"],["/react-game/static/css/main.1825314c.css","515247e9362a9c0db5e3d1615f94c71c"],["/react-game/static/js/main.be337afa.js","3048cf94aae755ee537e8743cc595b1e"],["/react-game/static/media/city1.4bffa76b.jpg","4bffa76b8a5fa3504f3cb837ca469845"],["/react-game/static/media/city10.4c936545.jpg","4c9365455be62853bc6a958dd82330bb"],["/react-game/static/media/city11.dde949bd.jpg","dde949bdf824cef7e6c12083aa42bc90"],["/react-game/static/media/city12.478192ee.jpg","478192ee9666f8a8a074fbf0ee4b418d"],["/react-game/static/media/city2.76e52c5e.jpg","76e52c5e695a2d6b79c582b161786247"],["/react-game/static/media/city3.3c6f2416.jpg","3c6f2416f4ec0fbdd6fa68e4f55274f7"],["/react-game/static/media/city4.3c8ac2dd.jpg","3c8ac2dda9c31f3f9ec9dde47c7f5f31"],["/react-game/static/media/city5.1521cf84.jpg","1521cf8451f1dfcb7fceac033b5f297e"],["/react-game/static/media/city6.235296cd.jpg","235296cd2f4f34e1489c1266b1895e65"],["/react-game/static/media/city7.6edb7bf5.jpg","6edb7bf5a29cb5c27b6f427f0958c0c9"],["/react-game/static/media/city8.c892679b.jpg","c892679b3f23ef3b15b4a437cb739081"],["/react-game/static/media/city9.8421fa68.jpg","8421fa68e94213a33079116d5a0cde8d"],["/react-game/static/media/header.c74e4463.jpg","c74e4463a5e42b95e2883cee73cc872d"],["/react-game/static/media/logo.b416b911.png","b416b911f71c8613bf149b6032354eb7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/react-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});