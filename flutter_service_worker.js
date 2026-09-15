'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "821bda3cfad27b1b2e3ce8a6d28b43f9",
"assets/AssetManifest.bin.json": "cb5d198c386e6e6c493ad5ddf54752db",
"assets/AssetManifest.json": "b2ddd0838366800ab52cc41fd5683b6b",
"assets/assets/audio/hit_buff.wav": "550d75f43b67644411ccb800cbd16c7d",
"assets/assets/audio/hit_debuff.wav": "e26e0dcb8b684274282f9003cb93c9fb",
"assets/assets/images/Background/background.png": "d6734deaf6d30b89d5aa368c1e5f75ab",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles%2520-%2520tree%2520-%252032x32.png": "28c57a59ceb3989411da1f51650103ab",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-earth-32x32.png": "111174a3e1e96de408d2905ba82f4493",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-fence-32x32.png": "ba7c906b94709653720117a54a87d7ed",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-grass%2520dark-32x32.png": "2766c5fef0e9e9cd1de760ba4b102ebc",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-grass%2520darkest-32x32.png": "21fe1c63793297ea221f43aa77e2e918",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-grass%2520light-32x32.png": "8ff89115e0ca54d397e7792ac4db623d",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-grass%2520lightest-32x32.png": "6b457e1afb39b63939f03893dc0276d0",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-grass%2520medium-32x32.png": "4d230dea8d7f4841364aec5d206aa73d",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-grass-decoration-transparent-32x32.png": "6086b617d3ca2e7f82af5681f3111d6b",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-stone32x32.png": "a39b724b6b4a56c1325a3cec2af184d1",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-terrain-32x32.png": "07ca75d25268c3024a1f4e32e497f16a",
"assets/assets/images/basic_tileset_and_assets_standard_v3.0/tiles/tiles-water.png": "b4ff7c5e3c8702cb222af6f9b77249ca",
"assets/assets/images/Board/Default%2520(160x96).png": "126ba8b63e2d8d9f6dccb1638fac8cb0",
"assets/assets/images/Buff/Idle%2520(32x32).png": "4583f3387292d34f42bfa2d509c90de9",
"assets/assets/images/Card/orange_steel_blue_card_back.png": "e043f35e681bb190759c8b3ac2b56969",
"assets/assets/images/Card/orange_steel_blue_card_front.png": "3d3217c2ee640e3d998af96a9da118cb",
"assets/assets/images/Debuff/Idle%2520(32x32).png": "16368cc8f55cf5742a24f64589f58074",
"assets/assets/images/Hourglass/Idle%2520(32x32).png": "9daf04d1d9178fc79d38624b31790c01",
"assets/assets/images/Monster/Idle%2520(160x96).png": "458e4738f7e49d209cbfaf4388a336c8",
"assets/assets/images/Monster/Idle%2520(160x96).png~": "2b8c34e00ea407877859f54ed798eee8",
"assets/assets/images/Path/Orange_Mix%2520(32x32).png": "aee5c2db523490526ad926fe72daff24",
"assets/assets/images/Vehicle/Blue_Car/Idle%2520(32x32).png": "2a65168f23a69a2963112ae1bd6d29e9",
"assets/assets/images/Vehicle/Blue_Car/Moving%2520Side%2520Right%2520(32x32).png": "3164ce34f44843a8b2671818d7235f04",
"assets/assets/images/Vehicle/Blue_Car/Moving%2520Up%2520(32x32).png": "df5f6b444383e12764f01981fff96e72",
"assets/assets/images/Vehicle/Circle/Idle%2520(32x32).png": "f3759f1adde0d37770ea015cbe8b6547",
"assets/assets/images/Vehicle/Circle/Moving%2520(32x32).png": "f3759f1adde0d37770ea015cbe8b6547",
"assets/assets/tiles/Background/background.tmx": "91fcc7b4a1ec4cfe01f433ea2d06984d",
"assets/assets/tiles/Start_Line/startline%2520(96x64).tmx": "914f8daacb747c661197bac8592a4b3a",
"assets/assets/tiles/tiles-grass%2520medium-32x32.tsx": "db56c755410de133baf3a8e9bcb810fb",
"assets/assets/tiles/tiles-water.tsx": "739e27833fbfdc23db05fa036bf11977",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a31a35ed335a415956a5e7e508b2e7ca",
"assets/NOTICES": "930d4a702b46f39d1e9d831447362138",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "778a2127710d097fbb2b5f7af3a8d173",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2fe90a60d5fcb519a09f82189ced46c4",
"/": "2fe90a60d5fcb519a09f82189ced46c4",
"main.dart.js": "23375c7df3205cd34293b00c8b43ca19",
"manifest.json": "8129b6fffadb073c0e531854ea5bda46",
"version.json": "a0f6269aa53c47e571bf53266b7df660"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
