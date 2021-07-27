import validator from "validator";
import React from 'react'
import ReactDOM from 'react-dom'

console.log(validator.isEmail('ashwinipawale@gmail.com'))

const template =  (<p>This is JSX</p>)

ReactDOM.render(template, document.getElementById('root'))