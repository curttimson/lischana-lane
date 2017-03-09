ll.llApp.controller('filmController', function($scope, $http, $timeout, $sce) {

  $http.get("data/film.json").then(function(response){
    console.log(response.data.films); //TODO: Remove

    $scope.films = mapFilmJsonToModel(response.data.films);

    console.log($scope.films);

    setTimeout(function(){
    $("#film-list").unitegallery();
  },2000);

  }, function(){
    console.log("error");
  });

  var mapFilmJsonToModel = function(data){
    var films = [];
    for(let i = 0; i<data.length; i++){
      let film = data[i];
      films.push({
        name: film.name,
        src: $sce.trustAsResourceUrl(film.src),
        videoid: film.videoid,
        type: film.type
      });
    }
    return films;
  };

});
