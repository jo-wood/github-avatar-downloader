# Project 1 - Github Avatar Downloader

[jump to relevant Github API doc](#github-api-doc)

## Project Description - Goal:

Build a command-line HTTP client that will request the avatars for all contributers to a given project on GitHub, and download them to disk.

- topics covered: 
  - HTTP
  - APIs 
  - JSON
  - the file system

### Problem Statement

Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, avatars/.

#### Expected Usage

The program should be executed from the command line in the following manner:

```command
node download_avatars.js jquery jquery
```

Any valid ***repo-owner** + **repo combination** can be used, such as this:

```command
node download_avatars.js nodejs node
```

#### Functional Requirements

As an open source project leader,
I want a folder with the avatars of all of my github project's contributors 
so that I can use them in a website.

Given

I have node installed
I am in the shell
I have your file in my current folder
When

I execute your file using node, providing a github user and repository as command-line arguments For example: $ node download_avatars.js nodejs node
Then

I should find a folder called avatars in my current directory
The avatars folder should contain images corresponding to the avatars of the contributors of the repo
The name of each image file should be the contributor's name and the file extension (ex. johnny.png)

#### Implementation Requirements

- uses 'request' library to make the HTTP requests
- uses git for version control


### Github API Doc

[**List contributors**](https://developer.github.com/v3/repos/#list-contributors)

Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.

*GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.*

```javascript
GET /repos/:owner/:repo/contributors
```

Parameters:

|  Name  |  Type  | Description |
|-------:|-------:|------------:|
|`anon`  |`string`|set to `1` or `true` to include anonymous contributers in results |

Response if repo is empty:

`Status: 204 No Content`

Response if repo contains content:

```javascript
Status: 200 OK
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
[
  {
    "login": "octocat",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 32
  }
]
```

