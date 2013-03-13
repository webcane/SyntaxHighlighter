//Include this script to bottom of all posts for dynamic blogger Syntax highlighting

(function () {
//debugger;
    var arr, counter = 0,
        doc = document,
        len, load, callBack, url = 'http://yandex.st/highlightjs/7.3/';
  
    if (window.hljs && !window.highlighterLoading) {
        hljs.initHighlightingOnLoad();
    } else if (!window.highlighterLoading) {
        window.highlighterLoading = true;
        arr = [url + 'highlight.min.js',
               url + 'styles/github.min.css'];
      
        len = arr.length;
      
        load = function (src, callBack) {
            var isJs = src.lastIndexOf('.js') !== -1,
                head = doc.getElementsByTagName('head')[0],
                el, img;

            if (isJs) //load javascript
            {
                el = doc.createElement('script');
                el.type = 'text/javascript';
                el.src = src;
                el.onload = callBack;
                head.appendChild(el);
            } else //load css
            {
                el = doc.createElement('link');
                el.href = src;
                el.type = 'text/css';
                el.rel = 'stylesheet';
                head.appendChild(el);
                //not all browser support onload event on link elements - for example safari mac 5.1.7--
                //in order to simulate load event on link elements use a known trick
                img = doc.createElement('img');
                img.onerror = callBack;
                img.src = src;
            }
        };
      
        callBack = function () {
            if (++counter === len) {
                hljs.initHighlightingOnLoad();
                window.highlighterLoading = false;
            } else {
                load(arr[counter], callBack);
            }
        };
      
        load(arr[counter], callBack);
    }
}());
