const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
]

let guess = document.getElementById('movie-guess');
let index = 0;
let currentMovie = movies[index];
let explanationText = document.getElementById('explanation');
let responseText = document.getElementById('response');
let hintText = document.getElementById('hint');


function getMovie(){
    currentMovie = movies[index];
    explanationText.innerHTML = currentMovie.explanation;
    responseText.innerHTML = "";
    hintText.innerHTML = "";
}
getMovie();


function getRandomMovie(event) {
    event.preventDefault();
    const guess = guess.value;
    const movies = [
        {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
        {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
        {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
        {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
        {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
        {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
        {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
        {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
        {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
        {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
        {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
    ]

    const randomIndex = Math.floor(Math.random() * movies.length);
    const item = movies[randomIndex];

    if (guess == movies[index].title) {
        output.innerHTML = `${guess} is correct!`;
        guess.value = ""
        index += 1;
    } else {
        output.innerHTML = `${guess} is incorrect`;
        console.log(guess + " is not the movie title")
    }

    return item;
}

function checkMovie(event){
    event.preventDefault();
    const movieGuess = guess.value;
    console.log("movieGuess: ", movieGuess)
    guess.value = "";

    if (movieGuess == currentMovie.title) {
        index += 1;
        responseText.innerHTML = movies[index -1].title + " is correct!";
        getMovie();
        responseText.innerHTML = "";
    } else {
        responseText.innerHTML = movieGuess + " is not correct. Try Again.";
    }

}

function getHint(){
    hintText.innerHTML = currentMovie.hint;

}
 