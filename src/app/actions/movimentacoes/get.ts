'use server'

export async function get() {
    await new Promise(r => setTimeout(r, 1000))
    const resp = await fetch("http:localhost:8080/movimentacao", { next: { revalidate: 0 } })
    return await resp.json()
}