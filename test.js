function getRandom(n1, n2 = null) {// 1
    if (n2 === null) {//n
        const t = new Date().getMilliseconds();//1
        const t1 = new Date().getSeconds();//1
        const t2 = new Date().getUTCMilliseconds();//1 
        let x = (t * t + t1 / t2) / n1;//1
        let x1 = String(x);//1
        x1.slice(0, n1-1);//n
        x = parseInt(x1);//n
        return x;
    }
    else {
        let i = 1;
        while (i === 1) {
            const t = new Date().getMilliseconds();//1
            const t1 = new Date().getSeconds();//1
            const t2 = new Date().getUTCMilliseconds();//1
            let xx = (t + t1 / t2) / n1;//1
            xx = ~~xx;
            if (xx > n1 && xx < n2) {
                
                
                return xx;
                i = 0;
            }
        };
    }
}

const xqw = getRandom(10);
const xy = getRandom(1, 10);
console.log(xqw, xy);