import products from "../Services/data/product";
import ProductCard from "./ProductCard";
import Layout from "./Layout";

const Home = () => {
    return (
        <Layout>
        <div className="flex basis-1/2">

        <div className="basis-1/4">
        <h2 className="text-lg font-medium mb-3 mt-3">Categories</h2>

          <div className="flex justify-between mb-1">
            <label>Bolu</label>
            <label className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">320</label>
          </div>

          <div className="flex justify-between mb-1">
            <label>Mie</label>
            <label className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">112</label>
          </div>

          <div className="flex justify-between mb-1">
            <label>Pizza</label>
            <label className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">32</label>
          </div>

          <div className="flex justify-between mb-1">
            <label>Dessert</label>
            <label className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">48</label>
          </div>

          <div className="pt-5">
          <h2 className="flex text-lg font-medium mb-3">Order By</h2>
          <div>
          <input className="mr-2 accent-green-600" type="checkbox" value="Termurah" name="Termurah"/>
          <label for="Termurah">Termurah</label>
          </div>
          <div>
          <input className="mr-2 accent-green-600" type="checkbox" value="Terlaris" name="Terlaris"/>
          <label for="Terlaris">Terlaris</label>
          </div>
          <div>
          <input className="mr-2 accent-green-600" type="checkbox" value="Termahal" name="Termahal"/>
          <label for="Termahal">Termahal</label>
          </div>
      </div>

      <div className="pt-5">
        <h2 className="text-lg font-medium mb-3">Rating</h2>
          <div className="flex mb-2">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang5"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
        </div>
        <div className="flex mb-2">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang4"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
        </div>
        <div className="flex mb-2">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang3"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
        </div>
        <div className="flex mb-2">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang2"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
        </div>
        <div className="flex">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang1"/>
            <img src="./images/star.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
            <img src="./images/starno.png" alt="star"/>
        </div>
      </div>

      <div className="pt-5">
        <h2 className="text-lg font-medium mb-3">Price</h2>
        <div className="mb-2">
        <input type="range" className="w-full h-3 rounded outline-none"/>
        </div>
        <div className="flex gap-6 mb-5">
        <input type="text" placeholder="Min" className="w-24 border border-gray-300 rounded-md pl-2 py-2"/>
        <input type="text" placeholder="Max" className="w-24 border border-gray-300 rounded-md pl-2 py-2"/>
        </div>
        <div className="flex gap-5">
        <label className="px-3 py-2 bg-orange-600 text-white rounded-lg text-sm">Submit</label>
        <label className="px-3 py-2 bg-emerald-500 text-black rounded-lg text-sm">Reset</label>
        </div>
      </div>
      </div>

    
          

    <div className="flex flex-wrap p-10 w-3/4">

      {products.map((item, index) => {
        const priceAfterDiscount = item.originalPrice - (item.originalPrice * item.discountPercent) /100;
        return <ProductCard item={item} />
      })}

    </div>

  </div>
  </Layout>

    )
}

export default Home;