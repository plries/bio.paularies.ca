import paul from '../media/paul.jpg'

import star from '../icons/white-star.svg'
import target from '../icons/white-target.svg'
import share from '../icons/black-share.svg'

import Button from '../components/Button';

function Card() {
    return (
        <div className="profile-card">
            <img src={paul} alt="headshot of paul aries." />
            <h1>paul aries</h1>
            <div className="buttons-container">
                <Button
                    color="btn green"
                    icon={star}
                    text="front-end developer"
                />
                <Button
                    color="btn blue"
                    icon={target}
                    text="ux/ui designer"
                />
            </div>
            <button
                className="share-button"
            >
                <img
                    src={share}
                >
                </img>
            </button>
        </div>
    );
}

export default Card;