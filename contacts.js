const { rejects } = require('assert/strict');
const fs = require('fs');
const { resolve } = require('path/posix');
const chalk = require("chalk");
const validator = require("validator");

// checking directory, if it exist or not
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// checking file, if it exist or not
const filePath = "./data/contacts.json"

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
}


const saveContact = (name, phoneNumber, email) => {
    const contact = { name, phoneNumber, email };
    const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(fileBuffer);

    const checkEmailFormat = validator.isEmail(email);
    if (!checkEmailFormat) {
        message = chalk.red.inverse.bold("Wrong email format!");
        console.log(message);

        return false
    }

    const checkDuplicateEmail = contacts.find((contact) => contact.email === email);
    if (checkDuplicateEmail) {
        message = chalk.red.inverse.bold("Email already registered!");
        console.log(message);

        return false
    }

    checkPhoneNumberFormat = validator.isMobilePhone(phoneNumber, "id-ID");
    if (!checkPhoneNumberFormat) {
        message = chalk.red.inverse.bold("Wrong phone number format!");
        console.log(message);

        return false
    }

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    save_message = chalk.green.inverse.bold("Data has been saved!");
    console.log(save_message);
};

module.exports = { saveContact };