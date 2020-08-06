import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/65432090?s=460&u=8cde30c63f9336594274f0ca496827d1f8d62541&v=4" alt="Raphael Binko" />
                        <div>
                            <strong>Raphael Binko</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/>
                        <br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vidaa das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whats App"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;