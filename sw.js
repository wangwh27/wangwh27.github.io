/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","d0664656c100afb1d3f3e803710ce639"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","26112c7340ace5c849828a2ee8bd498a"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","2f94c26ea1e8e501cae572d9107476c8"],["/2018/12/25/大数据学习-初识Hadoop.html","923e4c6e95ae3edc41f21eec2b9ff36f"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","132c7169e6f6c0c26a6ffbcd002a9f0e"],["/2019/03/08/使用Forking工作流提交作业.html","19133bff6a35b87644122fa7a3b54b4f"],["/2019/03/12/Assignment-1-Warmups.html","c3c5d1b49d552bef49a024d7eaf4f6d8"],["/2019/03/17/Assignment-2-Breakout.html","93759124eab9783f01da595dc7712061"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","fd3b8f54eb6a74072d32e904a75cbc1d"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","a3ca504d739c2403a2d09369bb4ffc5f"],["/2019/04/12/Assignment-3-Hangman.html","e233fba62427f368b744814fd83c98bd"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","d2520f6d1e3085854d3501cad99f19bb"],["/2019/04/20/学习道路上的暂歇思考.html","99938afb0fc8b6ebe191c31229f73cfc"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","99ef7a5363205e8f8b282f38b810c18c"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","40c7b091483e70c4b907ee2a2f59524c"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","06524db7f9795bc789ed04335ca0b904"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","2588a2bec9c2ab494990d30165f367fd"],["/2019/05/10/Commit-message-guide.html","ba31f136040f91c83e569221d797d74a"],["/2019/05/19/《图解HTTP》读书笔记.html","f4b887cb2a27d7c719d095a5fc6f3937"],["/about/index.html","be54cfe42c7b77daed1976b1e85370b9"],["/archives/2018/11/index.html","8c72601a0cc3890094b94f84f97ab8be"],["/archives/2018/12/index.html","0104e60685cbf7210cdc5441a48f691a"],["/archives/2018/index.html","8ce753d4bec7695609a271bd7ae7b526"],["/archives/2019/01/index.html","87045091638cec39fd34453a43895760"],["/archives/2019/03/index.html","73f6de3f29f47b8c041a469f7337f0be"],["/archives/2019/04/index.html","64dfbc53e995cef841bd1dd32adbe667"],["/archives/2019/05/index.html","8497398c12f49687e2e981b15cf73ae8"],["/archives/2019/index.html","16b927eab5e4055f78c2d2238b37d1f4"],["/archives/2019/page/2/index.html","1a65b94cca003a10cf4ab9da7fd52a9e"],["/archives/index.html","7b66db79969bf1c27b4d30a0dadd6f08"],["/archives/page/2/index.html","e3e3eeec215d637ebcda2b251a79d31f"],["/categories/Java-beginner/index.html","0cb2f322bcddae8b370aec065e5ea74d"],["/categories/Princeton-Algorithms/index.html","2379800c095b6e537d594b8edfa584f5"],["/categories/Programming-Languages/index.html","4205c31f670d1e4efa90e11f349d9a2a"],["/categories/Vue/index.html","23268fee2a1ed5b3f59d574e132d9c84"],["/categories/index.html","8bcbb3ff6d395e60f5aef53d6680dc91"],["/categories/人生苦旅/index.html","2528b1a9913272bec0c75fa053546960"],["/categories/折腾/index.html","39714bc1a77d5de89005d4619b61b7ee"],["/categories/知识总结/index.html","db3c298e56540b988a5317267a29c013"],["/categories/翻译/index.html","f4c3d2c1416b52dd487d1509b508ae49"],["/categories/读书笔记/index.html","50a261feba966cab8f8b922416b25e15"],["/css/main.css","51665672d413f8439d153cd7413c5dfb"],["/gallery/index.html","c7dda5d8d9c0770075a744208a0ad642"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","fabe852ce7f5e6ec476c09eaa36b1e50"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.jpg","6f6f03fc72b0c1f2864409ceb1d5487e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","4524620f3390a0212b07488f54a33a39"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","10c8e93e8ffd5e8e103942bcf6d6ffc6"],["/page/3/index.html","c47567e7ef3caeb1a87a5c0eea90904c"],["/page/4/index.html","6b4404d93690714a90dbb467434031c3"],["/reading/index.html","c2ef6a80d574aa97262f820b863ce22f"],["/sw-register.js","c4414833d85aff2728c383fcdd7bc496"],["/tags/Algorithms/index.html","42c6f5540955cda784c3908f2df164de"],["/tags/Emacs/index.html","f48cc2ffdb56e0d7c6f110d79f05bd30"],["/tags/HTTP/index.html","f79b40117e8cde2dee3514b2bdadd30a"],["/tags/Hadoop/index.html","0f7a00be1127fe22e9126d5822263968"],["/tags/Java/index.html","157896c3fcd30c39d270ec4bb4f4da06"],["/tags/JavaScript/index.html","f5b28a6209b6acdac0ec80e94c8a5181"],["/tags/JavaWeb/index.html","3a62963499c2916b83fd6b1c2724f9c0"],["/tags/Java基础/index.html","3eea95375b3c1096329538106fd1133a"],["/tags/Linux/index.html","2fed92d71f339dbdeaf723506ba439b0"],["/tags/Programming-Assignment/index.html","bfdd00c0a864b2ba254e1f885016d90e"],["/tags/SML/index.html","22b384001eaaf10bcd40cd755f715a07"],["/tags/coursera/index.html","fef454bb69e118f6fc2111e1a2fc2749"],["/tags/git/index.html","c468796bc4fe4cfc96598536372b4e3f"],["/tags/index.html","45334113cb221cd2c934d449d03122cd"],["/tags/vue/index.html","325e5e9291834f2d8cc61851a95c3383"],["/tags/个人总结/index.html","1eaecc028b7b346a789a2e55f55d4ed1"],["/tags/前端/index.html","1aa8dd3e39fbe8198bf6ddc0ad47ab20"],["/tags/大学生活/index.html","98888aeef37aef90d2989b9b4cd48129"],["/tags/大数据/index.html","dc0da137cf1ab04b3bdf9042de87ba3d"],["/tags/总结/index.html","6c8dba67893b45b79249f07cd04c21fa"],["/tags/折腾/index.html","b094da76198f5e0ed217beb09326b937"],["/tags/数据结构/index.html","c3df8bcebfc4f97bb03ddffa79aec534"],["/tags/算法/index.html","f57abea5baaece893f9b91b2225e4126"],["/tags/终端/index.html","cf844467128274f763dbed233e634324"],["/tags/美化/index.html","52e8632647c0f9f4a3567bdd0447a1a9"],["/tags/通天塔/index.html","d18754f294c3a857cc223b1ea4a4a53d"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
