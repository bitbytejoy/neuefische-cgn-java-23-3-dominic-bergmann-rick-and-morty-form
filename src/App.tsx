import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./pages/Greeting";
import RickAndMorty from "./pages/RickAndMorty";
import MainPage from "./pages/MainPage";
import {useState} from "react";
import {initialCharacters} from "./assets/initialCharacters.ts";
import RickAndMortyForm from "./pages/RickAndMortyForm.tsx";

export type Character = {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    episode: string[],
    url: string,
    created: string
}

export default function App(): JSX.Element {

    const [characters, setCharacters] = useState<Character[]>(initialCharacters)

    return (
        <>
            <div className="link">
                <Link to="/">Get back home.</Link>
                <br/>
                <Link to="/greeting">Get a nice and warm greeting if you feel low.</Link>
                <br/>
                <Link to="/rickandmorty">Cut right to the chase and search nerdy cartoon characters!</Link>
                <br/>
                <Link to="/rickandmorty-form">Add new characters</Link>
            </div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/greeting" element={<Greeting/>}/>
                <Route path="/rickandmorty" element={<RickAndMorty characters={characters} setCharacters={characters => setCharacters(characters)}/>}/>
                <Route path={"/rickandmorty-form"} element={<RickAndMortyForm characters={characters} setCharacters={characters => setCharacters(characters)} />}/>
            </Routes>
        </>
    )
}


