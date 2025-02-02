export interface Details {
  id: number; // The unique identifier for the repository
  node_id: string; // The unique node ID for the repository
  name: string; // The name of the repository
  full_name: string; // The full name of the repository, including the owner's username
  private: boolean; // Whether the repository is private or public

  owner: {
    login: string; // The GitHub username of the repository owner
    id: number; // The unique ID of the repository owner
    avatar_url: string; // URL of the owner's avatar image
    html_url: string; // URL of the owner's GitHub profile
    type: string; // The type of the owner (e.g., 'User' or 'Organization')
  };

  description: string; // A brief description of the repository
  url: string; // The API URL of the repository
  html_url: string; // The HTML URL for the repository page
  forks_count: number; // The number of forks of the repository
  stargazers_count: number; // The number of stars the repository has received
  watchers_count: number; // The number of watchers for the repository
  language: string; // The programming language used in the repository
  created_at: string; // The date and time when the repository was created
  updated_at: string; // The date and time when the repository was last updated

  license: {
    key: string; // The key for the repository's license
    name: string; // The name of the repository's license (e.g., MIT)
    url: string; // The URL for the repository's license
  };

  open_issues_count: number; // The number of open issues in the repository
  size: number; // The size of the repository in KB or MB
  default_branch: string; // The name of the default branch (e.g., 'main' or 'master')
}