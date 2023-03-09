// регулярные выражения

function testRegExp(s, sub_s) {
    let m = new RegExp(sub_s, "g");
    x = s.match(m);
    return x.join();
    }
    
    