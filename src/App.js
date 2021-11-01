import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import Contact from "./pages/Contact";
import { Home } from "./pages/Home";
import ListBook from "./pages/ListBook";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/books" exact>
            <Home />
        </Route>
        <Route path="/books/all-book">
            <ListBook />
        </Route>
        <Route path="/books/item/:id">
            <BookDetail/>
        </Route>
        <Route path="/books/about-us">
            <About />
        </Route>
        <Route path="/books/contact">
            <Contact />
        </Route>
        <Route path="/books/privacy-policy">
            <PrivacyPolicy />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
