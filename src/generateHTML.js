function createCard(member) {
    const role = member.getRole();
    let extraInfo = '';
  
    if (role === 'Manager') {
      extraInfo = `Office number: ${member.getOfficeNumber()}`;
    } else if (role === 'Engineer') {
      extraInfo = `GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`;
    } else if (role === 'Intern') {
      extraInfo = `School: ${member.getSchool()}`;
    }
  
    return `
      <div class="card">
        <div class="card-header">
          <h2>${member.getName()}</h2>
          <h3>${role}</h3>
        </div>
        <div class="card-body">
          <ul>
            <li>ID: ${member.getId()}</li>
            <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
            <li>${extraInfo}</li>
          </ul>
        </div>
      </div>
    `;
  }
  
  function generateHTML(team) {
    const cards = team.map(createCard).join('\n');
  
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <style>
          /* Add your custom styles here */
        </style>
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <main>
          ${cards}
        </main>
      </body>
      </html>
    `;
  }
  
  module.exports = generateHTML;
  