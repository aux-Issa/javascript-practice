async function fetchUsers(){
    const rawData = await fetch('users.json')
    if (rawData.ok) {
        const jsonedData = await rawData.json();
        if (!jsonedData.length) {
            throw new Error();
        }
        return jsonedData
    }
}

async const handleFetchedData = (jsonedData) => {
    try {
        const users = await fetchUsers();
        for(const user of users){
            console.log(`${user.name}`)
        }
    } catch(e) {
        console.log(e)
    } finally {
        console.log('bye')
    }
}

// async function fetchUsers() {
//   const response = await fetch('users.json');
//   const json = await response.json();
//   for(const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// }

// fetchUsers();