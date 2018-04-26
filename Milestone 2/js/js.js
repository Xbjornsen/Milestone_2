
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    window.onclick = function(event) {
    if (!event.target.matches('.Location')) {

    var dropdowns = document.getElementsByClassName("dropdown1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    }
    }

}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    window.onclick = function(event) {
  if (!event.target.matches('.About')) {

    var dropdowns = document.getElementsByClassName("dropdown2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
}
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
    window.onclick = function(event) {
  if (!event.target.matches('.Media')) {

    var dropdowns = document.getElementsByClassName("dropdown3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
}










