import { Dropdown } from "flowbite-react";
export default function ShoppingRoute(){
   return(
        <>
        <section>
            <div className="grid lg:grid lg:grid-cols-2 lg:m-40">
                <div>
                    <img src="bigimage1.webp" alt="" className="rounded-xl"/>
                </div>
             <div className="h-fit overflow-auto touch-pan-y p-5"> 
                  
                    <div>
                  <div>
                  <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    </div> 
                    <a href="">2 reviews</a> 
                    </div>
                    <div>
                        <h1>Availability :</h1>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span>Hurry Only left of Khaki / S in stock!</span>}> </Dropdown>
                    </div>
                
               <div>
               <h1>Loose padded jacket</h1>
               <h1>$ 64</h1>
               <p>Tax included</p>
                </div> 
            
            <div>
                <h1>
                Short description
                </h1>
                <p>A jacket is a garment for the upper body, usually extending below the hips. A jacket typically has 
                    sleeves and fastens in the front or slightly on the side. A jacket is generally lighter and tighter-fitting.</p>

                    <h1>Product Type: Jacket</h1>
                    <h1>SKU: W57015KH2</h1>
                    <h1>Tags: collection-coats-jackets , new , women</h1>
                    <h1>Weight: 0.8 kg</h1>
                    <h1>Vendor: Colvin Klein</h1>
            </div>
            <div>
                <h1>color:Khaki</h1>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div>
               <label htmlFor="">
               <textarea name="" placeholder="Order speciel instruction"id=""></textarea>
               <div className="">
                <h1>One-time purchase</h1><input type="radio" name="" id="" />
                <h1>Subscribe & save</h1><input type="radio" name="" id="" />
               </div>
               </label> 
              <div><button>ADD TO CART</button> <button>BUY IT NOW</button> <img src="public\heart-like-svgrepo-com.svg" alt="" className="w-7"/></div> 
              <input type="checkbox" name="" id="" /><a href=""> agree to the store policies</a>
            </div>
            <div>
                <p>Pickup available at Neuer Weg 94, 12th Floor, 45711 Datteln, Germany
                    Usually ready in 24 hours</p>
               <a href="">Check availability at other stores</a>
            <div className="flex flex-row">
               <img src="public\delivery-truck-svgrepo-com.svg" alt="" className="w-7" />
               <img src="public\svg-icons\return-svgrepo-com.svg" alt="" className="w-7"/>
               <img src="public\operator-svgrepo-com.svg" alt=""className="w-7" />
               <img src="public\shield-antivirus-svgrepo-com.svg" alt="" className="w-7"/>
             
            </div>
            </div>
            </div>
            </div>
        </section>
        </>
    )
}