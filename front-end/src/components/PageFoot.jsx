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

export default function PageFoot() {
    return (
        <>
        <footer className="container">
            <h3>Shortly</h3>
            <LinksList category="Features" listItems={["Link Shortening", "Branded Links", "Analytics"]}/>
            <LinksList category="Resources" listItems={["Blog", "Developers", "Support"]}/>
            <LinksList category="Company" listItems={["About", "Our Team", "Careers", "Contact"]}/>
        </footer>
        </>
    );
}