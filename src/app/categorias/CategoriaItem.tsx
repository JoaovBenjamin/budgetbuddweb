import DropdownAction from "@/components/DropdownAction";
import { Icon } from "@/components/Icon";
import { Apple, ChevronDown } from "lucide-react";

interface CategoriaItemProps{
    categoria: {
        id: number,
        nome: string,
        icone: string
    }
}

export function CategoriaItem({categoria}: CategoriaItemProps) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <DropdownAction />
        </div>
    )
}