// promise holds the result of async operation

console.log("Before");

// consume promises
getUser(1)
  .then(user => getRepositories(user.githubUserName))
  .then(repos => getAllTheCommits(repos[0]))
  .then(commits => console.log(commits))
  .catch(err => console.log(err.message));

console.log("After");

// .......
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from db...");
      resolve({ id, githubUserName: "ashiqdev" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading repos from db.....");
      resolve(["repo1", "repo2", "repo3"]);
    }, 4000);
  });
}

function getAllTheCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading commits from db");
      resolve(["commit1", "commit2"]);
    }, 6000);
  });
}
