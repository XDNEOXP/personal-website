import React from 'react';
import { 
    TiSocialFacebook,
    TiSocialTwitter
} from 'react-icons/ti';
import './Icons.css'

const list ={
    Facebook : TiSocialFacebook,
    Twitter : TiSocialTwitter,
}

const Icons = ({ name="TiSocialFacebook" }) => {
    const Icon = list[name]

    return (
        <span className="Icons">
            <Icon />
        </span>
    )
}

export default Icons 