import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaKitchenSet } from "react-icons/fa6";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav>
      <FaKitchenSet />
        <Logo to={'/'}>RecipePortal</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family: 'Lobster Two', cursive;`

const Nav = styled.div`
padding:2rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;

svg{
  font-size:2rem;
}`

export default App;
