$(document).on("click", ".card-body", function () {
    $(".modal-body").empty();
    $(".modal-title").empty();




    // GRAB VALUE OF CARD
    var modalParkSelected = $(this).attr("data-value");
    var modalInfo = parkInfo.data.filter(item => item.parkCode === modalParkSelected)[0];

    // Latitude and Longitude to city
    if (modalInfo.latLong !== "") {
        var latLong = modalInfo.latLong
        console.log("LAT LONG: " + latLong);
        latitude = modalInfo.latLong.split(",")[0].split(":")[1].trim();
        longitude = modalInfo.latLong.split(",")[1].split(":")[1].trim();
        console.log("LAT AND LONG: " + latLong);

        console.log(modalInfo);
        var maxResults = 5;
        var maxDistance = 30;
        trails(latitude, longitude, maxResults, maxDistance, populateModal);

        // MapQuest
        var mapImg;
        // var latLong = parkInfo.data[i].latLong;
        var splitLatLong = latLong.split(":");
        var lat = splitLatLong[1].split(",");
        var long = splitLatLong[2];
        var newLatLong = lat[0] + "," + long;
        var mapQuestURL =
            "https://www.mapquestapi.com/staticmap/v5/map?key=z6PBR6qx8lWl8cEdyIAZeugWPfk3nA9V&center=" +
            newLatLong + "&size=600,200";
        console.log(mapQuestURL); //<---here is where our users search generates image related from API
        var parkDesignation = modalInfo.designation;
        var parkCode = modalInfo.parkCode;
    }


    // Place info into modal
    var modalTitle = $(".modal-title")
    modalTitle.append(modalInfo.name + " " + modalInfo.designation);
    var modalBody = $(".modal-body");
    var modalCounty = $("<h4>");
    modalCounty.text(county);
    console.log("MODAL COUNTY: " + county); //Working second API
    modalBody.append(modalCounty);
    geolocation(latitude, longitude, populateLocation, modalCounty)
    modalBody.append("<p class='npfontthin'>" + modalInfo.description + "</p>");
    var modalP = $("<p>");
    modalP.append("<a href='" + modalInfo.url + "' target=_blank>" + modalInfo.url + "</a>");
    modalBody.append(modalP);
    modalDirections = $("<p>");
    modalDirections.append("Get directions to " + modalInfo.name + " " + modalInfo.designation + ": " + "<a href='" + modalInfo.directionsUrl + "' target=_blank>" + modalInfo.directionsUrl + "</a>");
    modalBody.append(modalDirections);
    var trailHeader = $(" <br><br><h5>");
    trailHeader.text("Nearby Trails");
    trailHeader.appendTo($(".modal-body"));
    $("#modalMap").attr("src", mapQuestURL);

})



function populateModal(trailsResponse) {

    // console.log("TRAILS: " + JSON.stringify(trailsResponse.trails));


    trailImage = trailsResponse.trails[0].imgMedium;
    $("#modalImage").attr("src", trailImage);


    for (var i = 0; i < trailsResponse.trails.length; i++) {
        // console.log("TRAILS: " + trailsResponse.trails[i].name);


        // var trailName = $("<p id='trailName'>")
        // trailName.text(trailsResponse.trails[i].name);
        // console.log("TRAILS: " + trailsResponse.trails[i].url);
        var trailInfo = $("<div>")
        trailInfo.append("<h4 class='mb-0'>" + trailsResponse.trails[i].name + "</h4>");

        trailInfo.append("<p class='mb-0'>Distance: " + trailsResponse.trails[i].length + " miles</p>");
        trailInfo.append("<p class='mb-3'>More information: <a href='" + trailsResponse.trails[i].url + "' target=_blank>" + trailsResponse.trails[i].url + "</a></p>");
        // console.log("TRAILS: " + trailsResponse.trails[i].imgMedium);
        // trailInfo.append("<br>")


        // trailName.appendTo($(".modal-body"));
        trailInfo.appendTo($(".modal-body"));
    }

}


function populateLocation(locationResponse) {
    console.log("this console log ran");
    $(this.element).text(locationResponse.results[0].components.county);

}