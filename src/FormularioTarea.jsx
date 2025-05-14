import { useState } from "react";

const FormularioTarea = ({onAgregarTarea}) => {
    const [tarea, setTarea] = useState('');

    const handleChange = () => {
        setTarea(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(tarea.trim()) {
            onAgregarTarea(tarea);
            setTarea('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribe una tarea a agregar... "
                value={tarea}
                onChange={handleChange}
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default FormularioTarea;