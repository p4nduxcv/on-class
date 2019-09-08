//using promise
console.log("1: Before Calling db..");

getMovieDataFromDb = () => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2: Reading movie data from db...");
            console.log({ id: 34, name: "Avengers" });
            resolve({ id: 34, name: "Avengers" });
        }, 2000);
    });
    return p;
};

getMovieCastFromIMDB = (movieName) => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3: Reading actor details from db...");
            resolve({ actor: ["chris hemsworth", "Brie Larson", "RoberDowney Jr"] });
        }, 2000);
    });
    return p;
};

getActorDetails = actorName => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("4: Reading actor details from db...");
            resolve({ actor: actorName, character: "Captain America" });
        }, 2000);
    });
    return p;
};

/*getMovieDataFromDb()
  .then(movie => getMovieCastFromIMDB(movie.name))
  .then(movieCast => getActorDetails(movieCast[0]))
  .then(actorDetails => console.log(actorDetails))
  .catch(err => {
    console.log(err);
  });*/

//using Async Await

printActorDetails = async () => {
    let movieData = await getMovieDataFromDb();
    let movieCast = await getMovieCastFromIMDB(movieData.name);
    let actorDetails = await getActorDetails(movieCast.actor[0]);
    console.log(actorDetails);
};