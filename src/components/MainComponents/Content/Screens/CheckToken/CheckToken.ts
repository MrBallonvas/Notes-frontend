function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = decodeURIComponent(atob(base64Url).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
};

function CheckToken() {
    let token = localStorage.getItem('Authorization');
    let arrToken;

    if (!token === undefined) {
        arrToken = parseJwt(token)
        if (new Date() >= new Date(arrToken.exp * 1000)) {
            localStorage.removeItem('Authorization');
            location.replace('/login')
        } else;
    } else;
}

export default CheckToken;