import { useState } from 'react'

function HamburgerIcon({clicked, active}) {
    return (
        <>
        <div onClick={clicked} className="container hamburger">
            <div className={(active ? "change" : "") + " bar1"}/>
            <div className={(active ? "change" : "") + " bar2"}/>
            <div className={(active ? "change" : "") + " bar3"}/>
        </div>
        </>
    )
}

function Link({label, link, classes=""}) {
    return (
        <li>
            <a href={link} className={classes}>{label}</a>
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
            <Link label="Sign Up" link="./" classes="signup"/>
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
    const [pressed, setPressed] = useState(false);

    let handleClick = () => {
        setPressed(p => !p);
    }

    // Place hamburger icon in div
    return (
        <>
        <HamburgerIcon clicked={handleClick} active={pressed}/>
        {pressed ? <LinkList /> : null}
        </>
    )
}

export default function Nav() {
    return (
        <>
        <nav className="container">
            <Title title="Shortly"/>
            <Hamburger />
        </nav>
        </>
    )
}