import CategoryCard from "./CategoryCard"

export default function Image() {
  const cateogryList = [
    {
      name: "Men's",
      imagePath: "circle1.avif"
    },
    {
      name: "Women's",
      imagePath: "circle2.avif"
    },
    {
      name: "Teens",
      imagePath: "circle3.avif"
    },
    {
      name: "Bridal",
      imagePath: "circle4.avif"
    },
    {
      name: "Dresses",
      imagePath: "circle5.avif"
    },
    {
      name: "Sneakers",
      imagePath: "circle6.avif"
    }
  ]
  return (
    <>
      <div className="pt-10 grid grid-cols-2 justify-items-center md:m-10 md:gap-3 md:flex lg:flex md:justify-center lg:justify:center xl:justify-evenly " >
        {cateogryList.map((category, index) => (
          <CategoryCard key={index} imagePath={category.imagePath} categoryName={category.name} />
        ))}

      </div>
      <div></div>
     
      
    </>

  )
}