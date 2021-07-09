import React from 'react';

const searchBox = ({searchChange}) => {

    return(
        <div className='pa2'>
        <input 
        className='pa3 ba b--green bg-ligthest-blue'
        type='search' placeholder='search robots'
        onChange={searchChange}
        />
        </div>
    )
}

export default searchBox;