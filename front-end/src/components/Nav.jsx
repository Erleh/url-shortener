import { useState } from 'react'

function Title({title}) {
    return (
        <p className="title">{title}</p>
    )
}

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

function Link({label, link, active=true, classes=""}) {
    return (
        <li>
            <a href={link} className={(!active ? "invisible " : "") + classes}>{label}</a>
        </li>
    )
}

function HamList({active}) {
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

function Hamburger() {
    // temp setting pressed to true so it is visible
    const [pressed, setPressed] = useState(false);

    let handleClick = () => {
        setPressed(p => !p);
    }

    // Place hamburger icon in div
    return (
        <>
        <Title title="Shortly"/>
        <HamburgerIcon clicked={handleClick} active={pressed}/>
        <HamList active={pressed}/>
        </>
    )
}

function ClassicLinks() {
    return (
        <>
        <ul className={"container"}>
            <div id="nav-links" className={"container"}>
                <Link label="Features" link="./"/>
                <Link label="Pricing" link="./"/>
                <Link label="Resources" link="./"/>
            </div>
            <div id="signup-links" className={"container"}>
                <Link label="Login" link="./"/>
                <Link label="Sign Up" link="./" classes="signup button"/>
            </div>
        </ul>
        </>
    )
}

function ClassicNav() {
    return (
        <>
            <Title title="Shortly"/>
            <ClassicLinks />
        </>
    )
}

export default function Nav({screenWidth, minWidth}) {
    return (
        <>
        <nav className="container">
            {
                screenWidth <= minWidth ? 
                <Hamburger /> :
                <ClassicNav />
            }
        </nav>
        </>
    )
}