export default function Linker() {
    return (
        <form id="link-form" className="container card">
            <label htmlFor="input" />
            <input type="text" id="input" name="link" placeholder="Shorten a link here..." />
            <button>Shorten It!</button>
        </form>
    )
} 