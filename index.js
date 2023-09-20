let formData = {
    name: 'Steve',
    email: 'steve@steve.com'
}
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(obj => {
        document.body.innerHTML = obj["id"]
    })
    .catch(error => {
        document.body.innerHTML = error.message
        console.log(error.message)
    })
}
