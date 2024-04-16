"use client"

import { icons } from "@/app/utils/icons";
import { SubmitButton } from "@/components/SubmitButton";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { create } from "@/app/actions/categorias/create";
import { useFormState } from "react-dom";
import { update } from "@/app/actions/categorias/update";

interface EditFormProps {
    categoria: Categoria
}

export function EditForm({categoria}: EditFormProps){
    const initialState = {
        message: ""
      }
    
    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 min-w-[500px] rounded">
        <input type="hidden" name="id" value={categoria.id} />
        
        <h2 className="text-2xl font-bold">Editar Categoria {categoria.nome}</h2>
        <Input
          key="nome"
          label="Nome"
          name="nome"
          variant="bordered"
          labelPlacement="outside"
          defaultValue={categoria.nome}
          isInvalid={state?.message != ""}
          errorMessage={state?.message}
        />

        <Autocomplete
          label="Ícone"
          placeholder="procurar ícone..."
          variant="bordered"
          labelPlacement="outside"
          defaultInputValue={categoria.icone}
          name="icone"
          defaultItems={icons}
        >
          {(item) => <AutocompleteItem key={item.name} startContent={item.icon} >{item.name}</AutocompleteItem>}
        </Autocomplete>

        <div className="flex justify-around mt-4">
          <Link href="/categorias">
            <Button variant="bordered" startContent={<ArrowLeft size={18} />}>cancelar</Button>
          </Link>

          <SubmitButton />
        </div>
      </form>
    )
}