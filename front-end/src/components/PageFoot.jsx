import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import PinterestIcon from '../images/icon-pinterest.svg';
import InstagramIcon from '../images/icon-instagram.svg';

function LinksList({category, listItems}) {
    let itemList = listItems.map(item => {
        return (
            <li key={`${category}-${item}`}>
                {item}
            </li>
        );
    });

    return (
        <>
        <p>{category}</p>
        <ul>
            {itemList}
        </ul>
        </>
    )
}

function Socials() {
    return (
        <>
        <ul className="container socials">
            <li>
                <a href=""><img src={FacebookIcon} /> </a>
            </li>
            <li>
                <a href=""><img src={TwitterIcon} /> </a>
            </li>
            <li>
                <a href=""><img src={PinterestIcon} /> </a>
            </li>
            <li>
                <a href=""><img src={InstagramIcon} /> </a>
            </li>
        </ul>
        </>
    )
}

export default function PageFoot() {
    return (
        <>
        <footer className="container">
            <h3>Shortly</h3>
            <LinksList category="Features" listItems={["Link Shortening", "Branded Links", "Analytics"]}/>
            <LinksList category="Resources" listItems={["Blog", "Developers", "Support"]}/>
            <LinksList category="Company" listItems={["About", "Our Team", "Careers", "Contact"]}/>
            <Socials />
        </footer>
        </>
    );
}