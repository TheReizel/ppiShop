import { useState } from "react";
import "./TvShowList.css";
import TvShow from "./TvShow";

export default function TvShowList() {

    const [nameInput, setNameInput] = useState("");
    // let nameInput = "Rainhas das lágrimas";

    const [tvShows, setTvShows] = useState([
        { id: 1, name: "La casa de papel" },
        { id: 2, name: "Peaky Blinders" },
        { id: 3, name: "Riverdale" }
    ]);
    // let tvShows = [
    //     { id: 1, name: "La casa de papel" }, 
    //     { id: 2, name: "Peaky Blinders" }, 
    //     { id: 3, name: "Riverdale" }
    // ];

    function handleAddTvShow(name) {
        // tvShows.push({ id: Date.now(), name: name });
        setTvShows([...tvShows, { id: Date.now(), name: name }]);
        setNameInput("");
    }

    function deleteTvShow(id) {
        const newList = tvShows.filter((tvShow) => tvShow.id !== id);
        setTvShows(newList);
    }
    

    return (
        <div>
            <h1>Minhas séries favoritas!</h1>
            <div>
                <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    required
                />
                <button onClick={() => handleAddTvShow(nameInput)}>Adicionar</button>
            </div>
            <div className="tvshows-list">
                <ul>
                    {tvShows.map((obj) => (
                        <TvShow {...obj} deleteTvShow={deleteTvShow}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}