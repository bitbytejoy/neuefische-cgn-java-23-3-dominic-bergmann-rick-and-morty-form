import {useState} from "react";
import {Character} from "../App.tsx";

type Props = {
    characters: Character[],
    setCharacters: (character: Character[]) => void
}

export default function RickAndMortyForm(props: Props) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();

            const newCharacters = props.characters.map(x => x);
            newCharacters.push({
                id: 1,
                name,
                image: '',
                status,
                species,
                type: '',
                gender: '',
                origin: {
                    name: '',
                    url: ''
                },
                location: {
                    name: '',
                    url: ''
                },
                episode: [],
                url: '',
                created: ''
            });

            props.setCharacters(newCharacters);
        }}>
            <label>Name</label>
            <input value={name} onChange={e => setName(e.target.value)}/>

            <label>Status</label>
            <input value={status} onChange={e => setStatus(e.target.value)}/>

            <label>Species</label>
            <input value={species} onChange={e => setSpecies(e.target.value)}/>

            <button>Submit</button>
        </form>
    );
}
