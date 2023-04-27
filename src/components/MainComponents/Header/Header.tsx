import { Link } from 'react-router-dom'
import Context from '../Context/Context';
import { useContext, useEffect, useState } from 'react';
import "./Header.scss";

const Header = () => {

    const { isHide } = useContext(Context)

    const [headerStyles, setHeaderStyles] =
        useState({
            display: 1
        })

    useEffect(() => {
        if (isHide === 'none') {
            setHeaderStyles({
                a: 'block',
                b: '75px'
            })
        } else {
            setHeaderStyles({
                a: 'flex',
                b: 'none'
            })
        }
    }, [])


    return (
        <header className="header"
            style={{
                display: headerStyles.a,
                lineHeight: headerStyles.b,
            }}>
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