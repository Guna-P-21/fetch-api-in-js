const btnText = document.querySelector("#btn-text");
const outputText = document.querySelector("#txt-output");

btnText.addEventListener("click", getTextFile);

function getTextFile() {
    fetch("data.txt")
      .then((res) => res.text())
      .then((data) => {
        outputText.innerHTML = data;
      })
      .catch((err) =>{
        console.log(err);
      });
}

/* ------------------------------- */
const btnJson = document.querySelector("#btn-json");
const outputJson = document.querySelector("#json-output");

btnJson.addEventListener("click", getJsonData);

function getJsonData() {
  fetch("user.json")
    .then((res) => res.json())
    .then((users) =>{
      let data = "<ul>";
      users.forEach((user) =>{
        data += `<li>${user.name} : ${user.age} : ${user.gender}</li>`;
      });
      data += "</ul>";
      outputJson.innerHTML = data;
    })
    .catch((err) =>{
      console.log(err);
    });
}

// --------------------------------------
const btnApi = document.querySelector("#btn-api");
const outputApi = document.querySelector("#api-output");

btnApi.addEventListener("click", getApiDaa);

async function getApiDaa() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonData = await response.json();
  let output = "";
  jsonData.forEach((post) => {
    output += `<div class = 'post'>
              <h4>${post.title}</h4>
              <p>${post.body}</p>
            </div>`;
  });
  outputApi.innerHTML = output;
}