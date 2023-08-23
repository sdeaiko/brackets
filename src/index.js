module.exports = function check(str, bracketsConfig) {
    const obj = {}
    bracketsConfig.forEach(e => {
        obj[e[0]] = e[1];
    });
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        if (e in obj) {
            if (obj[e] !== e || stack[stack.length - 1] !== e) {
                stack.push(e); 
            } else {
                stack.pop();
            }
        } else {
            key = stack[stack.length - 1];
            if (e == obj[key]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
