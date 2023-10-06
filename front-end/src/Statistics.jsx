function InfoCard({image, title, children}) {
    return (
        <div className="container card">
            <img src={image}></img>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default function Statistics() {
    let brandRecImgSrc = './images/icon-brand-recognition.svg';

    return (
        <>
        <InfoCard image={brandRecImgSrc} title="Brand Recognition">
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
        </InfoCard>
        </>
    )
}