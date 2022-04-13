import { apiAuth } from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
    try {
        const { data } = await apiAuth.post('/auth', values);
        localStorage.setItem('token', data)
        const logado = {
            type: 'SET_LOGIN',
            token: data,
            auth: true,
        }
        dispatch(logado);
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const handleLogout = (navigate, dispatch) => {
    localStorage.removeItem('token')
    const logout = {
        type: 'SET_LOGOUT',
        token: '',
        auth: false,
    }
    dispatch(logout)
    navigate('/login')
}