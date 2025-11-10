type Cards = {
    title: string,
    text: string,
    price: number,
    onAddCard: () => void
}

export default function Cards({title, text, price, onAddCard}:Cards) {
  return (
    <div className="card flex flex-col justify-between h-full" style={{ width: "17rem" , margin: "0 0px"}}>
      
      <div className="card-body flex flex-col flex-1">
        <h5 className="card-title">{title}</h5>
        <p className="card-text line-clamp-3">
          {text}
        </p>
        <div className="mt-auto">
          
          <h6 className="text-2xl font-black">{price}<span> CHF</span></h6>
          <button 
          className="px-4 py-2 mt-3 rounded-xl text-white bg-blue-900" 
          onClick={onAddCard}>
            Kaufen
          </button>
        </div>
        
      </div>
    </div>
  )
}
