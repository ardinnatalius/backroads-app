import React from 'react'
import Title from './Title'
import { services } from '../Data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='service' />
      <div className="section-center services-center">
        {services.map((service)=> {
          return <Service key={services.id} {...service}/>
        })}
      </div>
    </section>
  )
}

export default Services