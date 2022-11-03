function playGame(playerInput){clearMessages()
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } else { 
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    /*
    if(playerInput == '1'){
    playerMove = 'kamień';
    } else if(playerInput == '2'){
        playerMove = 'papier';
    } else if(playerInput == '3'){
        playerMove = 'nożyce';
    } else{
        playerMove = 'nieznany ruch';
    }
    */

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);

    /*
    if(randomNumber == 1){
    computerMove = 'kamień';
    } else if(randomNumber == 2){
        computerMove = 'papier';
    } else {
        computerMove = 'nożyce';
    }
    */
    console.log('moves:', argComputerMove, argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove){
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');  
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');  
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Wygrał komputer');  
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Wygrał komputer');  
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Wygrał komputer');  
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Nikt nie wygrywa - remis');  
        } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Nikt nie wygrywa - remis');  
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Nikt nie wygrywa - remis');  
        } else {
            printMessage('Wybrałeś złą liczbę - wpisz poprawną');
        }
    }
    displayResult(argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
});