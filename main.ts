const latInput = document.querySelector("#lat") as HTMLInputElement;
const longInput = document.querySelector("#long") as HTMLInputElement;
const latISS = document.querySelector("#server-lat")!;
const longISS = document.querySelector("#server-long")!;
const outputSpan = document.querySelector("#result")!;

var serverLat = 0;
var serverLong = 0;

setTimer();


function onButtonPressed() {
    outputSpan.innerHTML = calculateDistance(Number.parseFloat(latInput.value), Number.parseFloat(longInput.value), serverLat, serverLong).toString();
}
function calculateDistance(userLat: number, userLong: number, issLat: number, issLong: number): number {
    return 0;
}
function setTimer() {
    setTimeout(() => {
        fetch("https://api.wheretheiss.at/v1/satellites/25544").then((res) => {
            res.json().then((data) => {
                serverLat = data.latitude;
                latISS.innerHTML = serverLat.toFixed(3).toString();
                serverLong = data.longitude;
                longISS.innerHTML = serverLong.toFixed(3).toString();

                setTimer();
            });
        });
    }, 1000);
}