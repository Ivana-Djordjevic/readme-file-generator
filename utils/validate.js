// to validate user's message 
const validateMessage = (answer) => {
    if (!answer) {
        return 'Please enter a valid value';
    }
    return true;
};
// to validate user's choice
const validateChoice = (answer) => {
    if (answer.length === 0) {
        return 'Please select at least one license';
    }
    return true;
}

module.exports = { validateMessage, validateChoice};
