// ScrollMenu

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
        $('.site-navigation').addClass('white');
    } else {
        $('.site-navigation').removeClass('white');
    }
});


// TopArrow
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html, body').animate({scrollTop: 0}, 800)
    });
});

window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#edeff5",
                "text": "#838391"
            },
            "button": {
                "background": "#f3aa2b"
            }
        },
        "position": "bottom-right",
        "content": {
            "message": "Esse website usa cookies para garantir que você tenha a melhor experiência possível enquanto navega.",
            "dismiss": "Entendi!",
            "link": "Entenda mais",
            "href": "política-de-privacidade"
        }
    })
});

function openNav() {
    document.getElementById("mySidenav").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("active");
}

