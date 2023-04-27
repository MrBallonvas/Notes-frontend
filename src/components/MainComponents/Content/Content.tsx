import Main from './Screens/Main/Main';
import AddNote from './Screens/AddNote/AddNote';
import Reg from './Screens/Reg/Reg';
import Login from './Screens/Login/Login';
import Logout from './Screens/Logout/Logout';
import Notes from './Screens/Notes/Notes';
import Note from './Screens/Note/Note';

import { Route, Routes } from 'react-router';
import './Content.scss';

const Content = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/reg' element={<Reg />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/notes/add' element={<AddNote />} />
            <Route path='/notes/:id' element={<Note />} />
        </Routes>
    )
}

export default Content;