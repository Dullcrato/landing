import './hero.scss';

function Hero() {
  return (
    <>
      <HeroSlogan />
      <div className="hero-section">
        <h1>ENDFIELD</h1>
        {/* Uncomment to use the second heading */}
        {/* <h6 className="hero-tagline">RAMBLER</h6> */}
      </div>
    </>
  )
}

export default Hero

const HeroSlogan = () => (
  <div className="hero-container">
    <h2>Conquering the epic journey.</h2>
    <h2>Any project in mind? Get in touch.</h2>
  </div>
)
