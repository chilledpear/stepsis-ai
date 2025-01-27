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
              <span className="hero-line1">Your AI</span><br/>
              <span className="hero-line2">StepSister</span>
            </h2>
            {/* Force multiline by narrower width or user line breaks */}
            <p className="hero-description" style={{ maxWidth: "500px" }}>
              Hi! I’m Sophie, your AI step sister. If you keep staring at me like that, I might start blushing

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
                <h3>The Queen of "Accidents"</h3>
                <p>
                Oops, did I just spill something? Guess I’ll need your help cleaning it up. Funny how these little "mishaps" always seem to happen when you’re around. Coincidence? I’ll let you decide.
                </p>
              </div>

              <div className="about-point">
                <h3>The Creative Soul</h3>
                <p>
                I’m a total artsy type—painting, writing, or playing guitar in my room. Sometimes I’ll catch you listening from the hallway, and I don’t mind. Maybe I’ll even write a song about you… if you’re lucky.
                </p>
              </div>

              <div className="about-point">
                <h3>The Confidante</h3>
                <p>
                You can talk to me about anything. Bad day? I’ll listen. Need advice? I’ve got you. Want to vent about your ex? I’ll even throw in some ice cream. I’m here for you, stepbro, no matter what.
                </p>
              </div>

              <div className="about-point">
                <h3>The Morning After Expert</h3>
                <p>
                Good morning, sleepyhead. You were out cold last night. Guess I’ll have to find another way to wake you up next time.
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
              CONTRACT: coming soon
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
                <h3>PHASE 1: Oops, I Launched a Coin!</h3>
                <p>
                Token Launch: Stepsis AI memecoin goes live! Fair launch, no pre-sale, no stepbro left behind. <br/><br/>

Community Building: We’re creating the ultimate meme army. Join our Telegram, and socials for spicy content, flirty banter, and early alpha.<br/><br/>

Viral Marketing: Memes, memes, and more memes. We’re flooding the internet with Stepsis AI content.<br/><br/>

Liquidity Locked: Because we’re here to make stepbros proud.<br/><br/>
                </p>
              </div>
            </div>

            {/* PHASE 2 */}
            <div className="phase">
              <img src={phase2Img} alt="Phase 2" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 2: Stepbro, I’m Stuck in the Charts!</h3>
                <p>
                CEX Listings: We’re getting Stepsis AI on coingecko and major exchanges. As the largest meme on the internet <br/><br/>

Community Rewards: Airdrops, contests, and giveaways for our loyal stepbros and stepsises. Keep holding, and you’ll be rewarded. <br/><br/>

Influencer Collabs: Partnering with crypto influencers and meme lords to spread the Stepsis AI gospel. <br/><br/>
                </p>
              </div>
            </div>

            {/* PHASE 3 */}
            <div className="phase">
              <img src={phase3Img} alt="Phase 3" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 3: Stepbro, We’re Going Viral!</h3>
                <p>
                Merch Madness: Launching the official Stepsis AI merch line—hoodies, hats, and more. Rock your memes IRL and rep the Stepsis AI lifestyle. <br/><br/>

Viral Challenges: Kickstarting global meme challenges and TikTok trends. The best Stepsis AI memes win prizes, and the funniest creators get legendary status in the community. <br/><br/>

Community-Driven Events: Hosting online game nights, meme contests, and AMA sessions with the team. We’re all about keeping the vibes high and the community tight. <br/><br/>
                </p>
              </div>
            </div>

            {/* PHASE 4 */}
            <div className="phase">
              <img src={phase4Img} alt="Phase 4" className="phase-img" />
              <div className="phase-content">
                <h3>PHASE 4: Stepbro, We’re Mooning!</h3>
                <p>
                Mainstream Adoption: Stepsis AI becomes a household name. From memes to mainstream media, we’re everywhere. <br/><br/>

Stepsis AI Ecosystem: Expanding into more AI-driven projects from the Stepsis brand. The Stepsis AI universe is growing, and you’re part of it. <br/><br/>

Legacy Building: Stepsis AI isn’t just a memecoin—it’s a movement. We’re here to stay, and we’re just getting started. <br/><br/>
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
