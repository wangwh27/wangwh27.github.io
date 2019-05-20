/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","3ef0b124b496adade7fdeeeb42df456b"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","bd20db81475c6746474ed70af09b76af"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","3cf2367ff477fe51979911c96d916c24"],["/2018/12/25/大数据学习-初识Hadoop.html","ff1637594d1de043ed173e30a3fe45ae"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","2a8b9483f618abb5dbc2af446fcca2c8"],["/2019/03/08/使用Forking工作流提交作业.html","91bbc658ff9d8e29db001ce849cd4018"],["/2019/03/12/Assignment-1-Warmups.html","20a351e8cccff199ab44682414a6ff26"],["/2019/03/17/Assignment-2-Breakout.html","cc972a4d25c284cbc1ef1ba293fd31da"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","553b8a844da65b90c39d8a206f8b44fa"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","3112bd11d99d1d59e3d8ef7970e3893a"],["/2019/04/12/Assignment-3-Hangman.html","b5cb0f95370aea589dde4e5a5000a5f5"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","5417709ad0f1b3729a63fb44c8c843af"],["/2019/04/20/学习道路上的暂歇思考.html","b6136bf3f4146ed6abd7400b9aa9d8e1"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","b849a65d75cd67559f45214f630723dd"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","6d8995c4b77743a23bb5b5cac59167b0"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","e3455c051ef5e075283e48448a1c14b9"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","2e4540ae98d3d830f70214d2fc459352"],["/2019/05/10/Commit-message-guide.html","04c5ac5676420b92bdccfa60caba22f7"],["/2019/05/19/《图解HTTP》读书笔记.html","a46faaa8115ca959dcf655fa9aca8c1a"],["/about/index.html","e36ee4abcc82805be183bd04415543c2"],["/archives/2018/11/index.html","ec0897bc90b3cc4b480dc1aaa5e2584b"],["/archives/2018/12/index.html","224b0a89989b0b4470bc055898b6b2f3"],["/archives/2018/index.html","9df9371506dcc75e666a476c171594a4"],["/archives/2019/01/index.html","ff8bebcd825c35575f879c25322120c9"],["/archives/2019/03/index.html","7214acf829588f2c166e9761e977c209"],["/archives/2019/04/index.html","cf5d60f88045866b84ba677bfe44bf8b"],["/archives/2019/05/index.html","7566aa0f2642068534121f557be64640"],["/archives/2019/index.html","270c06b1d88d4c9511a7eea8ecf4773f"],["/archives/2019/page/2/index.html","f7c4f5d690c6668db76ce3ca0bac0bf1"],["/archives/index.html","87fe5cc6f056a529ef460721347282a3"],["/archives/page/2/index.html","a0dd030f84d22c97930d5164af91e1a4"],["/categories/Java-beginner/index.html","c9ccc3789f5103e38a8eee431d0ae33a"],["/categories/Princeton-Algorithms/index.html","8ab1992a8b9b5659e26d076e8ee50e66"],["/categories/Programming-Languages/index.html","49183ad8327e292975f24383381fbc19"],["/categories/Vue/index.html","5b38fef916c8aa9a37f356ba72b831c5"],["/categories/index.html","4b73a26868b8f2621a167690da6ce8b4"],["/categories/人生苦旅/index.html","06eb823bc08d85040ad4ed87633e76d9"],["/categories/折腾/index.html","c22b46f5373ef74e988ee0cf912ae03d"],["/categories/知识总结/index.html","d87dfa30f1a34ec6c5f29fb004de8dbc"],["/categories/翻译/index.html","9f8afcad6354f6003655fec90d81cd0a"],["/categories/读书笔记/index.html","d36bec437fac7ebda745a4a326f0cb9b"],["/css/main.css","8a5dcb2d3a583a99b86e2c22262149de"],["/gallery/index.html","161dbdc97dc47b843f771f288a8b9f81"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","fabe852ce7f5e6ec476c09eaa36b1e50"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.jpg","6f6f03fc72b0c1f2864409ceb1d5487e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","5cbdc5076e23a6791056c06b4b6b3e90"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","a3d2360da78d5f38d807f5a3884e37b0"],["/page/3/index.html","1203c6f45c2a3c7ba61039af0b3c2fcf"],["/page/4/index.html","1cd10d197d2e7f1ad2a12ed35979517d"],["/reading/index.html","f2d91120b6af3483ebd863419844e68c"],["/sw-register.js","0c63553f8b29bfce6f01a728ccbe7686"],["/tags/Algorithms/index.html","e2f89cdc15ef19c7b38e7a75841a1578"],["/tags/Emacs/index.html","726eda8b45963dda42d03055c726e555"],["/tags/HTTP/index.html","cecc24ae774be882c1e24c0d4ea158cc"],["/tags/Hadoop/index.html","0b6caed8608638c6ff391c0135cb7388"],["/tags/Java/index.html","0d681e7f42d71f708caeb492919e4e90"],["/tags/JavaScript/index.html","ebf615c7fdad721a7e59168fd6cc89d8"],["/tags/JavaWeb/index.html","83ff4b7c9cec04e6f53a712c299c87f2"],["/tags/Java基础/index.html","31c6f3c9a14aa4277e67d8b4bbfaa7e2"],["/tags/Linux/index.html","696a005c9e387b9fffcb9f1c2f240889"],["/tags/Programming-Assignment/index.html","caeb8d21f0cbf60e145fc3cccc707a27"],["/tags/SML/index.html","a4c54251b1ff60a382afd1af336b5734"],["/tags/coursera/index.html","ec1e9d1d9f2f9455689a020f1edaad93"],["/tags/git/index.html","b37d6a1b46ae0dde08b1c5fb6cbdebd8"],["/tags/index.html","1d87331a8c85278edefc605ebe0f7844"],["/tags/vue/index.html","39e91f6d9436ed8932b9bc93177bd71b"],["/tags/个人总结/index.html","1dd5a411aa4b344913c01b575fd28b3d"],["/tags/前端/index.html","cb0196ac0a61826c003b5a40a57301fb"],["/tags/大学生活/index.html","9d3b14c35c5652dc92854f1e5e0e7a26"],["/tags/大数据/index.html","3864a7d505096d87306aecbeb0747007"],["/tags/总结/index.html","e6aa271a447fbda4594ae5f39830b177"],["/tags/折腾/index.html","b5a39778efd4e96ca37121608de43481"],["/tags/数据结构/index.html","ddea7547cbe0046774ee7f6dd15c8fd3"],["/tags/算法/index.html","3bba9ce36ef73d37d3dda2db68e1a09d"],["/tags/终端/index.html","4fdd37ae33ec6600dc6b5d5b86f5e315"],["/tags/美化/index.html","aa421972674cd21fc413ef01583e61fe"],["/tags/通天塔/index.html","653005278a933024861e644cd85767a1"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
