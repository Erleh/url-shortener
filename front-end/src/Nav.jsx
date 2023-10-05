import { useState } from 'react'

function Link({label, link}) {
    return (
        <li>
            <a href={link}>{label}</a>
        </li>
    )
}

function LinkList() {
    return (
        <ul className="container card">
            <Link label="Features" link="./" />
            <Link label="Pricing" link="./" />
            <Link label="Resources" link="./" />
            <hr></hr>
            <Link label="Login" link="./" />
            <Link label="Sign Up" link="./" />
        </ul>
    )
}

function Title({title}) {
    return (
        <p className="title">{title}</p>
    )
}

function Hamburger() {
    // temp setting pressed to true so it is visible
    const [pressed, setPressed] = useState(true);

    let handleClick = () => {
        setPressed(p => !p);
    }

    // Place hamburger icon in div
    return (
        <>
        <div onClick={handleClick}></div>
        {pressed ? <LinkList /> : null}
        </>
    )
}

export default function Nav() {
    return (
        <>
            <Title title="Shortly"/>
            <Hamburger />
        </>
    )
}