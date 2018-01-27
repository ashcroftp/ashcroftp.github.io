/* Numbering for publications */
$('.publications .years ol').each(function() {
  var val = parseFloat($(this).attr("start")) + 1;
  $(this).css('counter-reset', 'c ' + val);
});

/* Scroll includes buffer to avoid top-menu-bar */
$(window).on("hashchange", function() {
  window.scrollTo(window.scrollX, window.scrollY - 120);
});

/* Function to control display of contents by tab */
function openTab(tabName) {
    // Hide all elements with class="tab" by default */
    var i, tab;
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }

    // Show the specific tab
    document.getElementById(tabName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
