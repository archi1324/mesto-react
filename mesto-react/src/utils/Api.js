import React from "react";

class Api { 
    constructor(config) { 
        this._url = config.url; 
        this._headers = config.headers; 
    } 

    _serverError(res) { 
        return res.ok ? 
           res.json(): 
          Promise.reject(res.status); 
    } 

    getUserInfo() { 
      return fetch(`${this._url}/users/me`, { 
        headers: this._headers, 
      }) 
      .then((res) => this._serverError(res)); 
    } 

    getInitialCards() { 
      return fetch(`${this._url}/cards`, { 
        headers: this._headers 
      }) 
      .then((res) => this._serverError(res)); 
    } 

 

    editUserInfo(data) { 
        return fetch(`${this._url}/users/me`, { 
          method: "PATCH", 
          headers: this._headers, 
          body: JSON.stringify(data), 
        }) 
        .then((res) => this._serverError(res)); 
    } 

    addNewCard(data) { 
      return fetch(`${this._url}/cards`, { 
        method: "POST", 
        headers: this._headers, 
        body: JSON.stringify(data), 
      }) 
      .then((res) => this._serverError(res)); 
    } 

    deleteCard(cardId) { 
      return fetch(`${this._url}/cards/${cardId}`, { 
        method: "DELETE", 
        headers: this._headers, 
      }) 
      .then((res) => this._serverError(res)); 
    } 

    likeCard(cardId) { 
      return fetch(`${this._url}/cards/${cardId}/likes`, { 
        method: "PUT", 
        headers: this._headers, 
      }) 
      .then((res) => this._serverError(res)); 
    } 

    deleteCardLike(cardId) { 
      return fetch(`${this._url}/cards/${cardId}/likes`, { 
        method: "DELETE", 
        headers: this._headers, 
      }) 
        .then((res) => this._serverError(res)); 
      } 

    changeAvatar(data) { 
      return fetch(`${this._url}/users/me/avatar`, { 
        method: "PATCH", 
        headers: this._headers, 
        body: JSON.stringify(data), 
      }) 
      .then((res) => this._serverError(res)); 
    } 
}

const api = new Api ({ 
    url: 'https://mesto.nomoreparties.co/v1/cohort-69', 
    headers: { 
      authorization: '23266549-2b8e-435e-8d29-ff2e83b725ec', 
      'content-type': 'application/json' 
    }, 
  }); 
export default api; 