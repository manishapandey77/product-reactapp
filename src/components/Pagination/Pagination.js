import React from 'react'
import classes from './Pagination.module.css';
const Pagination = ({productsPerPage, totalProducts ,paginate}) => {
const pageNumbers = [];

for(let i=1; i<=Math.ceil(totalProducts/ productsPerPage); i++){
    pageNumbers.push(i);
}
  return (
    <div className={classes.pagination}>
        <ul >
  <li className={classes.prev}><span><i class="fa-solid fa-less-than"></i></span></li>
{pageNumbers.map(number => (
    <li key={number}>
<a onClick={() => paginate(number)}  href="!#" className={classes.link}> {number}</a>
    </li>
))}
  <li className={classes.next}><span><i class="fa-regular fa-greater-than"></i></span></li>
        </ul>
    </div>
  )
}

export default Pagination
