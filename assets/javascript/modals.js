$(document).on("click", ".card-body", function () {
    $(".modal-body").empty();
    $(".modal-title").empty();

    // GRAB VALUE OF CARD
    var modalParkSelected = $(this).attr("data-value");
    var modalInfo = parkInfo.data.filter(item => item.parkCode === modalParkSelected)[0];
    console.log(modalInfo);
    var modalTitle = $(".modal-title")
    modalTitle.append(modalInfo.name + " " + modalInfo.designation);
    var modalBody = $(".modal-body");
    modalBody.append(modalInfo.description);
    var modalP = $("<p>");
    modalP.append("<a href='" + modalInfo.url + "'>" + modalInfo.url + "</a>");
    modalBody.append(modalP);
})
