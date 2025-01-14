// your code here
function getRepositories(){
    const req = new XMLHttpRequest();
    req.addEventListener('load', displayRepositories);
    req.open('GET', 'https://api.github.com/users/octocat/repos');
    req.send();
}

function displayRepositories() {
    let repos = JSON.parse(this.responseText);
    const repoList = `<ul>${repos
      .map(
        r =>
          '<li>' +
          `<a href="https://github.com/${r.owner.login}/${r.name}">` + 
          r.owner.login + " " + r.name + 
          "</a>" +  
          '</li>'
      )
      .join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;
  }


  function getCommits(el) {
    const username = el.dataset.username
    const repo = el.dataset.repository
    const req = new XMLHttpRequest();
    req.addEventListener('load', displayCommits);
    req.open('GET', 'https://api.github.com/repos/' + username + '/' + repo + '/commits');
    req.send();
  }

  function displayCommits() {
    const commits = JSON.parse(this.responseText);
    const commitsList = `<ul>${commits
      .map(
        commit =>
        '<li><strong>' +
        commit.author.login +
        '<strong>' +
        commit.commit.author.name +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
      )
      .join('')}</ul>`;
    document.getElementById('details').innerHTML = commitsList;
  }



  function getBranches(el) {
    const username = el.dataset.username
    const repo = el.dataset.repository
    const req = new XMLHttpRequest();
    req.addEventListener('load', displayBranches);
    req.open('GET', 'https://api.github.com/repos/' + username + '/' + repo + '/branches');
    req.send();
  }

  function displayBranches() {
    const branches = JSON.parse(this.responseText);
    const branchesList = `<ul>${branches
      .map(
        branch =>
        '<li><strong>' +
        branch.name +
        '</li>'
      )
      .join('')}</ul>`;
    document.getElementById('details').innerHTML = branchesList;
  }