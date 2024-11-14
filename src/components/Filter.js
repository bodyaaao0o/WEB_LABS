import React from 'react';
import "../style2.css"

function Filter() {
    return (
        <div className="filters">
            <select>
                <option>Filter 1</option>
                <option>Filter 2</option>
                <option>Filter 3</option>
            </select>
            <select>
                <option>Filter 4</option>
                <option>Filter 5</option>
                <option>Filter 6</option>
            </select>
            <select>
                <option>Filter 7</option>
                <option>Filter 8</option>
                <option>Filter 9</option>
            </select>
            <button>Apply</button>
        </div>
    );
}

export default Filter;
