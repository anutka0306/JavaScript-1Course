

//console.log(userNumber);

function convertToObj() {
    const userNumber = parseInt(prompt("Введите число от 1 до 999"), 10);

    if(isNaN(userNumber) || userNumber < 1 || userNumber > 999){
        return "Вы ввели что-то не то... Необходимо ввести число от 1 до 999";
    }
    else{
        const humdreds = Math.floor(userNumber/100);
        const tenners = Math.floor((userNumber - humdreds *100) / 10);
        const units = Math.floor((userNumber - (humdreds * 100 + tenners * 10)));
        const obj = {
          "единиц: " : units,
          "десятков: " : tenners,
          "сотен: " : humdreds
        };
        return obj;
    }
}

console.log(convertToObj());
