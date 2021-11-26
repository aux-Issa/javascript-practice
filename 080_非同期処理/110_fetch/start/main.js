// fetch('users.json').then(function(res){
//     console.log(res)
// })

async function fetchUsers(){
    const users = await fetch('users.json')
    console.log(users)
    const jsonedUsers = await users.json()
    for (const user of jsonedUsers) {
        console.log(`${user.name}`)
    }
}
fetchUsers()