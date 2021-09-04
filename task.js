$(document).ready(function(){
    $()
})

/*Jquery About Shopping page on click see detail*/
$(document).ready(function () {
    $("#imgShop1").click(function () {
        $(".Onclick0").text("Samsung Galaxy\nR200")
            .show().css({
                "border": "5px solid green",
                "font-weight": "bold",
                "width": "60%",
                "box-shadow": "0px 0px 0px 10px"
            });
    })
})

$(document).ready(function () {
    $("#imgShop2").click(function () {
        $(".Onclick1").text("Samsung Galaxy\nR200")
            .show().css({
                "border": "5px solid green",
                "font-weight": "bold",
                "width": "60%",
                "box-shadow": "0px 0px 0px 10px"
            });
    })
})

$(document).ready(function () {
    $("#imgShop3").click(function () {
        $(".Onclick2").text("Samsung Galaxy\nR350")
            .show().css({
                "border": "5px solid green",
                "font-weight": "bold",
                "width": "60%",
                "box-shadow": "0px 0px 0px 10px"
            });
    })
})

$(document).ready(function () {
    $("#imgShop4").click(function () {
        $(".Onclick3").text("Samsung Galaxy\nR350")
            .show().css({
                "border": "5px solid green",
                "font-weight": "bold",
                "width": "60%",
                "box-shadow": "0px 0px 0px 10px"
            });
    })
})

$(document).ready(function () {
    $("#imgShop5").click(function () {
        $(".Onclick4").text("Samsung Galaxy\nR350")
            .show().css({
                "border": "5px solid green",
                "font-weight": "bold",
                "width": "60%",
                "box-shadow": "0px 0px 0px 10px"
            });
    })
})

$(document).ready(function () {
    $("#imgShop6").click(function () {
        $(".Onclick5").text("Samsung Galaxy\nR350")
            .show().css({
                "border": "5px solid green",
                "font-weight": "bold",
                "width": "60%",
                "box-shadow": "0px 0px 0px 10px"
            });
    })
})

/*********************end of Jquery About Shopping page on click see detail****************************/

/*Jquery About Shopping pas animate image on moousehover*/
$(document).ready(function () {
    $('#imgShop1').on({
        mouseenter: function () {
            $(this).animate({
                width: '350px',
                height: '370px'
            }, 600);
        },
        mouseleave: function () {
            $(this).animate({
                width: '250px',
                height: '270px'
            }, 600);
        }
    });
})


$(document).ready(function () {
    $('#imgShop2').on({
        mouseenter: function () {
            $(this).animate({
                width: '350px',
                height: '370px'
            }, 600);
        },
        mouseleave: function () {
            $(this).animate({
                width: '250px',
                height: '270px'
            }, 600);
        }
    });
})

$(document).ready(function () {
    $('#imgShop3').on({
        mouseenter: function () {
            $(this).animate({
                width: '350px',
                height: '370px'
            }, 600);
        },
        mouseleave: function () {
            $(this).animate({
                width: '250px',
                height: '270px'
            }, 600);
        }
    });
})

$(document).ready(function () {
    $('#imgShop4').on({
        mouseenter: function () {
            $(this).animate({
                width: '350px',
                height: '370px'
            }, 600);
        },
        mouseleave: function () {
            $(this).animate({
                width: '250px',
                height: '270px'
            }, 600);
        }
    });
})

$(document).ready(function () {
    $('#imgShop5').on({
        mouseenter: function () {
            $(this).animate({
                width: '350px',
                height: '370px'
            }, 600);
        },
        mouseleave: function () {
            $(this).animate({
                width: '250px',
                height: '270px'
            }, 600);
        }
    });
})

$(document).ready(function () {
    $('#imgShop6').on({
        mouseenter: function () {
            $(this).animate({
                width: '350px',
                height: '370px'
            }, 600);
        },
        mouseleave: function () {
            $(this).animate({
                width: '250px',
                height: '270px'
            }, 600);
        }
    });
})
/*End of Jquery About Shopping pas animate image on moousehover*/



/*Function that change BackgroundColor Automatically after 1s infinity loop Of Shopping page  */
$("#ShoppingPage").css("transition", "all 3s");
var arr = ["#f00", "#0f0", "#00f", "white"];

function changeColor() {
    $("#ShoppingPage").css({
        backgroundColor: arr[parseInt(Math.random() * 4)]
    });
}
changeColor();
setInterval(changeColor, 1000);
/* End Of Function that change BackgroundColor Automatically after 1s infinity loop Of Shopping page  */