import React from 'react'
import Category from '../CategoryLists/Category/Category'
const items =[
  {
    catId: 1,
    catName: "Fiction",
    catImage: 'https://placehold.it/400/888888'
  },
  {
    catId: 2,
    catName: "Romance",
    catImage: 'https://placehold.it/400/888888'
  },
  {
    catId: 3,
    catName: "Comedy",
    catImage: 'https://placehold.it/400/888888'
  },
  {
    catId: 4,
    catName: "History",
    catImage: 'https://placehold.it/400/888888'
  }
]
function CategoryList() {
  return (
    <div className="container">
      <h1 className="text-center">All Categories</h1>
      <div className="row">
        {
          items.map((category , index )=>(
            <Category key={index} data={category} />
          )) 
        }
      </div>
    </div>
  )
}

export default CategoryList
