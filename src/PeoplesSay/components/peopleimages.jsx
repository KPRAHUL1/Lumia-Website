
export default function People_Image(props){
  const {titles,tag,subtitle,images,description,star}=props;

    return(
        <>
     <div className="grid grid-cols-1 p-5 text-center justify-items-center border-2 rounded-xl gap-5 mx-5 xl:mx-0 my-6 bg-white shadow">  
      <h4> {titles} </h4>
    <p className="">{tag}</p>
    <img src={images} alt="" className="rounded-full h-32 w-32"  />
    <div className="flex"><i className={star}></i>
                <i className={star}></i>
                <i className={star}></i>
                <i className={star}></i>
                <i className={star}></i></div>
                <h4>{subtitle}</h4>
                <p className="text-sm">{description}</p></div>  
                 </>
    )
}