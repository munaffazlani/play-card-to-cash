import React from 'react'
import Logout from "@app/components/logout";
import './header.scss'

function Header() {
    return (
        <div className='header'>
            <Logout>
                <button>log out</button>
            </Logout>
        </div>
    )
}

export default Header
