 import React from 'react'
import MainNav from '../Nav Bar/MainNav'
import "./Wishlist.css";

export default function Wishlist(props) {
    const {pinnedItems, onRemove} = props;
    return (
        <React.Fragment>
            <MainNav/>
            <div class = "noimage">
                {pinnedItems.length === 0 && <div>You have no pinned items.</div>}
            </div>
            {pinnedItems.map((item) => (
                <div key = {item.id} className = "row">
                    <div><img src = {item.image}></img></div>
                    <div><button onClick={() => onRemove(item)} className = "remove"> Remove Pin for {item.name}</button></div>
                    
                </div>
            ))}
        </React.Fragment>
    )
}
