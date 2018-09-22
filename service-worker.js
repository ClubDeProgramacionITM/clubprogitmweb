/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aa45ab030b8ea78fdd98a7077e269cd3"
  },
  {
    "url": "assets/css/1.styles.c85243b6.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.5c3add12.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/3.styles.cbccf8b4.css",
    "revision": "21e625ac064d7cdaf260d4cd25907825"
  },
  {
    "url": "assets/css/styles.095edc31.css",
    "revision": "98e1c610b761301625afb46e83d2349d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c85243b6.js",
    "revision": "c95129fb2e3d646c8d727a1c7c4303e8"
  },
  {
    "url": "assets/js/2.5c3add12.js",
    "revision": "161aecd5d01559420fa93be8704684f2"
  },
  {
    "url": "assets/js/3.cbccf8b4.js",
    "revision": "8ab2d40d2b2b33fcf80bae7183f13667"
  },
  {
    "url": "assets/js/4.c549b485.js",
    "revision": "38e43bbdd34f4c68f904f7c3e5b64a89"
  },
  {
    "url": "assets/js/5.4448e145.js",
    "revision": "9bc68b67ef38357c71c7ebec02fea593"
  },
  {
    "url": "assets/js/6.b6a3a399.js",
    "revision": "67ebc421b12bab3f529fe7a2169bb862"
  },
  {
    "url": "assets/js/7.937d9d84.js",
    "revision": "1641a0526ef37735826004e4007d023a"
  },
  {
    "url": "assets/js/8.5665b858.js",
    "revision": "5b2e5e529a9ff849b70ac00ec7df35d2"
  },
  {
    "url": "assets/js/9.d6115ce5.js",
    "revision": "45625e6683e34f5403474b43efa1132a"
  },
  {
    "url": "assets/js/app.095edc31.js",
    "revision": "1a83710232a25b38a32260bb4e48945a"
  },
  {
    "url": "brain.png",
    "revision": "dec72c3bb9bbcb17c9140f28036662e4"
  },
  {
    "url": "cetzalt.jpg",
    "revision": "771fb904efbb7f7a8557d0b6b93d5d6a"
  },
  {
    "url": "eventos/index.html",
    "revision": "52cf3a1921a42937353510e8b0509ce4"
  },
  {
    "url": "geo-op.jpg",
    "revision": "23ce5d583906c5183749fa74341dd0eb"
  },
  {
    "url": "geo.jpg",
    "revision": "c85afa51539115ea051d50e9083da905"
  },
  {
    "url": "gerardo-op.jpg",
    "revision": "69ca2c6185745d478b0c5017fd2bcf93"
  },
  {
    "url": "gerardo.jpg",
    "revision": "d21e8545fb509ace22d53406ef03ddf8"
  },
  {
    "url": "hero.png",
    "revision": "2a6443f4a8149cb85350a6735b55f2ef"
  },
  {
    "url": "index.html",
    "revision": "a0be57e09cd5d5682567546d52cbbd66"
  },
  {
    "url": "juandedios-op.jpg",
    "revision": "8f5af8895ef441b45f8711a3b7cc7f54"
  },
  {
    "url": "juandedios.jpg",
    "revision": "c272bd6a77e3cc823632e4cd683e2b31"
  },
  {
    "url": "mario-op.jpg",
    "revision": "31c34534db849152ddfb178be415110e"
  },
  {
    "url": "mario-op2.jpg",
    "revision": "e5ab114a58e927646e6d8a3f9fd6dcad"
  },
  {
    "url": "mario.jpg",
    "revision": "c587c55177e9da155e644a920a079e2b"
  },
  {
    "url": "nosotros/historia.html",
    "revision": "550ff2d346aebda5e0bd455495c79816"
  },
  {
    "url": "nosotros/index.html",
    "revision": "eeec91c58b6e75d12e718b39e5643da7"
  },
  {
    "url": "nosotros/integrantes-actuales.html",
    "revision": "779afba4e2cb23160844ef0e4c53a460"
  },
  {
    "url": "nosotros/veteranos.html",
    "revision": "bbd136e5be99774b589d2104d864eb61"
  },
  {
    "url": "Optimized-pepe.jpg",
    "revision": "65da2b467969647e77300a6e444cce2b"
  },
  {
    "url": "pepe.jpg",
    "revision": "7e3a4f515173ac2fab4448269c86cec0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
