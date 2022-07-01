function askTime() {
    // code the function executes 
    let time = prompt('What time is it?');
    let message;

    if (time <= 11) {
        message = 'Good Morning!';
    } else if (time <= 18) {
        message = 'Good Afternoon!';
    } else if (time <= 24) {
        message = 'Good Evening!';
    } else {
        message = 'Time does not exist!';
        askTime();
    }
    document.write(message); // write the message to the HTML document
    return message; // return the message from the function
}
