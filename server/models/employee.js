const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // validate property with a validator function & Check if the name starts with a capital letter
                return /^[A-Z]/.test(value);
            },
            message: props => `${props.value} must start with a capital letter.`
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Check if the email contains '@' sign
                return /\S+@\S+\.\S+/.test(value);
            },
            message: props => `${props.value} is not a valid email address.`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
       // select: false // This hides the password from query results by default

    }
});

const EmployeeModel = mongoose.model('employees', EmployeeSchema);

module.exports = EmployeeModel;
