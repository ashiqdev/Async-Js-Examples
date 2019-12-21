async function test() {
  const user = await getUser(1);
  const repos = await getRepositories(user.githubUserName);
  const commits = await getAllTheCommits(repos);
  console.log(commits);
}

test();

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
      console.log("reading repos from db...");
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
