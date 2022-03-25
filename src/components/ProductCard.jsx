import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const item = props.item;
    const priceAfterDiscount = item.originalPrice - (item.originalPrice * item.discountPercent) /100;
    return <div className="m-2 p-2 border-2 rounded-lg w-64">
    <div className="relative">
    <Link to={item.name}>
     <img src={`images/${item.image}`} className="" alt={item.name}/></Link>
     {item.discountPercent > 0 && (<p className="absolute top-2 left-2 bg-white text-red px-2 py-0.5 rounded-lg text-sm">- {item.discountPercent}%</p>)}</div>
     
     <Link to={item.name}>
     <h3 className="font-semibold">{item.name}</h3>
     </Link>
     <p className="h-14">{item.description}</p>

     <div className="flex place-content-between h-14 items-center">
        <div className="flex flex-col">
        {item.discountPercent > 0 && (
     <p className="text-xs line-through">Rp. {item.originalPrice}</p>)}
        <p className="font-semibold">Rp. {priceAfterDiscount}</p>

        </div>
        <Link to={item.name}>
        <button className="flex-end px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</button>
        </Link>
     </div>

</div>
}

export default ProductCard;