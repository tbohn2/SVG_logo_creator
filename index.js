const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter 3 characters for logo: '
        }
    ])
    .then(({ title }) => {
        console.log(title);
    }
    )

// const text = new Text();

