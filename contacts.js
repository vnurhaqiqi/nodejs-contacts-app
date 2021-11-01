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


const loadContactData = () => {
    const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(fileBuffer);

    return contacts
}

const saveContact = (name, phoneNumber, email) => {
    const contact = { name, phoneNumber, email };
    const contacts = loadContactData();

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


const listContact = () => {
    const contacts = loadContactData();

    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.name}`);
    });
}

const detailContact = (name) => {
    const contacts = loadContactData();
    const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (!contact) {
        message = chalk.red.inverse.bold("Contact not found!");
        console.log(message);

        return false
    }

    console.log(chalk.blue.inverse.bold(contact.name));
    console.log(chalk.blue.inverse.bold(contact.email));
    console.log(chalk.blue.inverse.bold(contact.phoneNumber));
}

const deleteContact = (name) => {
    const contacts = loadContactData();
    const newContacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase());

    if (contacts.length === newContacts.length) {
        message = chalk.red.inverse.bold("Contact not found!");
        console.log(message);

        return false
    }

    fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

    save_message = chalk.green.inverse.bold("Data has been deleted!");
    console.log(save_message);
}

module.exports = { saveContact, listContact, detailContact, deleteContact };