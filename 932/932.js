let loginForm = document.forms.login

loginForm.onsubmit = (event) =>  {
    event.preventDefault()

    let user = {}
    
    let fm = new FormData(loginForm)

    fm.forEach((value,key) => {
        user[key] = value    
    })

    console.log(user);
}