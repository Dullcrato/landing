import './home.scss';
import asset from './assets/1.jpg';
import Header from './Header';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <div
        className="home-container"
        style={{ backgroundImage: `url(${asset})` }} // Using inline style for dynamic image URL
      >
        <div className="home-overlay" />
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default Home;
