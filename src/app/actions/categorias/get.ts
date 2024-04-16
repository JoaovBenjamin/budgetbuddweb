"use server"

export async function getCategorias() {

    await new Promise(r => setTimeout(r, 6000))

    const resp = await fetch("http://localhost:8080/categoria", { next: { revalidate: 0 } })
    return await resp.json()
}