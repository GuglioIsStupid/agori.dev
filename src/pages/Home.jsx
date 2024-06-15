import "../App.css";
import Card from "../components/Card";
import HeroSectionHome from "../components/HeroSectionHome";

import "./Home.css"
import "../components/Card.css"

function Home() {
    return (
        <div className = "home">
            <HeroSectionHome />

            <h1 className='hero-h1'>Current Projects</h1>

            <div className='cards'>
                <div className='cards__container'>
                    <div className="cards__wrapper">
                        <div className="cards__items">
                            <li className="cards__item">
                                <Card src="assets/literally-me.png" text="Rit" label="Game" path="/projects/rit" description="Mania-styled VSRG Rhythm Game" />
                            </li>
                            <li className="cards__item">
                            <Card src="assets/literally-me.png" text="Guys Vs Gods" label="Game" path="/projects/guys-vs-gods" description="Top-Down ARPG" />
                            </li>
                            <li className="cards__item">
                                <Card src="assets/literally-me.png" text="Not Too Bad" label="Comic" path="/projects/not-too-bad" description="A comic series that is the canonical sequel to Guys Vs. Gods, continuing the story a few generations later. You'll follow Kurtis Guy, Charlie Guy, Tori Sargoth and Alice Reeds in an adventure to end a cycle started so long ago." />
                            </li>
                            <li className="cards__item">
                                <Card src="assets/literally-me.png" text="Challenges Of Zandor" label="Game" path="/projects/guys-vs-gods" description="Top-Down ARPG" />
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home