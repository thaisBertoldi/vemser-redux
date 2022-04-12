import { apiAuth } from "../../api";

export const handleLogin = async (values, dispatch) => {
    try {
        const { data } = await apiAuth.post('/auth', values);
        localStorage.setItem('token', data)
        console.log(data)
        const logado = {
            type: 'SET_LOGIN',
            token: data,
            auth: true,
        }
        dispatch(logado);
    } catch (error) {
        console.log(error)
    }
}

export const handleLogout = (navigate) => {
    localStorage.removeItem('token')
    const logout = {
        type: 'SET_LOGOUT',
        token: '',
        auth: false,
    }
    navigate('/login')
    return logout
}