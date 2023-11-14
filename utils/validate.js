// to validate user's message 
const validateMessage = (answer) => {
    if (!answer) {
        return 'Please enter a valid value';
    }
    return true;
};

module.exports =  validateMessage;
