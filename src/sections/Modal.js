import MicroModal from 'react-micro-modal'

// media
import QR from '../media/qr-code.png'
import share from '../icons/black-share.svg'
import download from '../icons/white-download.svg'

function copyLink() {

    // get current url
    const url = window.location.href
    // write it to clipboard
    navigator.clipboard.writeText(url)

    // update button to show "copied!"
    const button = document.querySelector('.white')
    button.innerHTML = 'copied!'

}

function Modal() {
    return (
        <MicroModal
            overrides={{
                Dialog: {
                    style: {
                        background: 'none',
                        padding: 0,
                    }
                }
            }}

            trigger={(open) =>
                <button
                    className="share-btn"
                    onClick={open}
                >
                    <img
                        src={share}
                        alt="share icon."
                        draggable="false"
                    >

                    </img>
                </button>

            }>
            {(close) =>
                <div
                    className="modal-container"
                >
                    <div
                        className="qr-container"
                    >
                        <img
                            src={QR}
                            draggable="false"
                        >
                        </img>
                    </div>
                    <div
                        className="btn-container"
                    >
                        <a
                            href={QR}
                            download="paul-aries-qr-code.png"
                            className="download-btn"
                        >
                            <img
                                src={download}
                                draggable="false"
                            >
                            </img>
                        </a>
                        <div>
                            <button
                                className="btn black"
                                onClick={close}
                            >
                                close
                            </button>
                            <button
                                className="btn white"
                                onClick={copyLink}
                            >
                                share
                            </button>
                        </div>
                    </div>
                </div>
            }
        </MicroModal>
    )
}

export default Modal;