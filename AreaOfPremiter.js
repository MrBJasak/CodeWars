const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * l;
    } else {
        return 2 * l + 2 * w;
    }
};

areaOrPerimeter(4, 4);
areaOrPerimeter(6, 10);
