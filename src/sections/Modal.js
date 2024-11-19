import MicroModal from 'react-micro-modal';

import QR from '../media/qr-code.png'

import share from '../icons/black-share.svg'
import download from '../icons/white-download.svg'

function copyLink() {

    const url = window.location.href;
    navigator.clipboard.writeText(url);
    
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