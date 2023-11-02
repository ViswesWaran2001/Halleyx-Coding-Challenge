import React, {useState} from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './pages/Layout';
import Label from './pages/Label';
import TextBox from './pages/TextBox';
import Button from './pages/Button';
import Dropdown from './pages/Dropdown';
import Checkbox from './pages/Checkbox';
import Radiobutton from './pages/Radiobutton';
import Table from './pages/Table';
import Navigation from './pages/Navigation';
import Image from './pages/Image';
import CustomButton from './components/home/CustomButton';
import {NavLink} from 'react-router-dom'

const App = () => {

    return (
        <div className='app'>
            <BrowserRouter>
                <Sidebar> 
                    <Routes>   
                        <Route path='/layout' element={<Layout/>}/>
                        <Route path='/label' element={<Label/>}/>
                        <Route path='/textbox' element={<TextBox/>}/>
                        <Route path='/button' element={<Button/>}/>
                        <Route path='/dropdown' element={<Dropdown/>}/>
                        <Route path='/checkbox' element={<Checkbox/>}/>
                        <Route path='/radiobutton' element={<Radiobutton/>}/>
                        <Route path='/table' element={<Table/>}/>
                        <Route path='/navigation' element={<Navigation/>}/>
                        <Route path='/image' element={<Image/>}/>
                    </Routes>
                </Sidebar>
                    <Routes>
                        <Route path='/' element={<CustomButton/>}/>
                    </Routes>
            </BrowserRouter> 
        </div>
    );
};

export default App;