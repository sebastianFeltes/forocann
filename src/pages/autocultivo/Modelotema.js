import React from "react";
import './Modelotema.css';

function ModeloTema(){
    return(
        <div>
            <h3>
                Nuevo tema de discusión
            </h3>
            <form>
                <p>
                    Nombre de usuario
                </p>
                <p>
                    Fecha de publicación
                </p>
                <input type={'text'} placeholder={'Título del tema'}/>
                <input type={'file'} accept={'.jpeg,.png'}/>
                <textarea placeholder="Desarrole el tema de discusión o la pregunta..." />
                <button type="submit" >Postear</button>
            </form>
        </div>
    );
}
export default ModeloTema;