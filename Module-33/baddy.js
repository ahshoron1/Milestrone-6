function loadBuddies(){
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = data => {
    console.log(data)
    const buddies = data.results;
    buddiesDiv = document.getElementById('buddies')
    for(const buddy of buddies){
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}`
        buddiesDiv.appendChild(p)

    }
}