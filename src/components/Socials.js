// data
import { Links } from '../data/links.js';

function Socials() {

    const socialLinks = Links.socialLinks

    return (
        <div>
            <h2> let's connect! </h2>
            <div className="socials-container">

                {socialLinks.map((item) => (
                    <a 
                        key={item.name}
                        target="_blank" className="btn black"
                        href={item.url}
                    >
                        <img
                            src={item.icon}
                            alt={item.name + " icon."}
                            draggable="false"
                        >
                        </img>
                        {item.name}
                    </a>
                ))}

            </div>
        </div>
    )
}

export default Socials;