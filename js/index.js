$(document).ready(function () {
    $($(".list-menu-button")).click(function () {
        $($("ul")).toggleClass("hidden");
    });
    let activeCode = 0;
    $($(".rightArrow")).click(function () {
        $($(".Slide")[activeCode]).toggleClass("hidden-slide");
        if (activeCode != 2) {
            activeCode++;
        } else {
            activeCode = 0;
        }
        $($(".Slide")[activeCode]).toggleClass("hidden-slide");
    });
    $($(".leftArrow")).click(function () {
        $($(".Slide")[activeCode]).toggleClass("hidden-slide");
        if (activeCode != 0) {
            activeCode--;
        } else {
            activeCode = 2;
        }
        $($(".Slide")[activeCode]).toggleClass("hidden-slide");
    });
});