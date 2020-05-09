for (var t = $.cookie("skey"), e = 5381, r = 0, o = t.length; o > r; ++r)e += (e << 5) + t.charAt(r).charCodeAt();alert(encodeURIComponent(2147483647 & e));
