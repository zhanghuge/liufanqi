window.onload = function() {
    var image = document.getElementById("first");
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    count = 7;
    inDex = 1;
    next.onclick = function() {
        inDex = inDex + 1 > count ? count : inDex + 1;
        image.src =
            "https://zhanghuge.github.io/liufanqi/image/" + inDex + ".jpg";
    };
    prev.onclick = function() {
        inDex = inDex - 1 <= 0 ? count : inDex - 1;
        image.src =
            " https://zhanghuge.github.io/liufanqi/image/" + inDex + ".jpg";
    };
};