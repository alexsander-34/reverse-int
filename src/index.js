module.exports = function reverse (n) {
    const numb = Math.abs(n);
    const string = String(numb);
    const reverse = string.split('').reverse().join('');
    return  Number(reverse);
}
