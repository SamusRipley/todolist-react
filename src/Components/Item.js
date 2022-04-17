import React from 'react'

export default function Item(props) {
    return (
        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
            <div className="p-3">{props.txt}</div>
            <button className="btn btn-danger p2 h-50"
            onClick={() => props.funcDel(props.id)}>Delete</button>
        </li>
    )
}
