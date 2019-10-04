/*Global Varibales=============================================================================================
*/ var parkInfo;
var imageResponse;
var stateSelected = "TX";
var unsplashSearch = "";



function imageScroller() {
  var images = ["assets/images/bg2.jpeg", "assets/images/fallroad.jpg", "assets/images/bryce2.jpeg", "assets/images/tetons.jpeg", "assets/images/beardunes.jpeg", "assets/images/antelope.jpeg", "assets/images/bison.jpeg", "assets/images/rocky.jpeg", "assets/images/bear.jpeg", "assets/images/bryce.jpeg", "assets/images/fjords.jpeg", "assets/images/geyser.jpeg", "assets/images/joshua.jpeg", "assets/images/glacier.jpeg", "assets/images/moose.jpeg", "assets/images/redwoods.jpeg", "assets/images/northrim.jpeg", "assets/images/silent.jpeg", "assets/images/whitesands.jpeg", "assets/images/spring.jpeg", "assets/images/yosemite.jpeg", "assets/images/ysfalls.jpeg", "assets/images/zion.jpeg"];
  var index = 0;
  $("#bg").attr("src", images[index]);

  setInterval(function () {
    if (index === images.length - 1) {
      index = 0;
      $("#bg").attr("src", images[index]);
      console.log(index);
    } else {
      index++;
      $("#bg").attr("src", images[index]);
      console.log(index);
    }
  }, 4000);
};


imageScroller();

$("#searchButton").click(function () {
  event.preventDefault();
  $("#searchBar").toggle();
  $("#searchButton").toggle();


});
// API

//Images fixed and working AJAX
//Unsplash API Below: We are working on having the Unsplash API information incorporate photo based on image and location.
function unsplashAjaxRequest() {
  var unsplashURL =
<<<<<<< Updated upstream
  "https://api.unsplash.com/photos/random/?client_id=b9429332b4931ea777d5218c2dd0c972e59aa521cdd7693c57ae030db53d17ef&query=" + unsplashSearch; //<---here is where our users search generates image related from API
=======
    "https://api.unsplash.com/photos/random/?client_id=b9429332b4931ea777d5218c2dd0c972e59aa521cdd7693c57ae030db53d17ef&query=" + unsplashSearch; //<---here is where our users search generates image related from API
>>>>>>> Stashed changes
  $.ajax({
    method: "GET",
    url: unsplashURL
  }).then(unsplashAPICall);
}

function unsplashAPICall(imgResponse) {
  imageResponse = imgResponse;
  console.log(imageResponse);
}

//National Park API is below

function NPSAjaxRequest() {

  var queryURL =
    //Hide our key once ready to push! (12:57pm)
    "https://developer.nps.gov/api/v1/parks?stateCode=" + stateSelected + "&api_key=aYUUJ6WlFhXa4FxFlzz8RR712lrylzDsnov99dCe";
  $.ajax({
    method: "GET",
    url: queryURL
  }).then(NPSAPICall);
}

function NPSAPICall(response) {
  stateCardGenerator(response);
  // modelGenerator(response)
}

// For state requests
function bothAjaxRequests(event) {
event.preventDefault();


  unsplashAjaxRequest();
  NPSAjaxRequest();
}
$("#stateButton").on("click", bothAjaxRequests);




// HOME PAGE====================================================================================================
// "take me home" button says take me home
$("#takeMeHome").on("click", function () {
  // console.log(alert("this button works!"));

})
  // LINDSAY: ON STATE PAGE ======================================================================================

  // When user enters a state into the search bar it hides container containing home page html

  // If the state is not a real state name (misspelled, not in the US, etc.,) display error message

  // Populates screen with cards of each national park in the state

  // Each card contains park name (AT LEAST--WE WILL DISCUSS AS GROUP WHAT ELSE TO DISPLAY)

  // MODELS =======================================================================================================

  // On state page with all parks: when user clicks on a card, card pops up a model about that park

  // Individual park model: Populates with park information from NPS API, populates with brewery info from brewery API















  //END OF CODE
