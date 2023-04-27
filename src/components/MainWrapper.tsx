import Header from "./MainComponents/Header/Header";
import Content from "./MainComponents/Content/Content";
import ContextProvider from "./MainComponents/Context/ContextProvider";
import './MainWrapper.scss'

export namespace URL {
    export let url: string = 'http://127.0.0.1:8000/'
}

export const MainWrapper = () => {
    return (
        <div>
            <ContextProvider>
                <Header />
                <div className="container">
                    <Content />
                </div >
            </ContextProvider>
        </div>
    )
}