console.log("1 : Before calling DB");

getMovieDataFromDb = (callback) => { //callback means not a function it is just concept
    setTimeout(() => {
        console.log("2 : Reading movie data from db...");
        callback({ id: 34, name: "Avengers" });
    }, 3000);
};

getMovieCastFromIMDB = (movieName, callback) => {
    setTimeout(() => {
        callback(['Ranja', 'My3Cardo', 'MaduRox']);
    }, 3000);
}

getActorDetails = (actionName, callback) => {
    setTimeout(() => {
        callback({ character: "Captain America" });
    }, 3000);
}

getMovieDataFromDb((movieData) => {
    console.log(`3 : movie data ${movieData}`);
    getMovieCastFromIMDB(movieData, (movieCast) => {
        console.log(`4 : movie cast ${movieCast}`);
        getActorDetails(movieData, (actorDetails) => {
            console.log(`5 : actor details ${actorDetails}`);
        })
    });
});

console.log("6 : Done!");
