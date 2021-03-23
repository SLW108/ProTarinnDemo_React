import man from './man.svg'
import woman from './woman.svg'

import ProfileAvatar from './Avatar/Avatar'



const Header = ({user, logOut}) =>{
    return(
        <header className='App-header'>
            <nav className='navbar navbar-dar bg-dark'>
                <a className='navbar-brand' href='#'>
                    <img
                        src = {man}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                        alt=''
                    />
                     <img
                        src = {woman}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                        alt=''
                    />
                </a>
                {user ? <button className='btn btn-secondary float-end' onClick={logOut} >LogOut</button> : ''}
                {user ? <ProfileAvatar name={user.username}/> : ''}
            </nav>
        </header>
    )
}

export default Header 