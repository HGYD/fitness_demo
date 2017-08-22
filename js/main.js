$(document).ready(function(){
   $('.ui.dropdown').dropdown();
});

$(function() {

    $("h3")
        .wrapInner("<span>");

    $("h3 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});

$(function() {

    $("h4")
        .wrapInner("<span>");

    $("h4")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});
