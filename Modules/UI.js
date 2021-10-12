export default class Ui {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    const date = new Date(user.created_at);
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // date.toLocaleDateString(options);

    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
            <span class="badge badge-info mb-1">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${date.toLocaleDateString()}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement('div');

    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.searchContainer');

    const search = document.querySelector('.search');

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const notFoundAlert = document.querySelector('.alert');

    if (notFoundAlert) {
      notFoundAlert.remove();
    }
  }

  showRepo(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += `
               <div class="card card-body mb-2">
                 <div class="row">
                   <div class="col-md-6">
                     <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                   </div>
                   <div class="col-md-6">
                   <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                   <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                   <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                   </div>
                 </div>
               </div>
             `;
    });
    document.getElementById('repos').innerHTML = output;
  }
}