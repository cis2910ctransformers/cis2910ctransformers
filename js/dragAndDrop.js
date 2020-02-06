function addDnDHandlers() {

    var questions = document.querySelectorAll("#questions li");
    var answer = document.getElementById("answer");

    //initialize the cart
    var answera = document.querySelector("#answer+hr+br");

    for (var i = 0; i < questions.length; i++) {
        questions[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    answer.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false;
    }, false);

    answer.addEventListener("drop", function (ev) {
        if (ev.stopPropagation)
            ev.stopPropagation();

        var coffeeId = ev.dataTransfer.getData("Text");
        var element = document.getElementById(coffeeId);

        addAnswer(element);
        ev.stopPropagation();

        return false;
    }, false);

    function addAnswer(item) {
        var liElement = document.createElement('p');
        liElement.innerHTML = item.innerHTML;
        shoppingcart.appendChild(liElement);
    }
}