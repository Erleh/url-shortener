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

function Link({label, link, active, classes=""}) {
    return (
        <li>
            <a href={link} className={(!active ? "invisible " : "") + classes}>{label}</a>
        </li>
    )
}

function LinkList({active}) {
    return (
        <ul className={(active ? "active" : "inactive") + " container card"}>
            <Link label="Features" link="./" active={active}/>
            <Link label="Pricing" link="./" active={active}/>
            <Link label="Resources" link="./" active={active}/>
            <hr></hr>
            <Link label="Login" link="./" active={active}/>
            <Link label="Sign Up" link="./" classes="signup" active={active}/>
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
        <LinkList active={pressed}/>
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