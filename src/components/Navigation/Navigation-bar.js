import './Navigation.scss'

function NavigationBar(){
    return <>
        <h1 className={"h1"}>Navigation bar</h1>
        <nav>
            <ul className={"bar"}>
                <li className={"li"}>
                    Home
                </li>
                <li className={"li"}>
                    About
                </li>
                <li className={"li"}>
                    Contact
                </li>
            </ul>
        </nav>
    </>
}

export default NavigationBar;