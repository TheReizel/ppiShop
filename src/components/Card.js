import "./Card.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Card({ image, title, description, price, AddToCar }) {
    return (
        <div className="card">
            <img src={image} alt={description} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="card-price">R$ {price.toFixed(2)}</p>
            <button onClick={() => AddToCar(title, price)}><AddShoppingCartIcon/></button>
        </div>

        
        
        
    );

}

