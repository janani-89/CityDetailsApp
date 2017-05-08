$(document).ready(function(){
    $("#submit").on("click",function(e){
  var cityname = $("#city").val();
    $.ajax({
         url: "https://api.aerisapi.com/places/"+cityname+"?client_id="+client-id+"&client_secret="+client-secret,
         dataType: "jsonp",
         success:function(json){
          if(json.success==true){
            var place = json.response.place;
            var location = json.response.loc;
            $("#result").html("The details of the city are - <br/>City: "+ place.name + " <br/> country: "+ place.countryFull + " <br/>Continent: "+ place.continentFull + "<br>Latitude: "+ location.lat + "<br> Longitude: " +location.long );
            }
           else{
              alert('An error occurred: ' + json.error.description);
          }
         }
});
});

});