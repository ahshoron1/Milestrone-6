document.getElementById('add-border').addEventListener('click', function(){
   
   const container = document.getElementById('friend-container');
   container.style.border='2px solid red'
   container.style.padding='10px'
})
function addBackgrond(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.background = 'gray'
    }
}
document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML =`
        <h3 class="friend-name">Friend-4</h3>
        <p>Minima, laborum.</p>
    `
    container.appendChild(friendDiv);
})