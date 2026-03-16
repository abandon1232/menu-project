fetch("menu.json").then(res => res.json()).then(data => {

    const recommendations = document.getElementById("recommendations");
    const deals = document.getElementById("deals");
    const sets = document.getElementById("sets");

    data.forEach((dish, i) => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML =
            "<h3>" + dish.name + "</h3>" +
            "<p>" + dish.description + "</p>" +
            "<div class='price'>" + dish.price + "</div>" +
            "<div class='add-button'> + </div>";

        if (i < 5) {
            recommendations.appendChild(card);
        } else if (i < 10) {
            deals.appendChild(card);
        } else {
            sets.appendChild(card);
        }

    });

});
