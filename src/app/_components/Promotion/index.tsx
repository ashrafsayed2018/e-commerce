"use client"
import { useEffect, useState } from 'react'
import classes from './index.module.scss'

function Promotion() {

   const [time,setTime]= useState({
    days:0,
    hours:0,
    minutes:0,
    seconds:0,
   })
   const targetDate = new Date()
   targetDate.setDate(targetDate.getDate() + 3)
 
   useEffect(() => {
     const timerInterval = setInterval(() => {
       const currentTime = new Date()
       const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)
 
       const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
       const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
       const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
       const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
 
       setTime({ days, hours, minutes, seconds })
 
       if (timeDifference === 0) {
         clearInterval(timerInterval)
         // You can add code here to handle what happens when the target date is reached.
       }
     }, 1000)
 
     return () => {
       clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
     }
   }, [])
 
  return (
    <section className={classes.promtion}>
        <div className={classes.textBox}>
            <h3 className={classes.title}>Deals of the month</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis dolorum suscipit repellendus optio minus expedita veritatis. Repellendus, quae qui dolore dolor placeat cum unde quasi expedita tempore velit cumque atque odit soluta animi? Illum laboriosam vitae doloremque repudiandae voluptates?</p>
            <ul className={classes.stats}>
              <StatBox label='Days' value={time.days}/>
              <StatBox label='Hours' value={time.hours}/>
              <StatBox label='Minutes' value={time.minutes}/>
              <StatBox label='Seconds' value={time.seconds}/>
            </ul>
        </div>
    </section>
  )
}
const StatBox = ({label,value}: {label:string,value:number}) => {
    return (
        <li className={classes.statBox}>
        <h4>{value}</h4>
        <p>{label}</p>
        </li>
    )
}
export default Promotion