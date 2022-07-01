function askBook(){
    let Book = prompt('How many books have you read since the beginning of this year?');
    let message;
    
    if(Book < 2){
        message = 'You need to read more often!';
    } else if (Book <= 6){
        message = 'You are one right track!';
    }  else if(Book > 6){
        message = 'You are a genious!';
    } else {
        message = 'Invalid input!';
    }
    document.write(message);
    return message;
};


function showBook(){
    const userNum = prompt("How many times do you read book a day?");
    for(let i = 0; i < userNum; i++){
        document.write("<img src='embarrassing.jpeg' style='width:300px;'/>")
    }
};

