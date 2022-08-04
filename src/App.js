import './App.scss';
import './asset/boxicons-2.0.7/css/boxicons.min.css';
import { BrowserRouter as WrapRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Router from './configs/Router';

function App() {
    return (
        <WrapRouter>
            <Header />
            <Router />
            <Footer />
        </WrapRouter>
    );
}

export default App;
