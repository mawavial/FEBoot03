
interface User {
    name: string
    email: string
}

interface Tour {
    title: string
    description: string
    price: number
}

interface Media extends User {
    image: string
    video: string
    tour: Tour
}

type TourMedia = Tour & Media
type Status = 'idle' | 'loading' | 'success' | 'error'

const maloqueiro: Media = {
    name: 'Maloqueiro',
    email: 'masa@msdlfoksdl.;cjfiosjefiose',

}


type User = { name: string, email: string }
