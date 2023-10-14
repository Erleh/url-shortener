import CallToSvg from '../images/illustration-working.svg';

export default function CallTo() {
    return (
        <div className="container call-to">
            <img src={CallToSvg} alt="working illustration" />
            <div className="content">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <a href="">Get Started</a>
            </div>
        </div>
    )
}