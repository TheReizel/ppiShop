import './CardList.css';
import React, { useState } from "react";
import Card from "./Card";
import imgRE4 from "../images/re4.webp";
import imgRDR from "../images/Red Dead.jpg";
import imgDBZ from "../images/DBZ.webp";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


function CardList() {
    const [car, setCar] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


   
    function AddToCar(title, price) {
        setCar([...car, { title, price }]);
        setTotalPrice(totalPrice + price);
    }


   
    function removeCar(title) {
        const itemToRemove = car[title];
        setCar(car.filter((_, i) => i !== title));
        setTotalPrice(totalPrice - itemToRemove.price);
    }


    return (
        <div className="app">
            <h1>Loja de Produtos</h1>


            <div className="cards-section">
                <Card
                    image={imgRE4}
                    title="RESIDENT EVIL 4 REMAKE"
                    description="RESIDENT EVIL 4 REMAKE - VERSÃO PS5"
                    price={199.00}
                    AddToCar={AddToCar}
                    id={1}
                />
                <Card
                    image={imgRDR}
                    title="RED DEAD REDEMPTION II"
                    description="RED DEAD REDEMPTION - VERSÃO PS5"
                    price={180.00}
                    AddToCar={AddToCar}
                    id={2}
                />
                <Card
                    image={imgDBZ}
                    title="DRAGON BALL Z KAKAROT"
                    description="DRAGON BALL Z KAKAROT"
                    price={200.00}
                    AddToCar={AddToCar}
                    id={3}
                />
            </div>


            <div className="car">
                <h2>Lista de Compras <ShoppingCartIcon/></h2>
                <ul>
                    {car.map((item, title) => (
                        <ul>
                            {item.title} - R${item.price.toFixed(2)}
                            <button onClick={() => removeCar(title)}>
                                <RemoveShoppingCartIcon/>
                            </button>
                        </ul>
                    ))}
                </ul>
                <h3>Total: R${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}


export default CardList;





