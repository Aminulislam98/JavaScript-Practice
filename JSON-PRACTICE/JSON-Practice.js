const loadComment = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const response = await fetch(url);
  const comments = await response.json();
  getComment(comments);
};
loadComment();
const getComment = (value) => {
  const showMessage = document.getElementById("showMessage");
  let html = "";
  value.forEach((element) => {
    html += `
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
  showMessage.innerHTML = html;
};
