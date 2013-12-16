
(function(win) {
    //var getElementById = win.document.getElementById;
    var location = win.location;
    var doc = win.document;

    var getHash = function() {
        var hash = location.hash;
        if (hash === null || hash.length === 0) {
            return null;
        }
        return location.hash.substring(1);
    };
    
    var getHashFormUrl = function() {
        var href = location.href,
                i = href.indexOf("#");
        return i >= 0 ? href.substr(i + 1) : null;
    };

    var onHashChange = function(hash){
        setTimeout(function(){
            var a = doc.getElementById(hash);
            var scTop;
            if ((scTop = win.pageYOffset) === undefined) {
                scTop = (doc.compatMode && doc.compatMode != 'BackCompat')
                    ?doc.documentElement.scrollTop
                    :scTop = doc.body.scrollTop;   
            }
            if(a && (a.offsetTop - scTop) < 55){
                //win.scroll(win.scrollX,win.scTop-55);
                win.scrollBy(0,-55);
            }
        },60,hash);
    };

    var initListener = function() {
        if (win.addEventListener) {
            // note:包括觉悟的IE9&IE10 
            win.addEventListener('hashchange', function() {
                onHashChange(getHash());
            }, false);
        } else if (win.attachEvent && navigator.userAgent.toLowerCase().indexOf("msie 8.0") >= 0) {
            //IE8 不抛弃不放弃
            win.attachEvent( 'onhashchange', function() {
                onHashChange(getHash());
            });
        } else {
            //IE6 IE7
            setInterval((function() {
                var lastHash = getHashFormUrl();
                return function() {
                    var hash = getHashFormUrl();
                    if (hash !== lastHash) {
                        lastHash = hash;
                        onHashChange(hash);
                    }
                };
            })(), 100);
        }
    };
    initListener();
})(window);
