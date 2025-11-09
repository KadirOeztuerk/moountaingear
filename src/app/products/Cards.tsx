type Cards = {
    
    title: string,
    text: string,
    price: number

}

export default function Cards({title, text, price}:Cards) {
  return (
    <div className="card" style={{ width: "18rem" , margin: "0 10px" }}>
      
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {text}
        </p>
        <h6 className="text-xl font-black">{price}</h6>
        <a href="#" className="px-4 py-2 mt-3 rounded-xl text-white bg-blue-900">
          Kaufen
        </a>
      </div>
    </div>
  );
}
