// sections
import Modal from '../sections/Modal';

// components
import Button from '../components/Button';

// media
import paul from '../media/paul.jpg'
import star from '../icons/white-star.svg'
import target from '../icons/white-target.svg'


function Card() {
    return (
        <div className="profile-card">
            <img
                src={paul}
                alt="headshot of paul aries."
                draggable="false"
            />
            <h1>paul aries</h1>
            <div className="btn-container">
                <Button
                    color="btn green"
                    icon={star}
                    text="front-end developer"
                    alt={"star icon."}
                />
                <Button
                    color="btn blue"
                    icon={target}
                    text="ux/ui designer"
                    alt={"target icon."}
                />
            </div>
            <Modal />
        </div>
    );
}

export default Card;