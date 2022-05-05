import React, { useState } from 'react'
import { range } from '../helpers/range'
import styles from "../styles/Pagination.module.css"
const Pagination = ({size,page,setPage}) => {
	// const [active,setActive] = useState(1)
  return (
		<div className={styles.container}>
			{
				range(size).map((item)=>(<button key={item} 
					className={`${page===item ? styles.active : ""}`}
					value={item} 
					onClick={()=>setPage(item)}>{item}</button>))
			}
		</div>
	)
}

export default Pagination