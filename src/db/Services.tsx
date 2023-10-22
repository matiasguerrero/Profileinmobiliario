import Service4 from "../../public/images/services/busqueda_image.jpg"
import Service2 from "../../public/images/services/negociacion_image.jpg"
import Service3 from "../../public/images/services/reforma_image.jpg"
import Service1 from "../../public/images/services/gestion_image.jpg"
import { StaticImageData } from "next/image"

export interface Service {
    title: string
    image: StaticImageData
    index?: number
    subtitle: string
}

export const ServiceList:Service[] = [
    {
        title: "Busqueda del inmueble mas rentable",
        image: Service1,
        subtitle: "Busqueda"
      },
      {
        title: "Negociacion al mejor precio ",
        image: Service2,
        subtitle: "Ahorro"
      },
      {
        title: "Reforma del inmueble",
        image: Service3,
        subtitle: "Reforma"
      },
      {
        title: "Gestion del alquiler e inquilino",
        image: Service4,
        subtitle: "Gestion"
      },
]
