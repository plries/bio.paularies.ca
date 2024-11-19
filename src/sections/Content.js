// components
import Work from '../components/Work'
import Socials from '../components/Socials'

function Content() {
    return (
        <div className="content">
            <div>
                <p>
                    hey there! i’m a detail-oriented developer and designer who loves to create
                    <strong> exciting digital experiences</strong>.
                </p>
                <Work />
            </div>
            <Socials />
        </div>
    )
}

export default Content;