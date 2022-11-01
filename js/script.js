let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);


if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');  
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');  
} else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrał komputer');  
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrał komputer');  
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrał komputer');  
} else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Nikt nie wygrywa - remis');  
} else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Nikt nie wygrywa - remis');  
} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Nikt nie wygrywa - remis');  
} else {
    printMessage('Wybrałeś złą liczbę - wpisz poprawną');
}