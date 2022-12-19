import React, { Component } from 'react'

type user = {
    name :string 
}

const UserContex = React.createContext<user>({
    name : ""
}); 