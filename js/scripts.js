var equilateralTriangle = function(s1, s2, s3) {
    if ((s1 === s2) && (s2 === s3)) {
        return true;
    } else {
        return false;
    }
};

var isoscelesTriangle = function(s1, s2, s3) {
    if ((s1 === s2) && (s1 !== s3) || (s2 === s3) && (s2 !== s1) || (s1 === s3) && (s1 !== s2)) {
        return true;
    } else {
        return false;
        }
};

var scaleneTriangle = function(s1, s2, s3) {
    if ((s1 !== s2) && (s2 !== s3)) {
        return true;
    } else {
        return false;
    }
};

$(document).ready(function() {

    $("form#triangle-tracker").submit(function(event) {
        var side1 = parseInt($("input#side1").val());
        var side2 = parseInt($("input#side2").val());
        var side3 = parseInt($("input#side3").val());

        var result1 = equilateralTriangle(side1, side2, side3);
        var result2 = isoscelesTriangle(side1, side2, side3);
        var result3 = scaleneTriangle(side1, side2, side3);


        if ((side1 >= side2 + side3) || (side2 >= side3 + side1) || (side3 >= side2 + side1))
        {
            $(".not_triangle").text("not a triangle");
            $(".isosceles").empty();
            $(".equilateral").empty();
            $(".scalene").empty();

        }
        else if (result1 === true)
        {
            $(".equilateral").text("equilateral");
            $(".scalene").empty();
            $(".isosceles").empty();
            $(".not_triangle").empty();
        }
        else if (result2 === true)
        {
            $(".isosceles").text("isosceles");
            $(".equilateral").empty();
            $(".scalene").empty();
            $(".not_triangle").empty();
        }
        else if (result3 === true)
        {
            $(".scalene").text("scalene");
            $(".isosceles").empty();
            $(".equilateral").empty();
            $(".not_triangle").empty();
        }


        $("#result").show();
        event.preventDefault();
    });

});
