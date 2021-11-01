const { argv } = require("process");
const { command, describe } = require("yargs");
const { saveContact } = require("./contacts");
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
});

yargs.parse();
