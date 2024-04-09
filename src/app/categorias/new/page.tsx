import NavBar from "@/components/NavBar";
import { Button, Input } from "@nextui-org/react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function FormCategorias() {

  async function create(formData: FormData){
    "use server"
    const data = {
      nome: formData.get("nome"),
      icone: "book"
    }

    const options = {
      method: "post",
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    }

    fetch("http:localhost:8080/categoria", options)

    redirect("/categorias")
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias"/>

      <form action={create} className="flex flex-col bg-slate-900 p-6 m-6 min-w-[500px] rounded">
        <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>
        <Input
              key="nome"
              label="Nome"
              name="nome"
              labelPlacement="outside"
        />

        <div className="flex justify-around mt-4">
          <Link href="/categorias">
            <Button variant="bordered" startContent={<ArrowLeft size={18} />}>cancelar</Button>
          </Link>

          <Button type="submit" color="primary" startContent={<Check size={18} />}>salvar</Button>
        </div>
      </form>
    </main>
  );
}
