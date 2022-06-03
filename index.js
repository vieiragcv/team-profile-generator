const express = require('express');
const app = express();
const inquirer = require('inquirer');


const promptManager = () => {
  console.log(`
===============================================================================
Welcome to Team Profile Generator! Follow the steps below to create your page!
===============================================================================
`);
  return inquirer.prompt([

    {
      type: 'input',
      name: 'manager-name',
      message: `Provie your Manager's Name: `,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log(`Please enter your Manager's name!`);
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'employee-id',
      message: `Enter the Manager's employee id: `,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log(`You must the manager's ID number`);
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: `Manager's email address: `,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('You must provide a valid email');
          return false;
        }
      }
    },
    
    {
      type: 'number',
      name: 'office-number',
      message: `Manager's Office Number: `,
      validate: numberInput => {
        if (numberInput) {
          return true;
        } 
        else {
          console.log('Please provide a contact number for the manager. (numbers only)');
          return false;
        }
      }
    }
    ])
  }

const promptEmployee = () => {
  console.log(`
  =====================================================
  Now let's get some information on other team members
  =====================================================
`);
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'Do you want to include an Employee, Intern, or you are finished building the team?',
      choices: ['Employee', 'Intern', 'The team is complete. Generate Page']
    },
    {
      type: 'confirm',
      name: 'confirm-completion',
      message: 'Are you sure all team members have been added?',
      default: false,
      when: (answers) => answers.employeeType === 'The team is complete. Generate Page'
    }
  ])
}

  promptManager()
    .then(promptEmployee);
