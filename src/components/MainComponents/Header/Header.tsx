import { Link } from 'react-router-dom'
import Context from '../Context/Context';
import { useContext, useEffect, useState } from 'react';
import "./Header.scss";

const Header = () => {

    const { isHide } = useContext(Context)

    const [styles, setStyles] =
        useState({
            display: 'none'
        })

    useEffect(()=> {
        if (isHide === 'none') {
            setStyles({
                a: 'block',
                b: '75px'
            })
        } else {
            setStyles({
                a: 'flex',
                b: 'none'
            })
        }
    }, [isHide])


    return (
        <header className="header"
            style={{
                display: styles.a,
                lineHeight: styles.b,
            }}
        >
            <div className="clear"
                style={{
                    display: isHide,
                }}></div>

            <Link to='/'>Simple Notes</Link>
            <Link
                className="button"
                style={{
                    display: isHide,
                }}
                to={'/logout'}>
                Выход
            </Link>
        </header>
    )
}

export default Header;