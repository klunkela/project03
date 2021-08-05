import React from "react";
import {useState, useEffect} from "react";
import {api} from "../../api/api";
import Preloader from "../Preloader/Preloader";
import {HeroName} from "./HeroName";

function HeroNameContainer() {
    let [isLoading, setIsLoading] = useState(true)
    let [heroName, setHeroName_] = useState("123")
    let setHeroName = (heroName) => {
        setHeroName_(heroName)
        api.setName(heroName)
    }
    useEffect(() => {
        api.getName().then(response => {
            setHeroName_(response.data.name)
            setIsLoading(false)
        })
    }, []);

    return (
        <div>
            {isLoading && <Preloader/>}
            {!isLoading && <HeroName heroName={heroName} setHeroName={setHeroName}/>}
        </div>
    );
}

export default HeroNameContainer;
