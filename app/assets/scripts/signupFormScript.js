let signinBtn = document.getElementById('signupFormSubmitBtn')
signinBtn.addEventListener('click', async (event) => {
    event.preventDefault()

    let emailInput = document.getElementById('signupFormEmailInput')
    let passwordInput = document.getElementById('signupFormPasswordInput')

    if (!emailInput.value || !passwordInput.value) {
        console.log('error: all input values are required')
        return
    }

    console.log('email: ' + emailInput.value + ' Password: ' + passwordInput.value)

    const res = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput.value, password: passwordInput.value }),
    })

    const resJson = await res.json()
    if (res.ok) {
        /* if returned response is ok save user to local storage and dispatch action */
        localStorage.setItem('user', JSON.stringify(resJson))
        window.location.href = '/'
    } else {
        console.log(resJson.error)
    }
})
