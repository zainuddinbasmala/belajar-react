import Menu from "./Menu";
import { propTypes } from "react-currency-format";
import products from "../Services/data/product";
import ProductCard from "./ProductCard";

const Layout = (props) => {
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

{props.children}

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

    )
}

export default Layout;