import './style.css';
import createNav from './nav-bar';
import createHome from './home-page';

const initialLoad = () => {
    createNav();
    createHome();
}

initialLoad()

console.log('Hello Worlds!');