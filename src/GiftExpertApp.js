import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

import './index.css'

const GiftExpertApp = () => {
    const [categories, setCategories] = useState([''])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>

            {categories.map(category =>
                 <GifGrid key={Math.floor(Math.random() * 100)} category={category} />
            )}
        </>
    )
}

export default GiftExpertApp
