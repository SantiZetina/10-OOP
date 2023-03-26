const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const generateHTML = require('./generateHTML');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manger's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: "officeNumber",
        message: "What is the team manager's office number?"
    }
]

const choiceQuestions = [
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to add next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the enginner's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?"
    }
]

async function main() {
  // Prompt for manager information
  const managerInfo = await inquirer.prompt(managerQuestions);

  // Create a manager instance
  const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);

  // Initialize the team array with the manager
  const team = [manager];

  let continueAdding = true;

  while (continueAdding) {
    // Prompt for adding an engineer, intern, or finishing the team
    const { choice } = await inquirer.prompt(choiceQuestions);

    if (choice === 'Add an Engineer') {
      // Prompt for engineer information
      const engineerInfo = await inquirer.prompt(engineerQuestions);

      // Create an engineer instance
      const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);

      // Add the engineer to the team
      team.push(engineer);
    } else if (choice === 'Add an Intern') {
      // Prompt for intern information
      const internInfo = await inquirer.prompt(internQuestions);

      // Create an intern instance
      const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);

      // Add the intern to the team
      team.push(intern);
    } else {
      continueAdding = false;
    }
  }

  // Generate the HTML
  const html = generateHTML(team);

  // Write the HTML to a file
  fs.writeFileSync('output.html', html);
}

main();
