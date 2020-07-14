import React from "react"; 
import LikeButton from "../LikeButton"; 

import './App.css'; 
import data from "../../data.json"; 

export default class App extends React.Component {
    
    componentDidMount() { 
        fetch(data).then(response => this.setState(response)); 
    }; 

    renderItems(arr) { 
        return arr.map(item => { 
            return ( 
            <div className="col s12 item" key={item.id}> 
                <div className="card pink lighten-3"> 
                    <div className="card-content white-text"> 
                        <span className="card-title">{item.attributes.title}</span> 
                        <p>Имя: {item.relationships.attributes.first_name}</p> 
                        <p>Фамилия: {item.relationships.attributes.last_name}</p> 
                        <p>Отчество: {item.relationships.attributes.middle_name}</p> 
                        <p>Комнат: {item.attributes.rooms}</p> 
                        <p>Площадь: {item.attributes.area} {item.attributes.unit}</p> 
                        <p>Город: {item.attributes.address.city}</p> 
                        <p>Улица: {item.attributes.address.street}</p> 
                        <p>Дом: {item.attributes.address.house}</p> 
                    </div> 
                </div> 
                <LikeButton /> 
            </div> 
            ); 
        }); 
    }; 

    render() { 
        const item = this.renderItems(data.response); 

        return ( 
            <div className="container"> 
                <div className="row"> 
                    {item} 
                </div> 
            </div> 
        ); 
    }; 

};