"use server"

export async function getById(id: number){
    const resp = await fetch("http://localhost:8080/categoria/" + id)

    if (resp.ok){
        return await resp.json()
    }

    if (!resp.ok){
        throw new Error("categoria não encontrada")
    }
}