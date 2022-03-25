import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "./ProductCard";
import products from "../Services/data/product";

const Detail = () => {
    const params = useParams();
    const item = products.filter(element => element.name === params.productName);
    return (
        <Layout>
        <ProductCard item={item[0]}/>
        </Layout>
    )
}

export default Detail;