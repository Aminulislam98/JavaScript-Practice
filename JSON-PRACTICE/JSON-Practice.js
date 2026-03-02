const comment = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const response = await fetch(url);
  const comment = await response.json();
  getComment(comment);
};
comment();
const getComment = (value) => {
  const showMessage = document.getElementById("showMessage");
  showMessage.innerHTML = "";

  value.forEach((element) => {
    showMessage.innerHTML += `
    <div class="comment-div">
    <p class="user-name">User Name:</p>
    <p>${element.name}</p>
    <p class="user-email">User Email:</p>
    <p>${element.email}</p>
    <p class="user-message">User Message:</p>
    <p>${element.body}</p>
    </div>
    `;
  });
};
