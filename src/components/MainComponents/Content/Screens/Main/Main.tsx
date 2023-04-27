import { useEffect, useContext } from 'react';
import CheckToken from '../CheckToken/CheckToken';
import { Link } from 'react-router-dom';
import Context from '../../../Context/Context';
import ContextUpdate from '../../../Context/ContextUpdate';
import "./Main.scss";

const Main = () => {

    const { setIsHide } = useContext(ContextUpdate)

    
    useEffect(() => {
        setIsHide('none')
        CheckToken();
    }, [])

    return (
        <main className='main'>
            <div>
                <p>
                    Проект Simple notes - это удобный и простой инструмент для хранения и управления заметками. Он состоит из двух частей: Notes-backend и Notes-frontend.
                </p>
                <p>
                    Backend - это серверная часть, написанная на Django, которая выполняет простейшие операции работы с заметками, такие как регистрация, авторизация, просмотр, создание, изменение и удаление заметок. Бекенд предоставляет простой и понятный API, который может быть использован начинающими фронтенд-разработчиками для практики.
                </p>
                <p>
                    Frontend - это пользовательский интерфейс, написанный на React, который позволяет производить все операции с заметками, предоставляя удобный и интуитивно понятный интерфейс. Он демонстрирует, как можно использовать API бекенда для работы с заметками.
                </p>
                <p>
                    Проект Simple notes - это отличная возможность для начинающих фронтенд разработчиков попрактиковаться в создании приложений на React и работе с API.
                </p>
                <p>
                    Исходный код и документация Backend: <a target='_blank' href="https://github.com/DeveloperDmitryKolyadin/Notes-backend">https://github.com/DeveloperDmitryKolyadin/Notes-backend</a>
                </p>
                <p>
                    Исходный код Frontend: <a target='_blank' href="https://github.com/MrBallonvas/Notes-frontend">https://github.com/MrBallonvas/Notes-frontend</a>
                </p>
            </div>

            <div className='blockOfButtons'>
                <Link className='button' to={'/login'}>
                    Войти в аккаунт
                </Link>

                <Link className='button' to={'/reg'}>
                    Зарегистрироваться
                </Link>
            </div>

        </main>
    )
}

export default Main;