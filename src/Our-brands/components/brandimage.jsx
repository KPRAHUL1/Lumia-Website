import Brand_Images from "./BrandImages"

export default function Brand_image(){
    const brandimages=[
        {
           
            img:"color1.png"
        },
        {
           
            img:"color (2).png"
        },
        {
            
            img:"color (3).png"
        },
        {
           
            img:"color (4).png"
        },
        {
           
            img:"color (5).png"
        },
        {
         
            img:"color (6).png"
        }
    ]
    return(
        <>
          <div   className="pt-10 grid grid-cols-2 lg:flex md:grid md:grid-cols-3 justify-items-center lg:justify-center lg:flex ">
    { brandimages.map((brand,index) =>(
       <Brand_Images key={index} img={brand.img} /> 
    ))}
    </div>
        </>
    )
}