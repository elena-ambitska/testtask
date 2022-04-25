import React, {useState} from "react";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Form} from "./components/Form";
import {Hero} from "./components/Hero";
import "./App.scss"
import {UserContext} from "./context";





function App() {
    const [users, setUsers] = useState([]);

    return (
        <UserContext.Provider value={{users, setUsers}}>
            <div className="container">
                <Header/>
                <Hero/>
                <Main/>
                <Form/>
            </div>
        </UserContext.Provider>
    )
}

export default App;
