import "./App.css";
import SingleProduct from "./components/SingleProduct";
import TopBar from "./components/TopBar";
import SpecialOfferContext from "./components/SpecialOfferContext";
import CustomInput from "./components/CustomInput";
import useLoginStatus from "./hooks/useLoginStatus";
import useProducts from "./hooks/useProducts";
import useSearchQuery from "./hooks/useSearchQuery";

function App() {
  const products = useProducts();
  const [loginStatus, dispatch] = useLoginStatus();
  const { applySearchQuery, handleSearch } = useSearchQuery(products);

  return (
    <div className="App">
      <SpecialOfferContext.Provider value={{ name: "Whatever" }}>
        <TopBar loginStatus={loginStatus} dispatch={dispatch} />
      </SpecialOfferContext.Provider>
      <div className="filters-bar">
        <CustomInput handleChange={handleSearch} />
      </div>
      <h1>Products list:</h1>
      <div className="products-list">
        {products.length > 1
          ? applySearchQuery().map((product: any) => (
              <SingleProduct key={product.id} data={product} />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
