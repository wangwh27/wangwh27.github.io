/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","60a8b7e63b29eaf4f6399f9a8ba26377"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","fca4fed28315c5c5e57292f6da5087e2"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","84feb65aeab3268a4f4179b8aef19f54"],["/2018/12/25/大数据学习-初识Hadoop.html","65b6cc3f875df029a6d7e44052261ebe"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","eed9e44b4d05c66dc654b432aa74e223"],["/2019/03/08/使用Forking工作流提交作业.html","aecb3f2500c4f46cc570280dd0ebc8b9"],["/2019/03/12/Assignment-1-Warmups.html","25b0eef9dbe02bfd93f97bd83921e327"],["/2019/03/17/Assignment-2-Breakout.html","d485d557064ff4c0bb1bf9cf153e8215"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","8153311e5b522205ceb7d123e83c4848"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","c0ce83a8b677564c3ab7bb78c90f21aa"],["/2019/04/12/Assignment-3-Hangman.html","94aaa016adbcf4194b0ed29fe6493324"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","6401672d0e15e6bf6e1a181a418aa48b"],["/2019/04/20/学习道路上的暂歇思考.html","f71383f6e9ece27a9fd7ae51f672dd51"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","1c65dd94811b4be643197ea8cbd7564a"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","6340a96cf9ff7e54fb966b09ad1edfaa"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","922e621e5037abc60828bbba3e7c3554"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","f3ba7d0d97e47a9b2083736f93b8f217"],["/2019/05/10/Commit-message-guide.html","d9f8ae99758961e28e04d386fa8864ee"],["/2019/05/19/《图解HTTP》读书笔记.html","4c4225e8905a605f350c7d79cb8272fc"],["/about/index.html","d79fccc8d6496be31a49b024a61caf8d"],["/archives/2018/11/index.html","2367e5947b62d38888a7093caf686ecb"],["/archives/2018/12/index.html","2ea4c7a9ec896892faf8b9c08710752c"],["/archives/2018/index.html","8d891756ef105a3112100c27cc0fde7c"],["/archives/2019/01/index.html","39e4d287b24186926fee65dc61fc35d0"],["/archives/2019/03/index.html","e04635c97c28e8cae1fe63083fa06bf5"],["/archives/2019/04/index.html","4458f78480678b16ac52dcda09e40d20"],["/archives/2019/05/index.html","3dfe69f88440ddcd3980cfdfb7e2941e"],["/archives/2019/index.html","066171e3941454c9015d546fb80a2d4a"],["/archives/2019/page/2/index.html","c8aae4cbabacd6f0452ed21cbd077dff"],["/archives/index.html","f011fd18ccca08a714b487beec292199"],["/archives/page/2/index.html","2a547b5c15613be539784136670b79e8"],["/categories/Java-beginner/index.html","71143ea0058d02de99615ddc4c699e67"],["/categories/Princeton-Algorithms/index.html","6c0fb1e64f6abf3f9e5f2519597bbf22"],["/categories/Programming-Languages/index.html","32e8a755450f6b7c343658e7856b2632"],["/categories/Vue/index.html","5c88e655beec549903abf6e5bf5d4b60"],["/categories/index.html","9e0d9408e22eaa2fb9545093d6a725ac"],["/categories/人生苦旅/index.html","6e4d7edcda86c3b4471c61d45e7e5ab2"],["/categories/折腾/index.html","ad936782738fe9303f4b0664c391e435"],["/categories/知识总结/index.html","e5757cb721b559f7b4859483badb07f4"],["/categories/翻译/index.html","969587ff0a719af92646d101501b7584"],["/categories/读书笔记/index.html","b57ccca9ae0b3a35ec2e2a32a10fb7b2"],["/css/main.css","43554d1ea37654d0ddee5be1a1351146"],["/gallery/index.html","7de197eb54da88ba7616fd25814b342a"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","b943d54f32823e2f4183196163b60fee"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","354652bfa1dff0722ee26f8b0f03ddec"],["/page/3/index.html","7800768b6a77425141ecd1b9b87bbeeb"],["/page/4/index.html","7e7cbb910a6a2ebb4bc525c97d8ca899"],["/reading/index.html","aa6ee70f9c8f04448f33f31eeeb998c8"],["/sw-register.js","225c1084224231fa6eb274bf54d1e638"],["/tags/Algorithms/index.html","307be2e9cc5e2e135046cab73c8439d1"],["/tags/Emacs/index.html","e052aced47ef6b80a0d8d62463928f33"],["/tags/HTTP/index.html","f46dbb56e891b8bd065760af7d134f7f"],["/tags/Hadoop/index.html","929c64f9e4a8e112304bd8228a986b3d"],["/tags/Java/index.html","1e4251302d35d6e307d7a559cc069cb9"],["/tags/JavaScript/index.html","1e8a380367a8f313d0aadddf860b5c1d"],["/tags/JavaWeb/index.html","3f4a2e0c806464db00a7e85748b36c95"],["/tags/Java基础/index.html","b123247ae10bc0fe8532c6a2c2fb1f96"],["/tags/Linux/index.html","9344790524ba71959b5f7556f14e093c"],["/tags/Programming-Assignment/index.html","200a3f74bb1dbc38273af844980bd5bf"],["/tags/SML/index.html","b6a418c9ab3434b23bf9cafd188b556c"],["/tags/coursera/index.html","e5b8c0ca38463cbe74deb66a986668b4"],["/tags/git/index.html","0d33d94232b78bbe69928a6d59ea99f0"],["/tags/index.html","e48185f11048076221449477eb92dc53"],["/tags/vue/index.html","5a50476d7b9436372279c82c81f05a19"],["/tags/个人总结/index.html","a22d750ecd6313ab756197e84dd3798f"],["/tags/前端/index.html","bc3758ce93b1f002406afc938eb6f195"],["/tags/大学生活/index.html","c84e3902eeef071b0c046c379dbc7f8b"],["/tags/大数据/index.html","d3e53d14b289d9a146c66960046ee3ef"],["/tags/总结/index.html","7d1020a679dd7f287ff56113a8de9665"],["/tags/折腾/index.html","8bdd4f1fb63cfc8096c83b94f81e8b63"],["/tags/数据结构/index.html","8caefac5a51b7150a292b7a43ff7b3b5"],["/tags/算法/index.html","65e94e6251dd1263c0ddf4f2df493e64"],["/tags/终端/index.html","6e02635e2ccdbf6ad7e8e101502421b7"],["/tags/美化/index.html","66b1242a817e178b4aa0d82f846a77b6"],["/tags/通天塔/index.html","af658aeafc1435c20eca3d660bc34a67"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
