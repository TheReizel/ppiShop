import "./Styles.css";
import { useLocation, useNavigate } from 'react-router-dom';
export default function About() {

    const {state} =useLocation();

    const navigate = useNavigate();

    function handleClick() {
        navigate('/', {
    state: `This is the state: ${Math.random()}`,
        });
    }

    return (
        <div>
          <h1>About</h1>
          <p>Agora Que Não Sei Mesmo</p>
          <button onClick={handleClick}>HOME</button>
        </div>
    );
}