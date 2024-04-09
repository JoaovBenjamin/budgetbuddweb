import { Apple, Book, Bus, Cigarette } from "lucide-react";

interface IconProps {
    name: string
}

interface IconsType {
    [key: string]: JSX.Element
}

const icons : IconsType = {
    apple: <Apple />,
    bus: <Bus />,
    cigarette: <Cigarette />,
    book: <Book />
}

export function Icon( { name }: IconProps){

    return icons[name]
    
}