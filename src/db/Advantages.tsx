import { CashIcon, SmileIcon, TimeIcon } from "@/components/Icons";

interface Advantage {
    title: string
    description: string
    icon: React.ReactNode
}

export const AdvantageList:Advantage[] = [
    {
      title: "Ahorras tiempo",
      description: "Deja de perder horas frente al ordenador buscando en portales sin saber qué quieres o visitando inmuebles sin documentación legal en orden. Confía en nosotros, especialmente si estás fuera de España o Italia.",
      icon:  <TimeIcon/>
    },
    {
      title: "Ahorras preocupaciones",
      description: "Te brindaré un acompañamiento integral desde el inicio hasta el final del proceso. Desde antes de comenzar, durante la búsqueda y hasta después de la transacción, recibirás asistencia en trámites como obtención del NIE, apertura de cuenta bancaria, servicios administrativos y registro de la propiedad.",
      icon:  <SmileIcon/>
    },
    {
      title: "Ahorras dinero",
      description: "Una vez encuentre el inmueble deseado, prepararé una estrategia de negociación personalizada para obtener el mejor precio posible. Te brindaré asesoramiento y consejo profesional, negociando en tu nombre para garantizar una compra exitosa.",
      icon:  <CashIcon/>
    },
  ]