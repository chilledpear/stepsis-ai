import React from "react";
import "./App.css";

// NAV / LOGO / ICON IMAGES
import logo from "./assets/logo.png";
import dexIcon from "./assets/dex.png";
import telegramIcon from "./assets/telegram.png";
import twitterIcon from "./assets/twitter.png";

// HERO VIDEO (replaces old heroImage import)
import heroVideo from "./assets/hero-stepsis.mp4";

// TICKER IMAGES
import ticker1 from "./assets/ticker1.png";
import ticker2 from "./assets/ticker2.png";
import ticker3 from "./assets/ticker3.png";
import ticker4 from "./assets/ticker4.png";
import ticker5 from "./assets/ticker5.png";
import ticker6 from "./assets/ticker6.png";
import ticker7 from "./assets/ticker7.png";
import ticker8 from "./assets/ticker8.png";
import ticker9 from "./assets/ticker9.png";
import ticker10 from "./assets/ticker10.png";

// ABOUT IMAGES
import about1 from "./assets/about1.png";
import about2 from "./assets/about2.png";
import about3 from "./assets/about3.png"; // optional foreground in about

// BUY STEPSIS IMAGE
import buyStepsisImg from "./assets/buy-stepsis.png";

// ROADMAP IMAGES
import phase1Img from "./assets/phase1.png";
import phase2Img from "./assets/phase2.png";
import phase3Img from "./assets/phase3.png";
import phase4Img from "./assets/phase4.png";

// LAST SECTION BACKGROUND
import bgHelp from "./assets/bg-help.png";

function App() {
  // Smooth scrolling function so you can re-click anchors
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner container">
          {/* Left: LOGO */}
          <div className="navbar-left">
            <img className="site-logo" src={logo} alt="Stepsis AI Logo" />
          </div>

          {/* Center: LINKS */}
          <ul className="navbar-links">
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#buy-stepsis"
                onClick={(e) => handleSmoothScroll(e, "buy-stepsis")}
              >
                Buy Stepsis
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                onClick={(e) => handleSmoothScroll(e, "roadmap")}
              >
                Roadmap
              </a>
            </li>
          </ul>

          {/* Right: SOCIAL ICONS */}
          <div className="navbar-social">
            <a href="https://dexscreener.com/" target="_blank" rel="noreferrer">
              <img src={dexIcon} alt="Dex Screener" className="social-icon" />
            </a>
            <a href="https://telegram.org/" target="_blank" rel="noreferrer">
              <img src={telegramIcon} alt="Telegram" className="social-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="container hero-inner">
          {/* LEFT: TEXT */}
          <div className="hero-content">
            <h2 className="hero-headline">
              <span className="hero-line1">Your AI</span>
              <br />
              <span className="hero-line2">StepSister</span>
            </h2>
            <p className="hero-description" style={{ maxWidth: "500px" }}>
              Hi! I’m Sophie, your AI step sister. If you keep staring at me like
              that, I might start blushing
            </p>
            {/* Placeholder link to Google */}
            <button
              className="hero-button"
              onClick={() => window.open("https://google.com", "_blank")}
            >
              Chat With Stepsis
            </button>
          </div>

          {/* RIGHT: hero VIDEO with 3D hover if you want */}
          <div className="hero-video-wrapper basic-3d-hover">
            <video className="hero-video" autoPlay loop muted playsInline>
              <source src={heroVideo} type="video/mp4" />
              {/* fallback if mp4 not supported */}
              Sorry, your browser doesn’t support embedded videos.
            </video>
          </div>
        </div>
      </header>

      {/* MARQUEE SECTION */}
      <div className="marquee-container">
        <div className="marquee-track">
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker1} alt="ticker1" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker2} alt="ticker2" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker3} alt="ticker3" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker4} alt="ticker4" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker5} alt="ticker5" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker6} alt="ticker6" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker7} alt="ticker7" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker8} alt="ticker8" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker9} alt="ticker9" />
          </div>
          <div className="marquee-item">
            <span>$STEPSIS</span>
            <img src={ticker10} alt="ticker10" />
          </div>
        </div>
      </div>

      {/* ABOUT STEPSIS SECTION */}
      <section
        id="about"
        className="about-section"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="about-content container">
          <h2>ABOUT STEPSIS</h2>
          <div className="about-details">
            <div className="about-text">
              <div className="about-point">
                <h3>The Queen of "Accidents"</h3>
                <p>
                  Oops, did I just spill something? Guess I’ll need your help
                  cleaning it up. Funny how these little "mishaps"...
                </p>
              </div>
              <div className="about-point">
                <h3>The Creative Soul</h3>
                <p>
                  I’m a total artsy type—painting, writing, or playing guitar...
                </p>
              </div>
              <div className="about-point">
                <h3>The Confidante</h3>
                <p>
                  You can talk to me about anything. Bad day? I’ll listen...
                </p>
              </div>
              <div className="about-point">
                <h3>The Morning After Expert</h3>
                <p>
                  Good morning, sleepyhead. You were out cold last night...
                </p>
              </div>
            </div>

            <div className="about-image">
              <img src={about1} alt="Stepsis About 1" />
              <img src={about2} alt="Stepsis About 2" />
              <img src={about3} alt="Stepsis About 3" />
            </div>
          </div>

          {/* Example "Telegram" Button -> Google placeholder */}
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <button
              className="hero-button"
              onClick={() => window.open("https://google.com", "_blank")}
            >
              Chat with me in Telegram
            </button>
          </div>
        </div>
      </section>

      {/* BUY STEPSIS SECTION */}
      <section
        id="buy-stepsis"
        className="buy-stepsis-section"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="container">
          <h2>BUY STEPSIS</h2>
          <div className="buy-wrapper">
            <div className="fair-launch-box">FAIR LAUNCHED ON PUMPFUN</div>
            {/* Enlarged image (scale 1.5 in CSS) */}
            <img
              src={buyStepsisImg}
              alt="Buy Stepsis"
              className="buy-stepsis-img"
            />

            {/* Contract button -> Google placeholder */}
            <button
              className="contract-button"
              onClick={() => window.open("https://google.com", "_blank")}
            >
              CONTRACT: coming soon
            </button>
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section
        id="roadmap"
        className="roadmap-section"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="container">
          <h2>ROADMAP</h2>
          <div className="roadmap-container">
            <div className="phase">
              <img src={phase1Img} alt="Phase 1" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 1: Oops, I Launched a Coin!</h3>
                <p>
                  Token Launch: Stepsis AI memecoin goes live! Fair launch...
                </p>
              </div>
            </div>

            <div className="phase">
              <img src={phase2Img} alt="Phase 2" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 2: Stepbro, I’m Stuck in the Charts!</h3>
                <p>
                  CEX Listings: We’re getting Stepsis AI on coingecko...
                </p>
              </div>
            </div>

            <div className="phase">
              <img src={phase3Img} alt="Phase 3" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 3: Stepbro, We’re Going Viral!</h3>
                <p>
                  Merch Madness: Launching the official Stepsis AI merch line...
                </p>
              </div>
            </div>

            <div className="phase">
              <img src={phase4Img} alt="Phase 4" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 4: Stepbro, We’re Mooning!</h3>
                <p>
                  Mainstream Adoption: Stepsis AI becomes a household name...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (bgHelp) */}
      <section
        className="cta-section"
        style={{
          backgroundImage: `url(${bgHelp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>HELP ME OUT STEP BRO, I'M STUCK AGAIN</h2>
          {/* Button -> Google placeholder link */}
          <button
            className="cta-button"
            onClick={() => window.open("https://google.com", "_blank")}
          >
            Buy Stepsis
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>Copyright 2025 © $STEPSIS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
