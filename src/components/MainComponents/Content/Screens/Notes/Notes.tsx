import { useEffect, useState, useContext } from "react";
import CheckToken from "../CheckToken/CheckToken";
import Note from "./Note";
import { Link } from "react-router-dom";
import { URL } from '../../../../MainWrapper';
import Context from '../../../Context/Context';
import ContextUpdate from '../../../Context/ContextUpdate';
import "./Notes.scss";

interface INote {
    title: string
    id: number
}

const Notes = () => {
    const [notes, setNotes] = useState<INote[]>([]);
    const [error, setError] = useState<string | null>(null);
    let [token, setToken] = useState<boolean>()
    let [tmp, setTmp] = useState<number>()

    const { setIsHide } = useContext(ContextUpdate)

    useEffect(() => {
        setIsHide('block')
        CheckToken();
    }, [])

    let data = notes.map((note, index) => (
        <Note key={index} id={note.id} title={note.title} />
    ))

    let block = (<div className="down">
        {notes[0] ?
            data
            :
            <div className="noNotes">
                <h3>У вас еще нет заметок</h3>
                <Link to={'/notes/add'}>Создать заметку</Link>
            </div>
        }
    </div>)


    useEffect(() => {
        let endpoint = 'api/v0.1/notes'
        let url = URL.url + endpoint
        fetch(url, {
            headers: {
                'Authorization': localStorage.getItem('Authorization'),
            }
        })
            .then(res => res.json())
            .then(res => {
                setNotes(res.notes);
            })
            .catch(err => {
                setError(err);
            })
    }, [])


    return (
        <main className="main">
            <div className="notes">
                <div className="up">
                    <h2>Заметки</h2>
                    <Link to={'/notes/add'}>
                        Создать заметку
                    </Link>
                </div>
                {block}
            </div>
        </main>
    )
}

export default Notes;