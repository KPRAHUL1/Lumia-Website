import Footer from "../Footer-section/footer";
import CategoryCarosel from "./Components/Categosycarousel";
import Nav from "../nav-bor/header";
import Summerimage from "../Shopping-Cart/components/Summerimage";
import Summerimages from "../Shopping-Cart/components/Winterimages";
import People from "../PeoplesSay/people";
import BottomNav2 from "../Bottomnav2/BottomNav";
export default function CategoryRoute(){
    return(
        <>
        <section className="bg-slate-300">
            <Nav/>
            <div className="flex m-10">
                <p><a href="/">Home</a> {">"} Men</p>
            </div>

            <div className="lg:mx-40 my-10"><CategoryCarosel/></div>
            <div className="lg:mx-40 text-center lg:my-20 mx-5 my-10 text-sm">
                <p>The latest Men fashion collections for Spring/Summer and Fall/Winter are now available to bought! Our online 
                    store presents a wide selection of fashionable apparel specifically designed to make you look your best. 
                     We have put together the most stylish and trendy looks for you so that you can keep up with the latest fashion
                      trends. This fashion collection will have you looking your best in no time! Don't miss the chance to get your hands
                       on the latest fashion clothes for Men!</p>
            </div>
           
            <Summerimage/>
            <Summerimages/>
             <People/>
            <Footer/>
          <BottomNav2/>
        </section>
        </>
    )
}