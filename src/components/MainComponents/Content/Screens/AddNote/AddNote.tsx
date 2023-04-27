import { useState, useEffect, useContext } from 'react';
import CheckToken from '../CheckToken/CheckToken';
import { URL } from '../../../../MainWrapper';
import './AddNote.scss';
import { Link } from 'react-router-dom';
import ContextUpdate from '../../../Context/ContextUpdate';

const AddNote = () => {

    let [token, setToken] = useState<boolean>()

    const { setIsHide } = useContext(ContextUpdate)


    useEffect(() => {
        setIsHide('block')
        CheckToken()
    }, [])

    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    async function save() {
        let endpoint = 'api/v0.1/notes'
        let url = URL.url + endpoint
        const params = new URLSearchParams()

        if (!title || !text) {
            setError('Не все поля заполнены')
        } else {
            params.set('title', title)
            params.set('text', text)

            await fetch(url, {
                headers: {
                    'Authorization': localStorage.getItem('Authorization')
                },
                method: 'POST',
                body: params
            })

            location.replace('/notes')
        }
    }

    return (
        <main className="main">

            <div className="addNote">
                <div className="up">
                    <Link to={'/notes'}>&larr; Список заметок</Link>
                    <h2>Создание заметки</h2>
                    <div className='clearBlock'></div>
                </div>
                <div className="down">
                {error ? <div className='error'>
                    {error}
                </div> : null}
                    <input type="text"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        className='inputSmall'
                        placeholder='Заголовок' />
                    <textarea
                        value={text}
                        onChange={event => setText(event.target.value)}
                        className='inputBig'
                        placeholder='Заметка'></textarea>
                    <button
                    className='button'
                        onClick={save}
                    >Сохранить</button>
                </div>
            </div>
        </main>
    )
}

export default AddNote;