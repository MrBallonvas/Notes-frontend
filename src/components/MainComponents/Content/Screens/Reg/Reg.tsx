import { useState, useEffect, useContext } from "react";
import CheckToken from "../CheckToken/CheckToken";
import { URL } from "../../../../MainWrapper";
import Context from '../../../Context/Context';
import ContextUpdate from '../../../Context/ContextUpdate';
import "./Reg.scss";
import { Link } from "react-router-dom";

const Reg = () => {
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const { setIsHide } = useContext(ContextUpdate)

    setIsHide('none')

    async function reg() {
        const endpoint = 'api/v0.1/new_user';
        const url = URL.url + endpoint;

        let params = new URLSearchParams();

        if (firstname === '' || lastname === '' || username === '' || password === '') {
            setError('Не все поля заполнены')
        } else {
            params.set('first_name', firstname);
            params.set('last_name', lastname);
            params.set('username', username);
            params.set('password', password);

            await fetch(url, {
                method: 'POST',
                body: params,
            })
                .then(res => res.json())
                .then(res => {
                    if (res.ok === true) {
                        location.replace('/login')
                    } else {
                        setError(res.error)
                    }
                })
                .catch(err => {
                    setError('Some Error');
                })
        }
    }

    return (
        <main className="main">
            <div className="main__block">
                <h2>
                Регистрация
                </h2>
                <div className="form">
                    <input type="text"
                        placeholder="Имя"
                        value={firstname}
                        onChange={event => setFirstname(event.target.value)}
                        className="input" />

                    <input type="password"
                        placeholder="Фамилия"
                        value={lastname}
                        onChange={event => setLastname(event.target.value)}
                        className="input" />

                    <input type="password"
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
                        onClick={reg}>
                        Зарегистрироваться
                    </button>

                    <p>
                        <Link to="/login">Вход</Link>
                    </p>
                </div>
            </div>
        </main >
    )
}

export default Reg;