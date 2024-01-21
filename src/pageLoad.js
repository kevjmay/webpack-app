import createHome from "./home-page";
import createNav from "./nav-bar";

const initialLoad = () => {
    createNav();
    createHome();
}

export default initialLoad;