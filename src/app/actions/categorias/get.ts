"use server"

export async function getCategorias() {
    const resp = await fetch("http://localhost:8080/categoria", { next: { revalidate: 0 } })
    return await resp.json()
}