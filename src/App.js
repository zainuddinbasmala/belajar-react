import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-white container mx-auto">
      <div className="flex justify-between p-5 border-b border-blue-200">
        <div className="flex gap-3">
          <a href="#" className="text-emerald-500">Chat With Us</a>
          <a href="#">+62822 4568 1252</a>
          <a href="#">zain@gmail.com</a>
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
        <input type="text" placeholder="Search Products, Categories" className="w-1/3 border border-gray-300 rounded-md pl-4 py-4"/>
        <img src="./images/search.png" className="w-4 h-4 -ml-8" />
      </div>
        
      <div className="flex gap-10">
          <img src="./images/user.png" alt="user" className="w-8 h-8"/>
          <div className="relative">
            <img src="./images/basket.png" alt="basket" className="w-9 h-9"/>
            <label className="absolute top-5 -left-1 bg-orange-600 text-white py-0.25 px-1 rounded-full text-sm">4</label>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 pl-4 mt-4 text-lg  mt-4 font-medium">
        <ul className="flex gap-10">
          <li>Bakery</li>
          <li>Fruit and vegetables</li>
          <li>Meat and fish</li>
          <li>Drinks</li>
          <li>Kitchen</li>
          <li>Special nutrition</li>
          <li>Baby</li>
          <li>Pharmacy</li>
        </ul>
      </div>

      <div className="bg-white container mx-auto">
        <h2 className="text-lg font-medium mb-3">Categories</h2>
        <label>Bolu</label>
        <label className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">320</label>
        </div>
        <div className="flex">
        <label>Mie</label>
        <label className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">112</label>
        </div>
        <div className="flex">
        <label>Pizza</label>
        <label className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">32</label>
        </div>
        <div className="flex">
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
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
        </div>
        <div className="flex mb-2">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang4"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/starno.png"/>
        </div>
        <div className="flex mb-2">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang3"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/starno.png"/>
            <img src="./images/starno.png"/>
        </div>
        <div className="flex mb-2">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang2"/>
            <img src="./images/star.png"/>
            <img src="./images/star.png"/>
            <img src="./images/starno.png"/>
            <img src="./images/starno.png"/>
            <img src="./images/starno.png"/>
        </div>
        <div className="flex">
            <input className="mr-2 accent-green-600" type="checkbox" value="Bintang1"/>
            <img src="./images/star.png"/>
            <img src="./images/starno.png"/>
            <img src="./images/starno.png"/>
            <img src="./images/starno.png"/>
            <img src="./images/starno.png"/>
        </div>
      </div>

      <div className="pt-5">
        <h2 className="text-lg font-medium mb-3">Price</h2>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between mb-10">
        <div className="">
        <h2 className="text-lg font-medium mb-3">Get in Touch</h2>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press Release</p>
        <p>Blog</p>
        </div>

        <div className="">
          <h2 className="text-lg font-medium mb-3">Connections</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Youtube</p>
          <p>Link edln</p>
        </div>

        <div className="">
          <h2 className="text-lg font-medium mb-3">Earning</h2>
          <p>Become an Affiliate</p>
          <p>Advertise yout product</p>
          <p>Sell on Market</p>
        </div>

        <div class="">
          <h2 class="text-lg font-medium mb-3">Account</h2>
          <p>Your account</p>
          <p>Returns centre</p>
          <p>100 % purchase protection</p>
          <p>Chat with us</p>
          <p>Help</p>
        </div> 
        
            
        
      </div>
        <p class="mb-5">Copyright @ 2022 tokokita.com</p>
    </div>
  );
}

export default App;
