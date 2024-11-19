// data
import { Links } from '../data/links.js';

// media
import arrow from '../icons/white-arrow.svg'

function Work() {

    const workLinks = Links.workLinks

    return (
        <div className="works-container">

            {workLinks.map((item) => (
                <a 
                    key={item.name}
                    href={item.url} 
                    target="_blank"
                    className="work-link"
                >
                    <span>
                        <img
                            src={item.icon}
                            alt={item.name + " icon."}
                            draggable="false"
                        />
                        {item.name}
                    </span>
                    <img
                        className="arrow-icon"
                        src={arrow}
                        alt="arrow icon."
                        draggable="false"
                    />
                </a>
            ))}

        </div>
    );
}

export default Work;