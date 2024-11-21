import "./Styles.css";

export default function Home() {

    const {state} =useLocation();
    
    return (
        <div>
          <h1>Home</h1>
          {state ? <p>{state+""}</p> : ""}
          <p>Não Sei</p>
        </div>
    );
}