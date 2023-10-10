import BrandRecImgSrc from '../images/icon-brand-recognition.svg';

function InfoCard({image, title, children}) {
    return (
        <>
        <div className="gap"></div>
        <div className="container card stats">
            <div>
                <img className="icon" src={image}></img>
            </div>
            <div className="gap-s"/>
            <h2>{title}</h2>
            {children}
        </div>
        </>
    )
}

export default function Statistics() {
    return (
        <>
        <InfoCard image={BrandRecImgSrc} title="Brand Recognition">
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
        </InfoCard>
        <InfoCard image={BrandRecImgSrc} title="Detailed Records">
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
        </InfoCard>
        <InfoCard image={BrandRecImgSrc} title="Fully Customizable">
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
        </InfoCard>
        <div className="gap"></div>
        </>
    )
}