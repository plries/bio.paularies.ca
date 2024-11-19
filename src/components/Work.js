import { Links } from '../data/links.js';

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
                        />
                        {item.name}
                    </span>
                    <img
                        className="arrow-icon"
                        src={arrow}
                        alt="arrow icon."
                    />
                </a>
            ))}

        </div>
    );
}

export default Work;