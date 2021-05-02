const getAlbums = (callback) => {

    let albums = [];

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/albums",
        async: false,
        success: function (data, textStatus, jqXHR) {
            albums = data;

            callback(albums);

            console.log('log finished');
        }
    });
};

const renderAlbums = (albums) => {
    albums.forEach((album) => {
        console.log(`album id: ${album.id}, title: ${album.title}`);
    });
}

$(document).ready(function () {
    
    $("button").click(function () {
        getAlbums(renderAlbums);
    });

});