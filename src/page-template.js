const generateTeam = (team) => {
    //manager HTML
    const generateManager = (manager) => {
        return `
        <div class="card emp-card">
        <div class="card-header">
            <h2 class="card-title">
                ${manager.getName()}
            </h2>
            <h3 class="card-title mr-2">
                ${manager.getRole()}
            </h3>
        </div>
        <div class="card-body">
            <ul class="list">
                <li class="list-item">
                    ID: ${manager.getID()}
                </li>
                <li class="list-item">
                    Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                <li class="list-item">
                    Office Number: ${manager.getOfficeNumber()}
                </li>
            </ul>
        </div>
    </div>
    `;
    };

    //engineer HTML
    const generateEngineer = (engineer) => {
        return `
        <div class="card emp-card">
        <div class="card-header">
            <h2 class="card-title">
                ${engineer.getName()}
            </h2>
            <h3 class="card-title mr-2">
                ${engineer.getRole()}
            </h3>
        </div>
        <div class="card-body">
            <ul class="list">
                <li class="list-item">ID: 
                    ${engineer.getID()}
                </li>
                <li class="list-item">
                    Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                </li>
                <li class="list-item">
                    Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
                </li>
            </ul>
        </div>
    </div>
        `;
    };

    // intern HTML
    const generateIntern = (intern) => {
    return `
        <div class="card emp-card">
    <div class="card-header">
        <h2 class="card-title">
            ${intern.getName()}
        </h2>
        <h3 class="card-title mr-2">
            ${intern.getRole()}
        </h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-item">
                ID: ${intern.getId()}
            </li>
            <li class="list-item">
                Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            </li>
            <li class="list-item">
                School: ${intern.getSchool()}
            </li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(
        team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    html.push(
        team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    html.push(
        team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
    return html.join("");
};

//function to create page
module.ecports = (team) =>  {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Teamsters</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container-one">
        <div class="row">
            <div class="col-12 mb-3 team-heading">
                <h1 class="text-center">
                    My Team
                </h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};