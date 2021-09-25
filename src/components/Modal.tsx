import React from 'react'

type ModalProps = {
    selectedImg: string;
    setSelectedImg: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({ selectedImg, setSelectedImg }: ModalProps) => {
    
    const handleClick = () => {
        setSelectedImg("");
    }    

    return (
        <div className="backdrop" >
            <img src={selectedImg} onClick={handleClick} alt=""/>
        </div>
    )
}

export default Modal
