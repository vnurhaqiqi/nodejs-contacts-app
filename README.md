# Simple Contact App

## Introduction

This is simple contact app run in CLI using NodeJs.

## Packages installed

<table>
<thead>
<tr>
  <th>No.</th>
  <th>Name</th>
  <th>Description</th>
  <th>Link</th>
</tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>yargs</td>
    <td>Runs interactive command line tools (CLI), by parsing arguments and generating an elegant user interface.</td>
    <td>https://www.npmjs.com/package/yargs</td>
  </tr>
  <tr>
    <td>2</td>
    <td>chalk</td>
    <td>Make CLI looks pretier.</td>
    <td>https://www.npmjs.com/package/chalk</td>
  </tr>
  <tr>
    <td>3</td>
    <td>validator</td>
    <td>Validate only string inputs.</td>
    <td>https://www.npmjs.com/package/validator</td>
  </tr>
</tbody>
</table>

## Usage
### Add contact
`add new contact by passing name, email and phone number`
```bash
node app add --name="YOUR NAME" --email="YOUR EMAIL" -- phoneNumber="YOUR PHONE NUMBER"
```

### List of contact
`display all list of contact`
```bash
node app list
```

### Contact detail
`display contact details by passing contact name`
```bash
node app detail --name="YOUR NAME" 
```


### Delete contact
`delete contact by passing contact name`
```bash
node app delete --name="YOUR NAME" 
```

---
Copyright © 2021 by Viqi Nurhaqiqi
