import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export default function DeleteCard({ id, deleteCard }) {
    return (
        <li>
            <div className="Delete-Card-Item">
                <button onClick={() => deleteCard(id)}><RemoveShoppingCartIcon/></button>
            </div>
        </li>
    );
}