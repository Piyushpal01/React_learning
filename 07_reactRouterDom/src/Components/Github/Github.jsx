import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // now we want to call github api when this page/component is loaded , this is done by useEffect
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Piyushpal01")
    //     .then(response => response.json()) // response milega use json m cnvrt kr dia
    //     .then(data =>{
    //         console.log(data); // data ko render k lie ek state chaye to useState le lia 
    //         setData(data)
    //     })
    // }, [])
  
    const data = useLoaderData() // jo bhi data return hra hga vo useLoaderData m mil jaega ar use data var m rkh lia
    return (
    <div className='bg-black text-white font-semibold text-2xl tracking-wider px-8 py-6 rounded flex items-center '>
        <img className='rounded-full' src={data.avatar_url} width={200} alt="" />
        <div className='w-full'>
            Github Followers: {data.followers} <br />
            <Link to={'https://github.com/Piyushpal01'} target='_blank' className='text-xl hover:text-sky-300 hover:underline duration-200'>
                Github &rarr;
            </Link>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Piyushpal01');
    return response.json()
}