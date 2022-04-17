import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid'

export default function Form() {
    const [dontab, setdontab] = useState([
        {txt: "Wake me up", id: uuidv4()},
        {txt: "Before you go-go", id: uuidv4()},
        {txt: "Don't leave me hanging like a yo-yo", id: uuidv4()},
        {txt: "I don't want to miss it when you hit that high", id: uuidv4()},
        {txt: "Cause I'm not planning on going solo", id: uuidv4()}
    ]);

    const [inputState, setInpState] = useState();

    const deleteElement = id => {
        //on filtre le tableau pour qu'il ne renvoie que les id différents 
        //de l'id sélectionné
        const filterState = dontab.filter(item => {
            return item.id !== id;
        })
        //on modifie ensuite le state avec ces données mises à jour
        setdontab(filterState);
    };

    const bindInput = e => {
        setInpState(e);
    };

    const addTodo = e => {
        e.preventDefault();
        //on crée un nouveau tableau avec le state de todos
        const nouvTab = [...dontab];
        //on crée un nouvel objet auquel on ajoute une propriété txt = l'input
        //et une propriété id = uuidv4.
        const nouvTodo = {};
        nouvTodo.txt = inputState;
        nouvTodo.id = uuidv4();
        nouvTab.push(nouvTodo);
        setdontab(nouvTab);
        setInpState('');
    }

    //on va export le contenu, donc l'interface visuelle
    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">                
                What to do?</label>
                <input type="text" className="form-control" id="todo" 
                onInput={e => bindInput(e.target.value)}
                value={inputState} />
                <button className="mt-2 btn btn-primary d-block">Create</button>
                </form>
                <h2>List of things to do: </h2>
                <ul className="list-group">
                    {dontab.map(item => {
                        return (
                            <Item txt={item.txt} key={item.id} id={item.id}
                            funcDel={deleteElement} />
                        )
                    })}
                </ul>
        </div>
    )
}