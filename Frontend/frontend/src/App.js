import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
