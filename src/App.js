import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experiencesData from "./data"

function App() {
  const dataElements = experiencesData.map(data => {
    return (
      <Card 
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {dataElements}
      </section>
    </div>
  );
}

export default App;
