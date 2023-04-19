import React from 'react'
import Card from '../Card/Card';
import './Leader.module.css'


// 1. LEADER_JSX -> Traer el modelo de /Card
// 2. LEADER_JSX -> Usar el Objeto "members" de APP y crear la vista del Leader. Se puede usar find() para rescatar el leader.
// 3. LEADER_MODULE.CSS -> Generar los estilos en Leader.module.css
// 4. LEADER_JSX Usar -> los estilos con className={styleLeader.NOMBRECLASE}

const Leader = ({leader}) => {

const member = {leader};



    return (
    <>
        <div >
        <Card key={member.id} member={leader}/>
        </div>
    </>

    )
}

export default Leader;