import { useState, useEffect, useContext } from "react";
import CheckToken from '../CheckToken/CheckToken';
import { URL } from '../../../../MainWrapper';
import Context from '../../../Context/Context';
import ContextUpdate from '../../../Context/ContextUpdate';
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<String | null>(null);

    const { setIsHide } = useContext(ContextUpdate)

    async function login() {
        let endpoint = 'api/v0.1/auth/login/password';
        let url: string = URL.url + endpoint;

        const params = new URLSearchParams()
        params.set('username', username)
        params.set('password', password)

        await fetch(url, {
            method: 'POST',
            body: params,
        })
            .then(res => res.json())
            .then(res => {
                if (res.token) {
                    localStorage.removeItem('Authorization')
                    localStorage.setItem('Authorization', res.token)
                    location.replace('/notes')
                } else {
                    setError(res.error)
                }
            })
            .catch(err => setError('Some Error'))

    }

    return (

        <main className="main">
            <div className="main__block">
                <h2>
                    Вход в аккаунт
                </h2>
                <div className="form">
                    <input type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                        className="input" />

                    <input type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                        className="input" />

                    <button type="button"
                        className="button"
                        onClick={login}>
                        Войти
                    </button>

                    <p>
                        <Link to="/reg">Регистрация</Link>
                    </p>
                </div>
            </div>
        </main >
    )
}

export default Login;