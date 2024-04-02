import Link from "next/link";

export default function NavBar(){
    return (
        <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-4">
        <h1 className="text-4xl font-bold">Budget Buddy</h1>
        <ul className="flex gap-6">
          <li><Link href="/">dashboard</Link></li>
          <li><Link href="/movimentacoes">movimentações</Link></li>
          <li><Link href="/categorias">categorias</Link></li>
        </ul>
        <div className="w-14 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
        </div>
      </nav>
    )
}