/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","2b54982dcd0e6c708372596a52b6398a"],["/data/en/resources.json","a543c756b10fa0e43bd7cb0137b436cc"],["/data/hoverboard.config.json","b3ea9d016767bd39901cfb1d8354055b"],["/data/partners.json","ea0fe9f2ba27acf25c13e50959b95970"],["/data/posts/2016-09-01-devfest-2016-announced.markdown","bef1630648fcc6c4884962006a64758a"],["/data/posts/2016-09-05-calling-all-papers.markdown","ef1de6f03f20622c2970d111c4a06b1c"],["/data/posts/code-of-conduct.markdown","cca95ce9f3b11dfed12c1713213bba45"],["/data/schedule.json","32e95f3e2b3b7f1a6571a35f2d8eb502"],["/data/sessions.json","d3847b5fb6a46d3e173833713db62af5"],["/data/speakers.json","b0a2e1a80fcdf05a66d5c6409ce0ba2f"],["/data/team.json","32518b3ad855f506fd479f160fd2103a"],["/data/tweets.json","80b8481b23c5a2e43a316f24b8973f04"],["/data/videos.json","fd2afd85b16fc4b7ebba7a17565720ea"],["/images/backgrounds/2015_1.jpg","0740b826ae89b8442eeea2ca1a43a819"],["/images/backgrounds/2015_2.jpg","87bf05cdd7cf4838896883b916b07f9c"],["/images/backgrounds/2015_3.jpg","cfa290372219fd66e84abfdaea07afec"],["/images/backgrounds/amsterdam.jpg","3bccaaffbb43c4a22045f0dae8b58f32"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/logo-light.svg","de409f80cd3b7d729ae0c2c9caf8a80f"],["/images/logo-season-light.svg","2f368eefac3d4e305e470ce8be896368"],["/images/logo-season-white.svg","94f517204edbbc3da51c1d3bf616ea0d"],["/images/logo-season.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logo-white.svg","76c5e656d9c34ba4db7fd29991916185"],["/images/logo.svg","360d148388284b38e9bfd7a1702292a0"],["/images/logos/Logo_Qualogy_groot_RGB.jpg","bc83b479d93a2ee5841ac6c43763720c"],["/images/logos/UsMedia.png","4c869fa36740ff499304561d57e8e4ed"],["/images/logos/UsMedia200.png","14c7ffe5967dc2d5401330b29bd5c486"],["/images/logos/UsMedia250.png","0bca58278fa95982a7abebd8b9aeaa7b"],["/images/logos/albert-heijn copy.jpg","0d2fa54d60d05c628b048a065e6e00f1"],["/images/logos/albert-heijn.jpg","27a22c241379b91768ec920aa4ce0048"],["/images/logos/bol-com copy.png","fdd25a088547c265efd1a028fb0cc111"],["/images/logos/bol-com.png","0b4db698b2154b1bd2abc8df1d201ed2"],["/images/logos/darwin copy.png","bf0321ccdc7989b7f6a795ecd1c7c8d6"],["/images/logos/darwin.png","07f8e850a3ecfb7960f7c7a835481405"],["/images/logos/gdg-dutchaug.svg","145392944abff63a6d9345f6d25acc60"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/logos/jdriven.svg","affbbb9e1c3fecfd26e1ac5c6b81a360"],["/images/logos/jdriven300 copy.png","6e97a742bc6003eaed823400cde2a5fd"],["/images/logos/jdriven300.png","7906ce17c9686224f993a2fa6452547d"],["/images/logos/jdriven_logo_no_tag_large.png","3f830a613b482d08b0674067342e3b95"],["/images/logos/m2mobi.svg","10e3914669507026f1352b1e1de2b437"],["/images/logos/minor-programmeren.png","38bc684c95f7b3480c2347972a467f1d"],["/images/logos/nubis copy 2.png","fc985862867c5f0fa244a57d2dacf296"],["/images/logos/nubis.png","85894343e22809a2a5dcbaaa995649b2"],["/images/logos/q42 copy 2.png","e8c2917815b2d7d94130f04ba25db6a8"],["/images/logos/q42 copy.png","db941f7590b0700192bc57f70da8b3ac"],["/images/logos/q42.png","c30673e9e5377996fd250f80fd3ca90c"],["/images/logos/qualogy300.jpg","2c835a1363f46f92529eb44322d1f2e1"],["/images/logos/triple.png","bd454501f8c714882b54949357b1437a"],["/images/logos/ttn-logo.svg","3e781f47c572c1da87c9c4aad1d19f9d"],["/images/logos/yourlogohere.png","cacbc2cedd8ed9ebd1ee97c0e59b3c4d"],["/images/people/DylanDrost.jpg","b9a8700360e8e1ffdb7ed47a3774a339"],["/images/people/ErnestMicklei.jpg","4e1606dadb2ac0ed0badc6d4801123c4"],["/images/people/JeroenVisser.jpg","b1e23d47a96d7d5f10f7b8a3c1a6adb1"],["/images/people/JohanStokking.jpg","3cd0001e0b76d725d97c5715954148ed"],["/images/people/RokeshJankie.png","ace1a1d7c580914246029eea35c3c702"],["/images/people/_tracylee.png","6431af2335e595cc3a55b584b1752d9d"],["/images/people/_tracylee2.jpg","0878f250c9b0dbde205fb85278cd4b7c"],["/images/people/abrahamhaskins.jpg","d219f5ce53216e674e751e5458ff7047"],["/images/people/basknopper.jpeg","ee3dfd66a878fed9eaed57059b1c7e26"],["/images/people/camber.jpg","ab12385b4dad1cccb1e047bdab136d92"],["/images/people/elizacamber.png","75ae3f95600a7d2412e1207000077fc5"],["/images/people/elsinga.jpg","efc12350edb3f234fa59ba7965091f25"],["/images/people/erikromijn.png","cc6642ff755cf61fcb07c75f788fa919"],["/images/people/geurts.jpg","20984980fd27298c58152bc1dd93025a"],["/images/people/henriquez.jpg","fd3469adcce4b738115e60c5dd7a8bda"],["/images/people/jankie.jpg","1f19493cd74b4f111337d733a388f98a"],["/images/people/lammertsma.jpg","3562cf1f26709f6f16a50d6de979a517"],["/images/people/mauricedebeijer.jpeg","d0b40f4317e84e30c1163f80ce927477"],["/images/people/mete_atamel.jpg","f6d464313c22a02cb7b614465fad34ad"],["/images/people/pelgrim.jpg","e3a9d4aba3ed905f62395095b2dd5435"],["/images/people/sebastianwitalec.jpg","831a5ca9bedce3e3a631d7046a104dd8"],["/images/people/stefanhogendoorn copy.png","5b5e8b55033808e1610b0cfb94739159"],["/images/people/stefanhogendoorn.jpg","c55c4b005944393d9b3da4f1dc7f7343"],["/images/people/stefanjudis.jpg","3d19aa6e80b50f60958e964fbb3c4b00"],["/images/people/thijssuijten.jpg","3c48d306715eb16e8bbadc357aa0f158"],["/images/people/tomkypta.jpg","77fa7efb1bc12e4b2edf05d721a7ef2a"],["/images/people/tracylee.jpg","86716e54ccc08f18c865c4aaa82e6b11"],["/images/people/tracylee_copy.png","b060596731a5950c7501e49f4698665b"],["/images/people/visser.jpg","6daad395a13c45e7150e1bd5bd7a2597"],["/images/posts/2015-outside.jpg","fb119458d6e9199a639ad4a9d750af43"],["/images/posts/2015-selfie.jpg","134bae2e90da37e044da6cf6753afa57"],["/images/posts/2015-session1.jpg","95761ce32fa742f0c662ff21e7c89a3b"],["/images/social-share.png","67b26db14da998e76afa98d1be743f5e"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/images/videos/recap.jpg","6cc5a66e90a3e00f94b4c9323154139e"],["/images/videos/stewart.jpg","28d7c8734242921fec0dfe0e8ae28868"],["/images/videos/zasadnyy.jpg","5c0bd73922b01312e4b5bc5aa6b26582"],["/index.html","e28c627f84da826f4b3c053a29830d0b"],["/manifest.json","eb15427635af01903cf7a05b72ce90fd"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","c88bbd259d8a4bfb4376b6330f8d9335"],["/src/elements/animatable-content.html","f4b07f855a4880b041ad91499007f74f"],["/src/elements/app-data.html","7ec4b0bf77cf77fc1f745e1793dd1210"],["/src/elements/call-to-action.html","7fdb7902359f1ca408f7b8f7468e5c6d"],["/src/elements/drawer-block.html","f880e40865251965c8adada047559b20"],["/src/elements/featured-people.html","249707dd0ca920238932a7494c0c5a3f"],["/src/elements/featured-videos.html","57f6b6a77616bfda6ea1a568a68d82bd"],["/src/elements/footer-block.html","6b74fd08ebd0f7bc9cd714b0bcfe5d45"],["/src/elements/header-content.html","81e0975d2eb837c9a628ae452318846b"],["/src/elements/latest-posts.html","b42eb31b17c9fcd4569c7edb3005c36c"],["/src/elements/logos-block.html","fec460ab5a7a97e401128cc8c6eb3817"],["/src/elements/mailchimp-subscribe.html","080ada45390e247ba278fa6f5a16634f"],["/src/elements/map-block.html","5a42d8ab97321a85c7b7eb6edf3542f1"],["/src/elements/photo-block.html","6fc4977db8e046054608eb7f680a905e"],["/src/elements/schedule-day.html","ecb8dc1bd2865b9fa501341f44f920d7"],["/src/elements/schedule-subnav.html","a8fdb3ae362521c2f94076b961ee7edb"],["/src/elements/session-details.html","29c1f46f8ec7d30b3e17f59a91d831d1"],["/src/elements/social-feed.html","e6542286d7023f0abd0f6113b5e5dc96"],["/src/elements/social-post.html","57de6b225effefa09554e3a067eebbcf"],["/src/elements/speaker-details.html","b5f6d68d2e5162045f4f9b7715526835"],["/src/elements/statistics-block.html","f4dd4a878c5c10fa3c1d59032323ef83"],["/src/elements/ticket-element.html","cb4022300922de36c3728cc622b10f1f"],["/src/elements/tickets-block.html","8dfcecb54aee013d036b1e2865eb423e"],["/src/elements/toast-element.html","d26f879617a6c9d8a1ef57a0e1073142"],["/src/elements/toolbar-block.html","25bdacb0e172a1898919df27aea76725"],["/src/elements/truncate-marked-text.html","a4e2ead87bcb1526e38395b8c5525a23"],["/src/elements/video-dialog.html","77cc165d7ad1aa76df137b03af61d69d"],["/src/hoverboard-app.html","649fd2a3358840ad856c4d095f4e5cbd"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","b0621b3feed8ff0900dee19f5c98177b"],["/src/pages/blog-page.html","558f2a547620a3595979ac881f0a664a"],["/src/pages/code-of-conduct-page.html","bdc5056df61e333ea04f5f55459f174d"],["/src/pages/home-page.html","e8a5bf05b11b2e7cb8a9aefcf5158e2f"],["/src/pages/post-page.html","5afd570b193d39ab50ddd61c463efaee"],["/src/pages/schedule-page.html","f67f69f294fc761bc9ad9d37c41aba7d"],["/src/pages/speakers-page.html","e60647552d901a024129605cbd829337"],["/src/pages/team-page.html","9865467cea208cdd5b572e002a30e79d"],["/src/styles/dialog-styles.html","f1910f8e1c4247e0e2c4e99814615b7a"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","a97221af3b44a1b3ca296ab0b5d4e10e"],["/src/styles/shared-styles.html","399ceaa5f2fb1e843435f8fa1b5d0f03"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




