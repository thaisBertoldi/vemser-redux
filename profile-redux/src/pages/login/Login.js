import React from 'react'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import {handleLogin} from '../../store/actions/AuthActions'

function Login({auth, dispatch}) {
  const formik = useFormik({
    initialValues: {
      usuario: '',
      senha: '',
    },
    onSubmit: values => {
      handleLogin(values, dispatch);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="usuario">Usuario</label>
      <input
        id="usuario"
        name="usuario"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.usuario}
      />
      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        name="senha"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.senha}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Login)