// import logo from './logo.svg';
import './App.css';

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
            <label className="absolute top-4 -left-2 bg-orange-600 text-white px-2 py-0.5 rounded-full text-sm">4</label>
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

{/* NAV BAR */}

      <div className="flex flex-row">
          <div className="p-5 basis-1/2">
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
      </div>
          </div>
          
{/* LIST PRODUCT */}

          <div className="flex flex-wrap p-10 place-self-auto">
            <div className="m-2 p-2 border-2 rounded-lg">
            <div className="relative">
            <img src="./images/bolu_susun.png" alt="bolu_susun" className=""/>
            <label className="absolute top-2 left-2 bg-white text-red px-2 py-0.5 rounded-lg text-sm">-30 %</label>
            </div>  
              <h3 className="font-semibold">Bolu Susun</h3>
              <p>Disusun dengan penuh kenangan</p>
              <h3>40.000</h3>
              <div className="flex justify-between">
              <strike>36.000</strike>
              <label className="px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</label>
              </div>
            </div>

            <div className="m-2 p-2 border-2 rounded-lg">
            <div className="relative">
            <img src="./images/mie_aceh.png" className="" alt="mie_aceh"/>
            <label className="absolute top-2 left-2 bg-white text-red px-2 py-0.5 rounded-lg text-sm">-30 %</label>
            </div>
              <h3 className="font-semibold">Mie Aceh</h3>
              <p>Rasanya menusuk jiwa dan raga</p>
              <h3>26.000</h3>
              <div className="flex justify-between">
              <strike>36.000</strike>
              <label className="px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</label>
              </div>
            </div>

            <div className="m-2 p-2 border-2 rounded-lg">
            <div className="relative">
            <img src="./images/bolu_lapis.png" className="" alt="bolu_lapis"/>
            <label className="absolute top-2 left-2 bg-white text-red px-2 py-0.5 rounded-lg text-sm">-30 %</label>
            </div>
              <h3 className="font-semibold">Bolu Lapis</h3>
              <p>Lapis legit di setiap sentuhan</p>
              <h3>42.000</h3>
              
              <div className="flex justify-between">
              <strike>36.000</strike>
              <label className="px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</label>
              </div>
            </div>

            <div className="m-2 p-2 border-2 rounded-lg">
            <img src="./images/donut.png" className="" alt="donut"/>
              <h3 className="font-semibold">Donut</h3>
              <p>Disusun dengan penuh kenangan</p>
              <h3>40.000</h3>
              <div className="flex justify-between">
              <strike></strike>
              <label className="px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</label>
              </div>
            </div>

            <div className="m-2 p-2 border-2 rounded-lg">
            <img src="./images/pizza_hut.png" className="" alt="pizza"/>
              <h3 className="font-semibold">Pizza Hut</h3>
              <p>Disusun dengan penuh kenangan</p>
              <h3>40.000</h3>
              <div className="flex justify-between">
              <strike></strike>
              <label className="px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</label>
              </div>
            </div>

            <div className="m-2 p-2 border-2 rounded-lg">
            <img src="./images/mata_sapi.png" className="" alt="matasapi"/>
              <h3 className="font-semibold">Telor Mata Sapi</h3>
              <p>Disusun dengan penuh kenangan</p>
              <h3>40.000</h3>
              <div className="flex justify-between">
              <strike></strike>
              <label className="px-3 py-2 bg-orange-600 text-white rounded-full text-sm">BUY NOW</label>
              </div>
            </div>
            
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
        <p className="p-5 text-center">Copyright @ 2022 tokokita.com</p>

    </div>
    
  );
}

export default App;
