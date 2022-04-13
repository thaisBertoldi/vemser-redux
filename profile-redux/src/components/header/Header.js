import React from "react";
import { connect } from "react-redux";
import { handleLogout } from "../../store/actions/AuthActions";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./Header.styles";
import { Button } from "../../allPages.styles";

function Header({ auth, dispatch }) {
  const navigate = useNavigate();
  const getToken = localStorage.getItem("token");
  return (
    <HeaderContainer>
      <Logo />
      {getToken && (
        <>
          <Menu />
          <Button color={"black"} background={'white'} border={'black'} onClick={() => handleLogout(navigate, dispatch)}>
            Logout
          </Button>
        </>
      )}
    </HeaderContainer>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Header);
