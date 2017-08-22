$(document).ready(function(){
   $('.ui.dropdown').dropdown();
});

$(function() {

    $("h2")
        .wrapInner("<span>");

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});

$(function() {

    $("h3")
        .wrapInner("<span>");

    $("h2")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});
