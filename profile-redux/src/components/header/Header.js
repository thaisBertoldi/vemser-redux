import React from 'react'
import { connect } from 'react-redux'
import {handleLogout} from '../../store/actions/AuthActions'
import {useNavigate} from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    return (
    <header>
        <button onClick={() => handleLogout(navigate)}>Logout</button>
    </header>
  )
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Header)