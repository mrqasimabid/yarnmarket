'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6b922c3dada7d8d3fe6c93fc59249a7e",
"assets/assets/Anton/Anton-Regular.ttf": "055c4df4e2f8c7a4d4675cdd8fa68da0",
"assets/assets/landingimages/container_bg.jpg": "b7200d70863c2a29ced290ee38083bd1",
"assets/assets/landingimages/container_bg1.jpg": "ab4fb79ccb8d0a3fbce2c2f8fdc30146",
"assets/assets/landingimages/download_icon.png": "cda7722ff566af775c70430fe5e74cb8",
"assets/assets/landingimages/marblebg.jpg": "ddd68c7f66d7b7ff9c30494345888853",
"assets/assets/landingimages/ntu.jpg": "36c593c675f0ac8ba48ebc96e721406b",
"assets/assets/landingimages/yarn.png": "043d0bbf168a04cb3d44195a2c57bad9",
"assets/assets/YARNMARKETLOGO.png": "6b04f4975752c1f82c219738d2776a5c",
"assets/assets/yarnPics/1.jpg": "9c140fab937956ae72b46aedb3edd580",
"assets/assets/yarnPics/10.jpg": "b47523a391b6a2202ccdae91a009d588",
"assets/assets/yarnPics/11.jpg": "bbda372a51f7ce3fff67fe1dcdd0fe0d",
"assets/assets/yarnPics/12.jpg": "ac557a4dd968edc6df52cf3c40600599",
"assets/assets/yarnPics/13.jpg": "499e444ee6a6a47c661b3eab99e93ba1",
"assets/assets/yarnPics/14.jpg": "9488790fdf6592ed5b3eabe7bdc3fdd2",
"assets/assets/yarnPics/15.jpg": "64bc210272ae147dc129385a0b241d11",
"assets/assets/yarnPics/16.jpg": "c411a413cedf9bdd0061a3465c8c04c6",
"assets/assets/yarnPics/17.jpg": "72705558eadbeef284e2bd7e9d56b7b7",
"assets/assets/yarnPics/18.jpg": "258f54dd3dc3395ea52238df61490f57",
"assets/assets/yarnPics/19.jpg": "e1888370bbe093a68aaa34b22cd5a414",
"assets/assets/yarnPics/2.jpg": "486f1e005a3bb9ac4f7e34132464ee95",
"assets/assets/yarnPics/20.jpg": "b44454a05236ffd359f52c4440dc54be",
"assets/assets/yarnPics/21.jpg": "c4443254dbe7b74677e66fcfe7ce30a2",
"assets/assets/yarnPics/22.jpg": "aa7757864050e09e24a4cfb72fc6e910",
"assets/assets/yarnPics/23.jpg": "5727b20d8a70d919b462e4138792cd78",
"assets/assets/yarnPics/24.jpg": "6d6d06215add0cbb3698fa2995a547d9",
"assets/assets/yarnPics/25.jpg": "066559b6bdd2a60ef9a13706209e36c1",
"assets/assets/yarnPics/3.jpg": "1a4fe06bdbba0e5d91cb546c9f88341e",
"assets/assets/yarnPics/4.jpg": "72917e25f04be16a7e7760f83c00bc03",
"assets/assets/yarnPics/5.jpg": "7c5992bad652dde8a92241b16310ddbc",
"assets/assets/yarnPics/6.jpg": "02a5720a589afa260643a77080e517d1",
"assets/assets/yarnPics/7.jpg": "33807dcd99391526636de4d7edc8830a",
"assets/assets/yarnPics/8.jpg": "3877658ba252eea64bb39838766d5ad6",
"assets/assets/yarnPics/9.jpg": "2b6697ed8a83cc546589466a197f621e",
"assets/FontManifest.json": "08d2ff222f8ff9b31264a5e7f59345cb",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "23966c9fd526f6cd62037fe9355e9a46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cef57a19404db5a6e7a59db56bfbfbe2",
"/": "cef57a19404db5a6e7a59db56bfbfbe2",
"main.dart.js": "98e1b997dbd72f9adcaac8b8f1030060",
"manifest.json": "f3187463a6444af95fa4e7607e61d564",
"version.json": "ca14984204736ade8444989a16136fc2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
