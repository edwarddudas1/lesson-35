const button = document.querySelector('.up');
const input = document.querySelector('.inp');
const show = document.querySelector('.show');

function handleButtonClick() {
    const year = input.value;
    console.log(year)
    switch(year){
        case "1":
        case "2":
        case "3":
            alert("Winter");
        break;
        case "4":
        case "5":
        case "6":
            alert("Autumn");
        break;
        case "7":
        case "8":
        case "9":
            alert("Summer");
        break;
        case "10":
        case "11":
        case "12":
            alert("Spring");
        break;
        default:
            alert("undefind");
        
    }
}

button.addEventListener('click', handleButtonClick);