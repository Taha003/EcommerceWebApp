import React from 'react'
import { useGlobalContext } from '../Contexts/ProductContext'
import Product from '../Components/Product'
import Hero from '../Components/Hero'
function Home() {
    let { product } = useGlobalContext()
    let filterdData = product.filter((items) => {
        return items.category == `men's clothing` || items.category == `women's clothing`
    })



    return (
        <div>

            <Hero />



            <div className='w-full py-16'>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4 '>
                    {filterdData.map((mydata) => {
                        let { id, title, image, price, description } = mydata;
                        return (
                            <Product key={id} mydata={mydata} />
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Home