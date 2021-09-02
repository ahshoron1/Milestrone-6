function loadData(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}
function displayUser(data){
    const ul = document.getElementById('users');
    for(const user of data){
        console.log(user)
        const li = document.createElement('li');
        li.innerText =`Name: ${user.name} Email: ${user.email}`
        ul.appendChild(li);
    }
}