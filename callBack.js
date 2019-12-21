// without callback

// console.log("Before");

// const user = getUser(1);

// console.log(user);

// console.log("After");

// function getUser(id) {
//   setTimeout(() => {
//     console.log("Reading a user from database");
//     return { id, githubUserName: "ashiqdev" };
//   }, 2000);
// }

// with callback
console.log("Before");

getUser(1, function(user) {
  console.log("User", user);
  // get repos
  getRepositories(user.githubUserName, function(repos) {
    console.log("Repos", repos);
    // get commits
    getAllTheCommits(repos, function(commits) {
      console.log("Commits", commits);
    });
  });
});

console.log("After");

function getUser(id, cb) {
  setTimeout(() => {
    console.log("Reading a user from db...");
    cb({ id, githubUserName: "ashiqdev" });
  }, 2000);
}

function getRepositories(username, cb) {
  setTimeout(() => {
    console.log("Reading repos from db.....");
    cb(["repo1", "repo2", "repo3"]);
  }, 4000);
}

function getAllTheCommits(repos, cb) {
  setTimeout(() => {
    console.log("Reading commits from db");
    cb(["commit1", "commit2"]);
  }, 6000);
}
