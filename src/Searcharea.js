import React from 'react'

const SearchArea = (props)=> {
    return (
       <> 
        <div className="search-area">
            <form className="formtype" onSubmit={props.searchBook} action="">
                <input  onChange={props.handleSearch} type="text"/>
                <button type="submit">kiran </button>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort"></option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>

                </select>
               
            </form>

        </div>
        
     </>   
    )
}

export default SearchArea;
