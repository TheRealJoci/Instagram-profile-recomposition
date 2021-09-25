import React from 'react'
import UploadForm from './UploadForm'

const Header = () => {
    return (
        <nav>
            <div className="header">
                <h1>Vista</h1>
                <UploadForm />
            </div>
        </nav>
    )
}

export default Header
