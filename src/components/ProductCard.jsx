import CurrencyFormat from 'react-currency-format';
const ProductCard = (props) => {
    const item = props.item;
    const priceAfterDiscount = item.originalPrice - (item.originalPrice * item.discountPercent) /100;
    return <div className="m-2 p-2 border-2 rounded-lg w-64">
    <div className="relative">
     <img src={`images/${props.item.image}`} className="" alt={props.item.name}/>
     {props.item.discountPercent > 0 && (<p className="absolute top-2 left-2 bg-white text-red px-2 py-0.5 rounded-lg text-sm">- {item.discountPercent}%</p>)}</div>
     <h3 className="font-semibold">{props.item.name}</h3>
     <p className="h-16">{props.item.description}</p>   

     <div className="flex place-content-between h-16 items-center">
        <div className="flex flex-col">
        {props.item.discountPercent > 0 && (
     <p className="text-xs line-through">Rp. {props.item.originalPrice}</p>)}
        <p className="font-semibold">Rp. {priceAfterDiscount}</p>

        </div>
     
        <button className="flex-end px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</button>
     </div>

</div>
}

export default ProductCard;