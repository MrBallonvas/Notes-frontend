function parseJwt(token: string | null) {
    if (typeof token === 'string') {
        var base64Url = token.split('.')[1];
        var base64 = decodeURIComponent(atob(base64Url).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
};

const CheckToken = () => {
    let token: string | null = localStorage.getItem('Authorization')

    // if (typeof token === 'string') {
    //     token = parseJwt(token)
    //     if (new Date() >= new Date(token.exp * 1000)) {
    //         localStorage.removeItem('Authorization');
    //         location.replace('/login')
    //     } else;
    // }
}

export default CheckToken;