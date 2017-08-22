$(document).ready(function(){
   $('.ui.dropdown').dropdown();
});

$(function() {

    $("h4")
        .wrapInner("<span>");

    $("h4 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});

$(function() {

    $("h5")
        .wrapInner("<span>");

    $("h5")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});
