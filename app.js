const contact = require("./contacts");

const main = async () => {
    const name = await contact.createQuestion("Isi Nama: ");
    const phoneNumber = await contact.createQuestion("Isi No. HP: ");
    const email = await contact.createQuestion("Isi Email: ");

    contact.saveContact(name, phoneNumber, email);
}

main();
