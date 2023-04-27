import Context from './Context'
import ContextUpdate from './ContextUpdate'
import { useState } from 'react'

const ContextProvider = (props) => {
    const [logout, setLogout] = useState('')
    const [isHide, setIsHide] = useState('hide')
    return (
        <Context.Provider value={{ logout, isHide }}>
            <ContextUpdate.Provider value={{ setLogout, setIsHide }}>
                {props.children}
            </ContextUpdate.Provider>
        </Context.Provider>
    )
}

export default ContextProvider;