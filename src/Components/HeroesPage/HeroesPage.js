import React, {useEffect} from "react";
import {heroesAPI} from "../../api/api";
import {useState} from "react";
import Preloader from "../Preloader/Preloader";

function Hero(props) {
    return <div>
        {props.id}
        {props.agility}
    </div>
}

let HeroesPage = (props) => {
    let [heroes, setHeroes] = useState({})
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        heroesAPI.getHeroes().then(response => {
            setHeroes(response.data)
            setIsLoading(false)
        })
    }, []);

    return <div>
        Choose your hero!
        {!isLoading && heroes.map(e => <Hero key={e.id} {...e}/>)}
        {isLoading && <Preloader/>}
    </div>

}

export default HeroesPage;