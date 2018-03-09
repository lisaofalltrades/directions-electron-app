const remote = require('electron').remote;

$('document').ready(function(){
    formNav();
    openNav();
    closeNav();
    hideContent();
    showContent();
    openLink();
    selfService();
    slideShow();
    keyDown();
    howToBlock();
});

// document.addEventListener('DOMContentLoaded', function () {
// });

var navArray = []

var howToBlock = function(){
  var showHowTo = document.getElementsByClassName("how-to");
  showHowTo[0].style.display = 'block';
};

var formNav = function(){
    $(".title").each(function(index) {
      var slideTitle =  $(this).text()

        if (index === 0) {
            navArray.push("<a class=\"link bold\">" + slideTitle + "</a>");
        } else {
            var slideTitle =  $(this).text()
            navArray.push("<a class=\"link\">Step " + index + ". " + slideTitle + "</a>");
        };

        $(".nav-contents").append(navArray[index]);
    });
};

var displayArray = $(".main-content").children('.display');
// console.log("displayArray " + displayArray.length);


var openNav = function(){
    $("#nav-btn").click(function(){
        $("#nav-btn").css("display", "none");
        $("#sideBar").css("display", "block");
        $("#sideBar").css("width", "fit-content");
        $("body").css("margin-left", "400px");
        $("body").css("transition", ".4s");
        $(".left").css("margin-left", "400px");
        $(".left").css("transition", ".2s");
    });
};

var closeNav = function(){
    $("#close-link").click(function(){
        $("#nav-btn").css("display", "block");
        $("#sideBar").css("display", "none");
        $("body").css("margin-left", "10px");
        $(".left").css("margin-left", "10px");
    });
};

var removeBold = function(){
    $(".link").removeClass("bold");
};

var hideContent = function(){
    var contentIdToHide = document.getElementsByClassName("display");
    for (var i = 0; i < contentIdToHide.length; i++) {
        contentIdToHide[i].style.display = 'none';
    };
};

var showContent = function(){
    $(".link").click(function(e){
        e.preventDefault();
        removeBold();
        hideContent();
        $(this).addClass("bold");
        slideIndex = $(this).index();
        var contentIdToShow = displayArray[slideIndex - 1];
        contentIdToShow.style.display = "block";
    });
};


var slideShow = function() {
    $(".arrow-btn").click(function(){
        var clicked = $(this);

        var navContents = $(".nav-contents .link")

        var currentDisplay = $("#navContents .link.bold")[0];
        var currentIndex = navContents.index(currentDisplay);

        removeBold();

        if (clicked.hasClass("right")) {
            if (((currentIndex + 1)) === (navArray.length)) {
                var newIndex = 0;
            } else {
                var newIndex = currentIndex + 1
            }
        } else {
            if (currentIndex === 0) {
                var newIndex = 0;
            } else {
                var newIndex = currentIndex - 1;
            }
        }

        contentLink = navContents[newIndex]

        $(contentLink).addClass("bold");

        hideContent();

        contentIdToShow = displayArray[newIndex]
        contentIdToShow.style.display = "block";

    })
}

const {shell} = require('electron')

var openLink = function(){
    $(".url-link").click(function(e){
        var path = $(this).attr('href');
        e.preventDefault();
        if (path.startsWith('http')) {
            shell.openExternal(decodeURI(path));
        } else {
            shell.openItem(decodeURI(path));
        }
    })
}

var selfService = function(){
    $(".self-service").click(function(){
      shell.openItem("/Applications/Self\ Service.app")
    })
}

var keyDown = function(){
    $("body").keydown(function(e) {
        e.preventDefault();

        var navContents = $(".nav-contents .link")
        var currentDisplay = $("#navContents .link.bold")[0]
        var currentIndex = navContents.index(currentDisplay);

        var keys = [37, 39]

        if (keys.includes(e.keyCode)) {

            if (e.keyCode === 39) { // right key
                if ((currentIndex + 1) === (navContents.length)) {
                    var newIndex = 0;
                } else {
                    var newIndex = currentIndex + 1
                }
            } else if (e.keyCode === 37) { // left key
                if (currentIndex === 0) {
                    var newIndex = 0;
                } else {
                    var newIndex = currentIndex - 1;
                }
            }

            removeBold();
            hideContent();

            var contentLink = navContents[newIndex]
          $(contentLink).addClass("bold");

            var contentIdToShow = displayArray[newIndex]
            contentIdToShow.style.display = "block";
        }
    });
};
