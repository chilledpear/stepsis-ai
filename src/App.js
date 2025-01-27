import React from "react";
import "./App.css";

// NAV / LOGO / ICON IMAGES
import logo from "./assets/logo.png";
import dexIcon from "./assets/dex.png";
import telegramIcon from "./assets/telegram.png";
import twitterIcon from "./assets/twitter.png";

// HERO IMAGE
import heroImage from "./assets/hero-stepsis.png";

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

// LAST SECTION BACKGROUND (bg-help.png) if needed
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
              <a href="#about"
                 onClick={(e) => handleSmoothScroll(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a href="#buy-stepsis"
                 onClick={(e) => handleSmoothScroll(e, "buy-stepsis")}
              >
                Buy Stepsis
              </a>
            </li>
            <li>
              <a href="#roadmap"
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
              <span className="hero-line1">YOUR AI</span><br/>
              <span className="hero-line2">StepSister</span>
            </h2>
            {/* Force multiline by narrower width or user line breaks */}
            <p className="hero-description" style={{ maxWidth: "500px" }}>
              Hi there! I’m Stepsis, your AI step sister, here to chat, inspire,
              and make your day better. Let’s explore life together!
            </p>
            <button className="hero-button">Chat With Stepsis</button>
          </div>

          {/* RIGHT: hero image with 3D hover */}
          <div className="hero-image-wrapper basic-3d-hover">
            <img 
              src={heroImage} 
              alt="Stepsis AI" 
              className="hero-image"
            />
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
                <h3>YOUR SMARTEST AI STEPSISTER</h3>
                <p>
                  Stepsis AI isn’t just another memecoin / AI –
                  she’s your fun &amp; smart AI stepsister. Come talk to Stepsis
                  and see what she’s capable of!
                </p>
              </div>

              <div className="about-point">
                <h3>BUY $STEPSIS AI</h3>
                <p>
                  Buy $STEPSIS using a DEX on Solana or any supported chain.
                  Can you trust your StepSister? Possibly—if you dare…
                </p>
              </div>

              <div className="about-point">
                <h3>STEPSIS AI IS A SASSY AGENT</h3>
                <p>
                  Interact with Stepsis AI Chatbot for honest laughs
                  or insights. This is the AI StepSister you never asked for
                  but always needed. Meme-fueled, trash talk included.
                </p>
              </div>

              <div className="about-point">
                <h3>GET STEPSIS AI</h3>
                <p>
                  Step into the future of AI memes. Chat, create, vibe,
                  and let’s shape AI fun. Join, or Sis might cut it off!
                </p>
              </div>
            </div>

            <div className="about-image">
              <img src={about1} alt="Stepsis About 1" />
              <img src={about2} alt="Stepsis About 2" />
              <img src={about3} alt="Stepsis About 3" />
            </div>
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

            {/* Enlarge image by 50% => scale(1.5). 
                This is how it was "three versions ago" in normal size => now 1.5x larger. */}
            <img
              src={buyStepsisImg}
              alt="Buy Stepsis"
              className="buy-stepsis-img"
            />

            <button
              className="contract-button"
              onClick={() => {
                // Replace with your contract link
                window.open("https://your-contract-link.com", "_blank");
              }}
            >
              CONTRACT: 2CgS5_Bpump
            </button>
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION 
          Removed the dashed line. 
          It's just the phases with no line or bullets.
      */}
      <section
        id="roadmap"
        className="roadmap-section"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="container">
          <h2>ROADMAP</h2>
          <div className="roadmap-container">
            {/* PHASE 1 */}
            <div className="phase">
              <img src={phase1Img} alt="Phase 1" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 1</h3>
                <p>
                  Launch $STEPSIS AI token on Solana and begin community building.
                </p>
              </div>
            </div>

            {/* PHASE 2 */}
            <div className="phase">
              <img src={phase2Img} alt="Phase 2" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 2</h3>
                <p>
                  Launch AI-powered meme marketplace for sharing and
                  trading memes.
                </p>
              </div>
            </div>

            {/* PHASE 3 */}
            <div className="phase">
              <img src={phase3Img} alt="Phase 3" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 3</h3>
                <p>
                  Release AI Agent Generator (Beta) for creating custom
                  meme agents.
                </p>
              </div>
            </div>

            {/* PHASE 4 */}
            <div className="phase">
              <img src={phase4Img} alt="Phase 4" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 4</h3>
                <p>
                  Full release of AI tools and expand ecosystem partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION with bgHelp if you want a background: */}
      <section
        className="cta-section"
        style={{
          backgroundImage: `url(${bgHelp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>HELP ME OUT STEP BRO, I'M STUCK IN THE WASHER AGAIN</h2>
          <button className="cta-button">Buy Stepsis</button>
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
