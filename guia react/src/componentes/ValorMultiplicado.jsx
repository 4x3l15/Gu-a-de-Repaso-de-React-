import React, { useState } from "react";

function ValorMultiplicado() {
    const [número, setNúmero] = useState(0);

    const  handleChange = (e) =>{
        setNúmero(número(e.target.value))
    };
    return(
        <>
        <input 
        type="Number"
        value={número}
        onChange={handleChange} 
        placeholder="ingresar un numero"
        />
        <p>{}</p>
        </>
    );
}

export default ValorMultiplicado;