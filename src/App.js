import './App.css';
import Menu from './components/Menu';
import products from './Services/data/product';

function App() {
  return (
    <div className="bg-white container mx-auto">
      <div className="flex justify-between p-5 border-b border-blue-200">
        <div className="flex gap-3">
          <a href="https://google.com" className="text-emerald-500">Chat With Us</a>
          <a href="https://google.com">+62822 4568 1252</a>
          <a href="https://google.com">zain@gmail.com</a>
        </div>

        <div className="">
          <ul className="flex gap-8 text-emerald-500">
            <li>Blog</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <h1 className="text-2xl font-bold">TokoKita</h1>
        <div className="flex w-full justify-center items-center">
        <input type="text" placeholder="Search Products, Categories" className="w-1/3 border border-gray-300 rounded-md pl-2 py-2"/>
        <img src="./images/search.png" alt="search" className="w-4 h-4 -ml-8" />
      </div>
        
      <div className="flex gap-8">
          <img src="./images/user.png" alt="user" className="w-6 h-6"/>
          <div className="relative">
            <img src="./images/basket.png" alt="basket" className="w-9"/>
            <label className="absolute top-3 -left-2 bg-orange-600 text-white px-2 py-0.5 rounded-full text-sm">4</label>
          </div>
        </div>
      </div>

{/* MENU */}
      <div className="bg-gray-100 py-4 pl-4 mt-4 text-lg  mt-4 font-medium">
        <ul className="flex gap-10">
          <Menu title="Bakery"/>
          <Menu title="Fruit and vegetables"/>
          <Menu title="Meat and fish"/>
          <Menu title="Drinks"/>
          <Menu title="Kitchen"/>
          <Menu title="Special nutrition"/>
          <Menu title="Baby"/>
          <Menu title="Pharmacy"/>
        </ul>
      </div>

{/* NAV BAR */}

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

    
          
{/* LIST PRODUCT */}

    <div className="flex flex-wrap p-10 w-3/4">

      {products.map((item, index) => {
        const priceAfterDiscount = item.originalPrice - (item.originalPrice * item.discountPercent) /100;
        return (
          <div className="m-2 p-2 border-2 rounded-lg w-64">
            {item.discountPercent > 0 && (
          <p className="absolute top-2 left-2 bg-white text-red px-2 py-0.5 rounded-lg text-sm">- {item.discountPercent}%</p>)}
          <div className="relative">
          <img src={`images/${item.image}`} className="" alt={item.name}/>
          {item.discountPercent > 0 && (<p className="absolute top-2 left-2 bg-white text-red px-2 py-0.5 rounded-lg text-sm">- {item.discountPercent}%</p>)}</div>
          <h3 className="font-semibold">{item.name}</h3>
          <p>{item.description}</p>
          {item.discountPercent > 0 && (
          <p className="text-xs line-through">Rp. {item.originalPrice}</p>)}
          <div className="flex flex-wrap justify-between">
          <p className="font-semibold">Rp. {priceAfterDiscount}</p>
          <button className="flex-end px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</button>
          </div>
          </div>
        )
      })}

    </div>

  </div>


{/* FOOTER */}

<div className="bg-gray-100 p-5 flex justify-between bg-mb-10">
       <div className="">
         <h2 className="text-lg font-medium mb-3">Get in Touch</h2>
         <div className="text-emerald-500">
         <p>About Us</p>
         <p>Careers</p>
         <p>Press Release</p>
         <p>Blog</p>
         </div>
         </div>

         <div className="">
           <h2 className="text-lg font-medium mb-3">Connections</h2>
           <div className="text-emerald-500">
           <p>Facebook</p>
           <p>Twitter</p>
           <p>Instagram</p>
           <p>Youtube</p>
           <p>Link edln</p>
           </div>
         </div>

         <div className="">
           <h2 className="text-lg font-medium mb-3">Earning</h2>
           <div className="text-emerald-500">
           <p>Become an Affiliate</p>
           <p>Advertise yout product</p>
           <p>Sell on Market</p>
           </div>
         </div>

         <div class="">
           <h2 class="text-lg font-medium mb-3">Account</h2>
           <div className="text-emerald-500">
           <p>Your account</p>
           <p>Returns centre</p>
           <p>100 % purchase protection</p>
           <p>Chat with us</p>
           <p>Help</p>
           </div>
         </div> 
         </div>
         <p className="flex justify-center mt-4 mb-4">Copyright @ 2022 tokokita.com</p>
         </div>
    
  );
}

export default App;