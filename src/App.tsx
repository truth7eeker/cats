import React from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { store } from  './store/store';
import './App.scss';
import Header from './components/header/Header';
import useScroll from './hooks/useScroll';
import CatsList from './components/cats-list/CatsList';


function App() {

useScroll()

const favCats = store.cats.filter(cat => cat.favourite)

const navigate = useNavigate()
window.onload = () => {
    navigate('/cats')
}

  return (
    <div className="app">
        <Header />
        <Routes>
            <Route path='/cats' element={<CatsList cats={store.cats} />} />
            <Route path='cats/favourites' element={<CatsList cats={favCats} />} />
            <Route path='*' element={<Navigate to='/cats' />} />
        </Routes>
    </div>
  );
}

export default observer(App);
