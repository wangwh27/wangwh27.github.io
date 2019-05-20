/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","c1e994fcba4378fd893b77daf9668b9a"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","06eb128334b7c2e6445da21c2e66942a"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","49d013ea83210f89240ea5fc38a7f6ca"],["/2018/12/25/大数据学习-初识Hadoop.html","948b1c22a419ab3be8dd07d46bf89f76"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","c4e365895b8f956fe6ace1cf34b0458e"],["/2019/03/08/使用Forking工作流提交作业.html","6d4549115591139c8216b38e8b60b213"],["/2019/03/12/Assignment-1-Warmups.html","b2d6a70addbeb9960793a2bfb7ac1f7c"],["/2019/03/17/Assignment-2-Breakout.html","fd917bf32f0ea0dae8a99cc6e3e24f8b"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","78ecbb7b39f7fda547e3e7e685961b9c"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","5c6a338516e7eb1ddbc07c8e5412e405"],["/2019/04/12/Assignment-3-Hangman.html","d7bf1490c39b997e26c3f93419155b3b"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","31ae12cf2dcb927cdf565cfb9641874b"],["/2019/04/20/学习道路上的暂歇思考.html","096d42ec9097c62d952b34f3ef6f7e74"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","77956ae14ae3b380404391e98e77141b"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","f9844cd7f394e843580755d478fc2ff4"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","e4b4dfe8e77d152c210cd5a1e385166c"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","a2227d3d7b380cf6c25f1eb37696b378"],["/2019/05/10/Commit-message-guide.html","cb6436420df648cfbeddaa8c00a24752"],["/2019/05/19/《图解HTTP》读书笔记.html","d794e80eecd8ae5d0278126f3f3e536f"],["/about/index.html","bc2e0c59ccea961b0988fb7eaa13bed5"],["/archives/2018/11/index.html","c8f15f27251ab31bd0685dc62bd32abc"],["/archives/2018/12/index.html","327c5a1a65bcea833b7aa316bcbde490"],["/archives/2018/index.html","444db99ae87acbbc1c6b13af57bb74f8"],["/archives/2019/01/index.html","e0e09c479a07b2afa37e0fb962406fd3"],["/archives/2019/03/index.html","a7db8ab31ed5b7488ad8cf8caea21af5"],["/archives/2019/04/index.html","a3637050b9e2a1264d64f86c5f2f0ebf"],["/archives/2019/05/index.html","41782bdaf0c39b16b3b6e2bf685afbf1"],["/archives/2019/index.html","01500ab95e5579fd15dc630790c27294"],["/archives/2019/page/2/index.html","5dd3ff94edda83de102d168cdd1bae7d"],["/archives/index.html","ecb3da50972e79d3090adcca9ce4cfad"],["/archives/page/2/index.html","bc6c6e12409e1e3b9e27fbf1cdc03080"],["/categories/Java-beginner/index.html","1953021100cd8f3f7d4ed1605fa8fe64"],["/categories/Princeton-Algorithms/index.html","91354088042a6e53c36a332a66456d47"],["/categories/Programming-Languages/index.html","eba656a129c5f66fd9010e9b37f377b0"],["/categories/Vue/index.html","9345cf897f0d1caddb8982175a0747d7"],["/categories/index.html","f0a0ae1f9ca2c9d00f47fa52e6d3d197"],["/categories/人生苦旅/index.html","193d6d78173e324a50f69f822dc6b625"],["/categories/折腾/index.html","655489e2f19ffa350cc4b1ddad105a20"],["/categories/知识总结/index.html","bce4d62be95e2e45473e4acc38cd9fa9"],["/categories/翻译/index.html","086d111a8d179f09fea776ac5ac1a564"],["/categories/读书笔记/index.html","6f14593334a97dca89aa15915c8724b7"],["/css/main.css","903ae5a2a0dd95e4567a9883e46c23c0"],["/gallery/index.html","0e8ff758ee312bbbbc7613942c80e70c"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","fabe852ce7f5e6ec476c09eaa36b1e50"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.jpg","6f6f03fc72b0c1f2864409ceb1d5487e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","1e46fdf7d8f3e20e1e77c8e1099039cc"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","a69e3e2ac01054ef53fdb0f567923f30"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f528eb301d706a143abd61b64807ef18"],["/page/3/index.html","6017e3b7e30fbd832cc94a2ccfcf52d5"],["/page/4/index.html","960e0163c7182d2ec49c1af7846ad7eb"],["/reading/index.html","9786c625ff21ed3cb0fd765aea666d9c"],["/sw-register.js","8d8514b9438a5d06c165e7ea5463ea64"],["/tags/Algorithms/index.html","4e174f943b24c54e939f92b5e9183ddb"],["/tags/Emacs/index.html","795d9216f05466d32bce99a825da0d49"],["/tags/HTTP/index.html","d55fffa19e074ac3fa572d4d45fd6596"],["/tags/Hadoop/index.html","0ca2b1e74cb76a500a5b05588d49fa53"],["/tags/Java/index.html","83e83582cacb7e9ebaea52c61dfd7f80"],["/tags/JavaScript/index.html","2d8eb8b70fad453002986a133eed091b"],["/tags/JavaWeb/index.html","2b2816c219858dccdf50c8a08f9fe0f4"],["/tags/Java基础/index.html","4f97b3da71164745c8f76025401b28e4"],["/tags/Linux/index.html","1fe6d387a8722a78fb7b6a60af6e9220"],["/tags/Programming-Assignment/index.html","fac4e5a50ce0d326d892fe040eba0b12"],["/tags/SML/index.html","7d532b8274690ac250743d9c6f563fd9"],["/tags/coursera/index.html","eedae1d171c4cb3bfcf3170924827d0c"],["/tags/git/index.html","874513fb187fd784ea41596fc7cbf269"],["/tags/index.html","45a0358ccfefd6bd14efe766bb2a92f6"],["/tags/vue/index.html","df594f262ca89e03bf8dfc4fa04ed418"],["/tags/个人总结/index.html","9c9a379485a422f638fbb52d7fdbd506"],["/tags/前端/index.html","cd0770081d42b2bd9dfccaa81f4c0c18"],["/tags/大学生活/index.html","02582e03578ae352d602432430f11ed3"],["/tags/大数据/index.html","d1d79cae9fc3d3fafa01237eae2727cf"],["/tags/总结/index.html","b28126d27f8f2f2abe73b54cc8d0bfb9"],["/tags/折腾/index.html","519a93046341f9a25c23ab3658f72827"],["/tags/数据结构/index.html","c146c923991685ca7c3279f1e544bef1"],["/tags/算法/index.html","12da485ceb8d34ab6bbcd9ee3660e6e3"],["/tags/终端/index.html","bb28d524c4f1f09e646ed4c6efc2deed"],["/tags/美化/index.html","18189a33ea9bbd6f852abc1fdf734bbf"],["/tags/通天塔/index.html","6b41a6da9e685a7091326cd4a6c6edd9"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
