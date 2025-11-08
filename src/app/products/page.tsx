import Header from "./Header";
import Cards from "./Cards";

export default function ProductsPage() {
  return (
    <>
        <div className="flex flex-col justify-center w-[1200px] mx-auto">
            <Header />
            <div className="flex flex-row  justify-start py-5">
                

                <Cards />
                <Cards />
            </div>
        </div>
    </>
  );
}
