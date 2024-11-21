import "./TvShow.css";

export default function TvShow({ id, name, deleteTvShow }) {
    return (
        <li>
            <div className="tvshow-item">
                <p>{name}</p>
                <button onClick={() => deleteTvShow(id)}>APAGAR</button>
            </div>
        </li>
    );
}