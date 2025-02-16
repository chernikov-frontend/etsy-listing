import { etsyData } from "./data/etsyData";
import Listing from "./components/Listing";

const App = () => {
    return (
        <div className="wrapper">
        <h1>Список предложений Etsy</h1>
        <Listing items={etsyData} />
        </div>
    );
};

export default App;
