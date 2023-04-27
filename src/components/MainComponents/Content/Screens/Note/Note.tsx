import { useEffect, useState, useContext } from 'react';
import CheckToken from '../CheckToken/CheckToken';
import { Link } from 'react-router-dom';
import { URL } from '../../../../MainWrapper';
import Context from '../../../Context/Context';
import ContextUpdate from '../../../Context/ContextUpdate';
import "./Note.scss";

const Note = () => {
    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    let [token, setToken] = useState<boolean>()

    const { setIsHide } = useContext(ContextUpdate)


    useEffect(() => {
        setIsHide('block')
        CheckToken()
    }, [])

    const id = location.pathname.split('/')[2]

    useEffect(() => {
        let endpoint = `api/v0.1/note/${id}`;
        let url: string = URL.url + endpoint
        fetch(url, {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            }
        })
            .then(res => res.json())
            .then(res => res.note)
            .then(res => {
                setTitle(res.title)
                setText(res.text)
            })
            .catch(err => setError(err))
    }, [])

    function save() {
        let endpoint = `api/v0.1/note/${id}`
        let url: string = URL.url + endpoint;
        const params = new URLSearchParams()

        if (!title || !text) {
            setError('Не все поля заполнены')
        } else {
            params.set('title', title)
            params.set('text', text.toString())

            fetch(url, {
                headers: {
                    'Authorization': localStorage.getItem('Authorization')
                },
                method: 'POST',
                body: params
            })
        }
    }

    function del() {
        let endpoint = `api/v0.1/note/${id}`
        let url: string = URL.url + endpoint
        fetch(url, {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            },
            method: 'DELETE',
        })
        location.replace('/notes')
    }

    function changeInputDisables() {
        if (isDisabled === false) {
            save()
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }

    return (
        <main className="main">
            <div className="addNote">
                <div className="up">
                    <Link to={'/notes'}>&larr; Список заметок</Link>
                    <h2>Заметка</h2>
                    <button
                        onClick={changeInputDisables}
                    >{isDisabled ?
                        "Изменить" :
                        "Сохранить"
                        }</button>
                </div>
                <div className="down">
                    {error ? <div className='error'>
                        {error}
                    </div> : null}
                    <input type="text"
                        value={title}
                        disabled={isDisabled}
                        onChange={event => setTitle(event.target.value)}
                        className='inputSmall'
                        placeholder='Заголовок' />
                    <textarea
                        value={text}
                        disabled={isDisabled}
                        onChange={event => setText(event.target.value)}
                        className='inputBig'
                        placeholder='Заметка'></textarea>
                    <button
                        onClick={del}
                    >Удалить заметку</button>
                </div>
            </div>
        </main>
    )
}

export default Note;