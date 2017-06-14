// -------------------------------------
// Agency Template: JS > Navigation
// -------------------------------------

$(document).each(function() {
    $(".extendednavigation .open").children().click(function() {
        $(this)
        .add('.folder-open', this.parentNode)
        .toggleClass('folder-open');
    });
});
