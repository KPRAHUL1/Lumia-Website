import { Searchsection } from "../Search/search";
import App from "./components/Drawer";
import Modal from "../modal";
import Wishlist from "../Wishlist/Wishlist";
import { OrderedList } from "@chakra-ui/react";
import Orderlist from "../Order/Order";
import { Message } from "../Message/Message";
import { Equlizzer } from "../Equlizzer/Equlizer";
import SearchSmall from "../Search/components/SmallSearch";
import { BuyLumia } from "../PopoverMenu/Popover";
import { Menu } from "../PopoverMenu/MenPopover";
import { WomMen } from "../PopoverMenu/WomenPopover";
import { Catalog } from "../NavCatalog/Catalog";
import { Pages } from "../PagesNav/PagesNav";
import { HomeNav } from "../HomeNav/HomeNav";
export default function Nav() {


  return (
  <><section className="sticky top-0 bg-white left-0 right-0 z-40">
        <div className='flex justify-around lg:flex gap-2 shadow content-center justify-items-center   bg-white'>
          <div className='  m-4  '>
            <a href="/home1"><img src="logo.svg" alt="" className='w-24 md:w-28 lg:w-full' /></a>
          </div>
          <div className='flex gap-4 m-5 justify-evenly content-evenly lg:hidden'>
          <Message/>
          <a href="#"><img src="phone-svgrepo-com.svg" alt="" className="w-6"/></a>
          <SearchSmall/>
          <button><App/></button>
          </div>
          <div className="xl:flex hidden lg:block   md:space-x-5 md:content-center  xl:text-md items-center gap-5">
            <HomeNav/>
            <a href="#" className="">Setting</a>
            <Pages/>
            <Catalog/>
            <WomMen/>
            <Menu/>
            <BuyLumia/>
          </div>
          <div className="flex flex-row lg:flex lg:items-center hidden lg:block  md:space-x-5 md:content-center ">
            <Equlizzer/>
            <Message/>
            <Searchsection/>
            <Modal/>
            <Wishlist/>
            <Orderlist/>
          </div>
        </div>
      </section>
      
       
    </>
  )
}
