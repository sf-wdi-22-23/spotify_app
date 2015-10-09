console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    var searchInput;
    var api = 'https://api.spotify.com/v1/search?type=artist&q=';
    var query;
    var queryResults;

    $('#searchApi').on('click', function(e) {
        e.preventDefault();

        $('#artists').html("");

        searchInput = $('#searchInput').val();

        query = api + searchInput;

        getApiData();

        $('#searchInput').val("");
    });

    function getApiData() {
        $.get(query, function(data){
            console.log(data);

            var items = data.artists.items;
            var artistApi = data.artists.items[0].href;
            var image = data.artists.items[0].images[0].url;
            loopArtists(items);

            $('#artists').append('<a href='+artistApi+'><img class="artistImage" src='+image+'></a>');
        });
    }

    function loopArtists(items) {
        for (var i=0; i<items.length; i++) {

        }
    }

    function getTopTracks() {
        $.get(artistApi+"/top-tracks?country=US", function() {
            
        });
    }
});
