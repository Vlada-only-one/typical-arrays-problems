exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else return Math.min.apply(this, array)
}


exports.max = function max(array) {
    if ((!array || array.length === 0)) {
        return 0;
    } else return Math.max.apply(this, array)
}

exports.avg = function avg(array) {
    if ((!array || array.length === 0)) {
        return 0;
    } else {
        let sum = array.reduce(function (x, y) {
            return (x + y);
        });
        return sum / array.length;
    }
}
