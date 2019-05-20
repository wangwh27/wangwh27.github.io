/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","7405bf49b8dc07cc5c24bdce3c389254"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","097e035548c96c875fbd17f5f62ec190"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","7a7436c792c356b8f77693230d018da3"],["/2018/12/25/大数据学习-初识Hadoop.html","b7f8256c5c430c20cd10212ca7b5d6a7"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","ce85035471da0e2051b549fabd0f86c2"],["/2019/03/08/使用Forking工作流提交作业.html","86308987e83e08c5b39d53764206ad8d"],["/2019/03/12/Assignment-1-Warmups.html","591b18df11223d7101b7ef833b6d77f2"],["/2019/03/17/Assignment-2-Breakout.html","192972a28fa9ef8ae708e6c2abe30d5b"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","79f6de3b42569fafa10dbbe4dd0f3cc5"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","fe2747ce33f1307ba5b0f3adc2a31aae"],["/2019/04/12/Assignment-3-Hangman.html","262c626499ec52b27a3dc64b5d6b5d1c"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","a45600c79a8d28912a24e04d800f9e44"],["/2019/04/20/学习道路上的暂歇思考.html","898d5d50a5cfe8017d1cb1d8c9ec7404"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","ee18846aef6040e56744f3180d5d522b"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","bf9db9769aca43629cc3f4332d16e746"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","be05c968607a8adef39b940d32c69235"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","679328954ff2eb62da925b26757cd34d"],["/2019/05/10/Commit-message-guide.html","5bc967894521874ae59d8725f45f1ad3"],["/2019/05/19/《图解HTTP》读书笔记.html","a10bddabbfc1a7607f60d16b1a0a7e98"],["/about/index.html","ba66f0602f287251121bff45c1468a57"],["/archives/2018/11/index.html","cf2cd67e0cc36d0c597fcea3ecdc82d9"],["/archives/2018/12/index.html","3b6a25059830dd436a415e9c45899a6a"],["/archives/2018/index.html","0b355eb4bd61ac396b72b0ed8cde2c4c"],["/archives/2019/01/index.html","5c135be0597dbd4abd2b9e945da7a535"],["/archives/2019/03/index.html","fecc9d470fa11c7dc05793ad2c48af03"],["/archives/2019/04/index.html","e7196dcfe1debbd3659df87c09495370"],["/archives/2019/05/index.html","cfdf105a9078dbe7fb0042671817a9a3"],["/archives/2019/index.html","230a36f3a1f01c379774470009f31217"],["/archives/2019/page/2/index.html","c6e80ee691e9ead8272b5457e494e8c9"],["/archives/index.html","0d5df6c4477842dc52393d5bddf02773"],["/archives/page/2/index.html","8035912c3e3c7a1f782a025e8d991284"],["/categories/Java-beginner/index.html","8842087df358d532c035b51127c3390b"],["/categories/Princeton-Algorithms/index.html","cfdea15a84ea3197ed4f97cee1d1cc6e"],["/categories/Programming-Languages/index.html","5612ee127be42e5244174c3dcdf5b5bc"],["/categories/Vue/index.html","353de14d04c19b614e71e542c6040c86"],["/categories/index.html","3d8cdf97750964ec2aa852d833f37b0e"],["/categories/人生苦旅/index.html","67779f532722186bd4f8b8ae537f8991"],["/categories/折腾/index.html","e80794013bcc991046c13975711d176e"],["/categories/知识总结/index.html","80728ad267ccc55b76eca8bdeab02f59"],["/categories/翻译/index.html","ddda689559790e23c5aca324a5c38712"],["/categories/读书笔记/index.html","dc20c630813081c3d12d6e1895584d65"],["/css/main.css","ee98b0dfa74fd31bcd814a8f837b39c9"],["/gallery/index.html","0b3fdad074385da812fdf3c5b974863a"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","fabe852ce7f5e6ec476c09eaa36b1e50"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.jpg","6f6f03fc72b0c1f2864409ceb1d5487e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","ccb3ee60610163076cdc67398d0bde81"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","025a97b0c19609caeb32fefb138206f5"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","722f2afdff51381e2c2998027943a61d"],["/page/3/index.html","9aca86d3fa738448215b4bbd5c457188"],["/page/4/index.html","43f0a465c46b3c9909632ab0eb415ffe"],["/reading/index.html","5872359dd4e17f6b7d5f54556de552c2"],["/sw-register.js","4eb7865958dfddd00d8a4a0593e8f88c"],["/tags/Algorithms/index.html","5a682c55a6835f5e3230cb94648a4506"],["/tags/Emacs/index.html","703e227e49efbe19f371169a108d9fd7"],["/tags/HTTP/index.html","d546c01b97e126849daebd8010df032e"],["/tags/Hadoop/index.html","3aaba7237dd2728ae0e0eb5d7fd322d1"],["/tags/Java/index.html","3cd91c18e563a5820b1d693420bb7e38"],["/tags/JavaScript/index.html","8868b62d540302fcf1e5c3ef0133630e"],["/tags/JavaWeb/index.html","f3a59e1e515473ba18fe597009ebe683"],["/tags/Java基础/index.html","d0eee60ec62af38cd4e92aaa27b0bd24"],["/tags/Linux/index.html","2b4ee4a932b4b5bd64f2250dea930b97"],["/tags/Programming-Assignment/index.html","dd8c6ac6e2ede6d5be6a2fe8279e1b07"],["/tags/SML/index.html","422064038d64fbfdf5d25e241341483e"],["/tags/coursera/index.html","c0d9d0af4214e3461aa3037fb06e04de"],["/tags/git/index.html","6e4e51124f75e9c2550d83a68d94efbd"],["/tags/index.html","97564395691e035261074ae56e258ee6"],["/tags/vue/index.html","667c3607477526245d435eaaa33ff17b"],["/tags/个人总结/index.html","7fcb4115602ec769b8d3a4dc82fbb95c"],["/tags/前端/index.html","779faa8fce31144a6d17b50560430fc0"],["/tags/大学生活/index.html","83e3684c3fb8cca6c0d9e1cabc14778e"],["/tags/大数据/index.html","d113ac0afbf629b933c5768d719a826f"],["/tags/总结/index.html","6c077f471fde6b217fad05720da31ecd"],["/tags/折腾/index.html","65344e737c5b5e49199423a758b79874"],["/tags/数据结构/index.html","27d9f53f27b80c1919e9a069aac92390"],["/tags/算法/index.html","838b9629cffadd18ab79b214afc64cc4"],["/tags/终端/index.html","b976f0fc508ba704304e063fc957cf96"],["/tags/美化/index.html","67b94865f73f604b2e6ed4fbb3792cd2"],["/tags/通天塔/index.html","cfc5d86324e747a0d8fe77da960e6f30"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
