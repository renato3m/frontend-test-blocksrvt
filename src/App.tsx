import "./App.css";
import logo from "./assets/logo.svg";
import ArrowRightUp from "./assets/ArrowRightUp.svg";

function App() {
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
        <div className="shadow-bar  ">
          <div className="flex justify-center items-start flex-col mx-auto p-5">
            <h1 className="font-bold text-3xl">Catálogo</h1>
            <div className="w-8 rounded h-1 bg-gradient-secondaty"></div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2 className="text-2xl text-textPrimary font-semibold mt-8">
            Resultados
          </h2>
          <div>
            <div className="rounded-lg border border-gray-300 w-44 h-56"> {/** Card */}
              <div>
                <img src="" alt="" />
              </div>
              <div className="flex justify-between p-2 border-t">
                <h3 className="font-semibold text-xs">Lorem Ipsum is simply ....</h3>
                <div className="border-l">
                  <img src={ArrowRightUp} alt='arrow' className="w-4 relative left-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <ul>
          <li>
            <a href="#" target="_blank">Sobre</a>
          </li>
          <li>
            <a href="#" target="_blank">FAQ</a>
          </li>
          <li>
            <a href="#" target="_blank">Termos de uso</a>
          </li>
          <li>
            <a href="#" target="_blank">Politica de privacidade</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
