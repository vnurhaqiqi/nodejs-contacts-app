const { argv } = require("process");
const { command, describe } = require("yargs");
const { saveContact, listContact, detailContact, deleteContact } = require("./contacts");
const yargs = require("yargs");

yargs.command({
    command: "add",
    describe: "Add new contact",
    builder: {
        name: {
            describe: "Full Name",
            demandOption: true,
            type: "string",
        },
        phoneNumber: {
            describe: "Phone Number",
            demandOption: true,
            type: "string",
        },
        email: {
            describe: "Email",
            demandOption: true,
            type: "string",
        }
    },
    handler(argv) {
        const contact = {
            name: argv.name,
            phoneNumber: argv.phoneNumber,
            email: argv.email,
        };

        saveContact(contact.name, contact.phoneNumber, contact.email);
    }
}).demandCommand();

yargs.command({
    command: "list",
    describe: "Display all list of contact",
    handler() {
        const contacts = listContact();
    }
});

yargs.command({
    command: "detail",
    describe: "Details contact by name",
    builder: {
        name: {
            describe: "Full Name",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        const contact = detailContact(argv.name);
    }
});

yargs.command({
    command: "delete",
    describe: "Delete contact by name",
    builder: {
        name: {
            describe: "Full Name",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        const contact = deleteContact(argv.name);
    }
});

yargs.parse();
