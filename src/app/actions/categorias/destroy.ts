"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){
    await new Promise(r => setTimeout(r, 4000))

    const resp = await fetch("http://localhost:8080/categoria/" + id , { method: "delete"})

    if (resp.ok){
        redirect("/categorias")    
    }

    if (!resp.ok){
        throw new Error("erro ao apagar categoria")
    }
}