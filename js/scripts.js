var equilateralTriangle = function(s1, s2, s3) {
    if ((s1 === s2) && (s2 === s3)) {
        return true;
    } else {
        return false;
    }
}

var isoscelesTriangle = function(s1, s2, s3) {
    if ((s1 === s2) && (s1 !== s3) || (s2 === s3) && (s2 !== s1) || (s1 === s3) && (s1 !== s2)) {
        return true;
    } else {
        return false;
        }
}

var scaleneTriangle = function(s1, s2, s3) {
    if ((s1 !== s2) && (s2 !== s3)) {
        return true;
    } else {
        return false;
    }
}
