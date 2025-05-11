import {services} from "../assets/data/services"
import ServiceCard from "../components/Services/ServiceCard"


const Services = () => {
  return (
    <section>
      {/* Heading */}
      <div className="text-center bg-black p-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Our Services
        </h1>
        <p className="text-gray-400 text-sm md:text-base lg:text-lg mt-2">
          Explore our range of services designed to enhance your experience.
        </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[30px] bg-black">
            {services.map((item, index ) => (
                <ServiceCard key={index} service={item} />
            ))}
        </div>
    </section>
  )
}

export default Services