// Construct promises with a function
let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    // Pass in whatever variables is necessary for the resolve and reject methods
    if (a == 2){
        resolve('Success');
    }
    else {
        reject('Failed');
    }
})

const userLeft = false;
const userWatchingCatMeme = false;

// then() runs after resolve() and takes all its arguments
// catch() runs after reject() and takes all its arguments
p.then((message) => {
    console.log('This is in the then: ' + message);
}).catch((message) => {
    console.log('This is in the catch: ' + message);
})

// Returning a promise in a function
function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft){
            reject('Bruh the user left');
        }
        else if (userWatchingCatMeme){
            reject('User watching da cat');
        }
        else{
            resolve('Epic');
        }
    });
}

watchTutorialPromise().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
})

// Waits until all promises are fulfilled
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages);
}).catch((message) => {
    console.log('Bruh');
});

// Waits until one promise is fulfilled
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) =>{
    console.log(message);
}).catch((message) => {
    console.log('Bruh');
});