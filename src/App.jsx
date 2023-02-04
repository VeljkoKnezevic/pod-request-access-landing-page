import "./styles/styles.css";
import Logo from "./assets/desktop/logo.svg";
import Spotify from "./assets/desktop/spotify.svg";
import Apple from "./assets/desktop/apple-podcast.svg";
import Google from "./assets/desktop/google-podcasts.svg";
import Pocket from "./assets/desktop/pocket-casts.svg";
import Dots from "./assets/desktop/bg-pattern-dots.svg";
import { useState } from "react";

const Form = ({ handleFormSubmit, email, setEmail, error }) => {
  return (
    <>
      <form onSubmit={handleFormSubmit} className="content__form">
        <input
          className="content__form__input"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button className="content__form__button" type="submit">
          Request Access
        </button>
      </form>
      <div className="error">{error}</div>
    </>
  );
};

function App() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(regex)) {
      e.preventDefault();
      setError("Oops! Please check your email");
    }
  };

  return (
    <>
      <header className="header">
        <img src={Logo} className="header__logo" alt="Pod logo" />
      </header>
      <main>
        <section className="content">
          <h1 className="content__heading">
            <span className="content__heading--green">
              Publish your podcasts
            </span>{" "}
            everywhere.
          </h1>
          <p className="content__para">
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </p>
          <Form
            handleFormSubmit={handleFormSubmit}
            email={email}
            setEmail={setEmail}
            error={error}
          />
          <div className="content__sponsors">
            <img
              className="content__sponsors__img spotify"
              src={Spotify}
              alt="Spotify logo"
            />
            <img
              className="content__sponsors__img apple"
              src={Apple}
              alt="Apple Podcast logo"
            />
            <img
              className="content__sponsors__img google"
              src={Google}
              alt="Google Podcasts"
            />
            <img
              className="content__sponsors__img pocket"
              src={Pocket}
              alt="Pocket Casts"
            />
          </div>
        </section>
        <img className="dots" src={Dots} alt="" />
      </main>
    </>
  );
}

export default App;
