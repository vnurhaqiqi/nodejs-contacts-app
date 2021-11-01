const { rejects } = require('assert/strict');
const fs = require('fs');
const { resolve } = require('path/posix');
const readline = require("readline");

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

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

const createQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};


const saveContact = (name, phoneNumber, email) => {
    const contact = {name, phoneNumber, email};
    const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Terim Kasih.");

    rl.close();
};

module.exports = {createQuestion, saveContact};