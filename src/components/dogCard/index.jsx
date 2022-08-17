import "./style.css"
import Modal from 'react-modal'
import { useState } from "react"

Modal.setAppElement('#root')

function DogCard (props) {

    const img = props.img

    const [modalOpen, setModalOpen] = useState(false)

    return(
        <div className="divImgDog">
            <img
                className="imgDog"
                height={120}
                alt='Dog'
                src={img}
                onClick={() => setModalOpen(true)}/>
            <Modal isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={
                {
                    overlay: {
                        backgroundColor: 'grey'
                    },
                    content: {
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        right: '40px',
                        bottom: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }
                }
            }
            >
                <img height={400} src={img} alt="" />
            </Modal>
        </div>
    )
}

export default DogCard