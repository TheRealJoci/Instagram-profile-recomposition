import React from 'react'
import UploadForm from './UploadForm'

const Profile = ({name, img, description}) => {
    return (
        <div className="profile">
            <img src="" alt="" />
            <h2 className="name">{name}</h2>
            <UploadForm />
            <p className="description">{description}</p>
        </div>
    )
}

export default Profile
