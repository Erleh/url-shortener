import BrandRecImgSrc from '../images/icon-brand-recognition.svg';
import DetailedImgSrc from '../images/icon-detailed-records.svg';
import CustomizeImgSrc from '../images/icon-fully-customizable.svg';

function InfoCard({image, title, screenWidth, minWidth, children}) {
    return (
        <>
        {
            screenWidth < minWidth ? 
            <div className="gap" /> :
            null
        }
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

export default function Statistics({screenWidth, minWidth}) {
    return (
        <>
        <div className="container stat">
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        {
            screenWidth >= minWidth ?
            <div className="gap" /> :
            null
        }
        <div className="container stat-cards">
            <InfoCard image={BrandRecImgSrc} title="Brand Recognition" screenWidth={screenWidth} minWidth={minWidth}>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
            </InfoCard>
            <InfoCard image={DetailedImgSrc} title="Detailed Records" screenWidth={screenWidth} minWidth={minWidth}>
                <div className="chain-a"/>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions</p>
            </InfoCard>
            <div className="chain-b"/>
            <InfoCard image={CustomizeImgSrc} title="Fully Customizable" screenWidth={screenWidth} minWidth={minWidth}>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </InfoCard>
        </div>
        <div className="gap"></div>
        </>
    )
}