// zad 8.11

window.onload = function() {
    console.log('strona zaladowana')

    var list = document.getElementById('Lista'),
        add = document.getElementById('addElem');

    add.addEventListener('click', function(e) {
        list.innerHTML += '<li>item ' + list.getElementsByTagName('li').length + '</li>';
    });
}