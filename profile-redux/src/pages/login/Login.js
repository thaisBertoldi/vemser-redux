import React from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { handleLogin } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { ContainerForm, ContainerLogin, DivForm, LoginForm } from "./Login.styles";
import { Button } from "../../allPages.styles";

function Login({ auth, dispatch }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      usuario: "",
      senha: "",
    },
    onSubmit: (values) => {
      handleLogin(values, dispatch, navigate);
    },
  });
  return (
    <ContainerLogin>
      <ContainerForm>
        <form onSubmit={formik.handleSubmit}>
          <DivForm>
            <label htmlFor="usuario">Usuario</label>
            <LoginForm
              id="usuario"
              name="usuario"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.usuario}
            />
          </DivForm>

          <DivForm>
            <label htmlFor="senha">Senha</label>
            <LoginForm
              id="senha"
              name="senha"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.senha}
            />
          </DivForm>

          <div>
            <Button
              color={"white"}
              background={"blue"}
              border={"blue"}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </ContainerForm>
    </ContainerLogin>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Login);
