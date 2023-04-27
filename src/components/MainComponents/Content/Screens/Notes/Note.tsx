import "./Notes.scss";
import { Link } from "react-router-dom";

const Note = ({ id, title }) => {
    return (
        <Link className="notes__item" to={`/notes/${id}`}>{title ? title : `Заметка ${id}`}</Link>
    )
}

export default Note;