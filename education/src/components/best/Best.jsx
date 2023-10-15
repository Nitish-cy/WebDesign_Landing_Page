
import React from 'react'
import './best.css'
import m1 from '../../assets/apt1.jpeg'
import m2 from '../../assets/apt2.jpeg'
import m3 from '../../assets/apt3.jpeg'
const Best = () => {
  return (
    <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <ul>
                    <li><span className='bold'>All</span></li>
                    <li>Commercial</li>
                    <li>Residential</li>
                    <li>Agricultural</li>
                </ul>
            </div>
            <div className='imagesList'>
                <img src={m1}></img>
                <img src={m2}></img>
                <img src={m3}></img>
            </div>
            <button className='btn'>View All</button>
        </div>
  )
}

export default Best