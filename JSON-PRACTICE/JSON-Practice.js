const comment = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((response) => response.json())
    .then((comment) => {
      console.log(comment);
      getComment(comment);
    });
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

// 0
// :
// {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}
