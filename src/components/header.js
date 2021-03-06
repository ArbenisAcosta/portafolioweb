import React from "react"
import illustration from '../img/undraw_web_developer_p3e5.svg'
import Form from './contact.form'

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl ">

            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-blue-700 text-6xl">¡Hola! Soy Arbenis</h1>
                    <p className="text-xl font-light"> Desarrollador autodidacta apasionado por las tecnologias web</p>
                </div>
                <img src={illustration} alt="Web-Developer" style={{height:"300px"}}></img>
            </div>

            <div>
                <Form />
            </div>
        </div>
    </header>
)