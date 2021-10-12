export default class Github {
  constructor() {
    this.client_id = '94e50446d8b48600fedd'
    this.client_secret = '6bdc9b5a8a9762bcc06c15685cd280c500086c3';
    this.repos_count = 5;
    this.repos_sort = 'create: asc';
  }
  
  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileRes.json();
    const repos = await repoRes.json()
    
    return {
      profile: profile,
      repos: repos
    }
  }
}