import { Fragment } from "react/jsx-runtime";
import Main from "./Components/mainPolina";
import Content from "./Components/content";
import Alphabet from "./Components/alpahabet";
import Book from "./Components/books";
import "./App.css";
import Magazine from "./Components/magazine";
import Background from "./Components/background";
import Plakat from "./Components/plakat";
import Logo from "./Components/logo";
import Inpost from "./Components/inpost";
import Art from "./Components/art";
import AboutMe from "./Components/aboutMe";
import Buklet from "./Components/buklet";
import Contact from "./Components/contact";
function App() {
  return (
    <Fragment>
      <Main />
      <Content />
      <AboutMe />
      <Alphabet />
      <Book />
      <Magazine />
      <Buklet />
      <Background />
      <Plakat />
      <Logo />
      <Inpost />
      <Art />
      <Contact />
    </Fragment>
  );
}
export default App;
