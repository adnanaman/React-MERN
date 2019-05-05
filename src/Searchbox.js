import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <input type='text' placeholder='search coin' onChange={searchChange}
         ></input>
    );
}
export default Searchbox; 