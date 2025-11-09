import Header from "./Header";
import Cards from "./Cards";

type Producs = {
  id:number,
  title: string, 
  text: string,
  price: number
}

const products:Producs[] = [
  { id: 1 , title: "Snowboard" , text: "for pro users", price: 788 },
  { id: 2 , title: "Snow Glases" , text: "See your futur bright", price: 299 },
  { id: 3 , title: "Pets" , text: "for pro users", price: 68 },
  { id: 4 , title: "Snowmaschine" , text: "for pro users", price: 2788 },
]


export default function ProductsPage() {
  return (
    <>
        <div className="flex flex-col justify-center w-[1200px] mx-auto">
            <Header />
            <div className="flex flex-row  justify-start py-5">
                
              {products.map((item) => {
                return <Cards key={item.id} title={item.title} text={item.text} price={item.price} />;
              })}
                
              
            </div>
        </div>
    </>
  );
}
