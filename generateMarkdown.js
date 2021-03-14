function generateMarkdown(data) {
    return `# ${data.name}
  ## description
  ${data.description}
  ## install
  ${data.install}
  ## usage
  ${data.usage}
  ## contribution
  ${data.contribution}
  ## test
  ${data.test}
  ##license
  ${data.license}
  ##username
  ${data.username}
  ##email
  ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  