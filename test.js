function getRandom(n1, n2 = null) {// 1
    if (n2 === null) {//n
        let i = 1; let x = 0;let checker = 0;

            let taa = 0;
        while (i === 1 ) {
            const t = new Date().getMilliseconds();//1
            const t1 = new Date().getSeconds();//1
            const t2 = new Date().getUTCMilliseconds();//1 
            x = (t * t + t1 / t2) / n1;//1
            while (taa < n1-1)
            {
                checker = (checker * 10) + 9;
                taa++;
            }
            if (checker < x && x!==NaN && x!==Infinity) {
                let xzx = x.toString();
                 x = xzx.slice(0, n1 - 1);
                 x = parseInt(x);
                return x;
                i = 0;
            }
        }
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