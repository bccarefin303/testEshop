var msg = 'Welcome Back';
var colorTimer = null;

function toHex(n) {
    var hexChars = '0123456789ABCDEF';
    if (n === 0) return n;
    var j, k;
    var temp = '';
    while (n !== 0) {
        j = n % 16;
        n = (n - j) / 16;
        temp = hexChars.charAt(j) + temp;
    }
    return temp;
}

function colorize() {
    if (!document.getElementById) return;
    for (i = 0; i < msg.length; i++) {
        k = Math.round(Math.random() * 16777215);
        k = toHex(k);
        while (k.length < 6) {
            k = k + '0';
        }
        document.getElementById('colorizer' + i).style.color = '#' + k;
    }
    colorTimer = window.setTimeout(colorize(), 230);
}