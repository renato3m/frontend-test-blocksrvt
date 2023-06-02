import "./App.css";
import logo from "./assets/logo.svg";
import ArrowRightUp from "./assets/ArrowRightUp.svg";
import { useProduct } from "./hooks/products";
import { useEffect, useState } from "react";

const baseImageUrl = 'https://plugin-storage.nyc3.digitaloceanspaces.com/families/images';

function App() {
  const { getListProduct } = useProduct();

  const [products, setProducts] = useState([])
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getListProduct(page * 10)
      console.log("Lista de produtos", data)
      setProducts(data)
    }

    fetchProducts()
  }, [page])

  return (
    <div className="App">
      <div className="bg-[#242424BF] p-[21px]">
        <p className="text-white text-lg font-normal">
          Não limite sua criatividade, junte-se a familia Blocks por apenas BRL
          19,99
        </p>
      </div>
      <header>
        <div className="flex justify-center items-center h-20 border-[#D835C5] border-b">
          <img src={logo} className="logo react" alt="React logo" />
        </div>
        <div className="shadow-bar">
          <div className="flex justify-center items-start flex-col mx-auto p-5">
            <h1 className="font-bold text-3xl">Catálogo</h1>
            <div className="w-8 rounded h-1 bg-gradient-secondaty"></div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2 className="text-2xl text-textPrimary font-semibold mt-[34px]">
            Resultados
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mt-[18px]">
            {products.map((product, index) => (
              <div key={index} className="rounded-lg border border-gray-300 w-full">
                {" "}
                {/** Card */}
                <div className="flex justify-center items-center">
                  <img src={`${baseImageUrl}/${product?.id}.jpg`} alt="" className="max-h-[198px]"/>
                </div>
                <div className="flex justify-between p-2 border-t">
                  <h3 className="font-semibold text-xs">
                    Lorem Ipsum is simply ....
                  </h3>
                  <div className="border-l pl-2 ml-2 flex items-center justify-center">
                    <img
                      src={ArrowRightUp}
                      alt="arrow"
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-footer py-5 flex justify-center fixed bottom-0 w-full">
        <ul className="flex flex-col justify-between items-center gap-9 md:flex-row">
          <li>
            <a href="#" target="_blank">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Termos de uso
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Politica de privacidade
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
