import GitHub from '/Modules/GitHub.js'
import Ui from '/Modules/Ui.js'

const github = new GitHub();
const ui = new Ui();

const searchUser = document.getElementById('searchUser');
const userText = document.getElementById('searchBox').value;
const clearUser = document.getElementById('clearUser');

searchUser.addEventListener('click', (e) => {

  const userText = document.getElementById('searchBox').value

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          ui.showProfile(data.profile);
          ui.showRepo(data.repos);
          console.log(data.repos);
        }
      });
  }
  //Clearing The Profile Details
  clearUser.addEventListener('click', () => {
    ui.clearProfile();
    const userText = document.getElementById('searchBox').value = '';
  })
});