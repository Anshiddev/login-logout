const login=()=>{
    username = uname.value
    password = pswd.value
    if(!username || !password){
        alert('Invalid Username Or Password')
    }else {
        localStorage.setItem('user',username)
        alert('Login successFull')
        window.location = 'dashboard.html'
    }
}