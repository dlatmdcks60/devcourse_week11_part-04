import React, { } from 'react';

const MapTest = () => {
    const fruits = ['apple', 'banna', 'orange']

    return (
        <div>
            <h2>과일</h2>
            <ul>
                {
                    fruits.map((fruit, i) => (
                        <li key={i}>{fruit}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MapTest;