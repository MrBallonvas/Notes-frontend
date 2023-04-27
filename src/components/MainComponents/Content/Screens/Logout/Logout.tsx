const Logout = () => {
    localStorage.removeItem('Authorization')
    return location.replace('/')
}

export default Logout;