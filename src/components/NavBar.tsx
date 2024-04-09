import Link from "next/link";

interface NavBarProps {
  active: "dashboard" | "movimentacoes" | "categorias"
}

export default function NavBar({active}: NavBarProps) {
  const classActive = "border-b-4 pb-4 border-pink-600"

  return (
    <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-4">
      <h1 className="text-4xl font-bold">Budget Buddy</h1>
      <ul className="flex gap-6">
        <li className={active == "dashboard"? classActive : ""}>
          <Link href="/">dashboard</Link>
        </li>
        <li className={active == "movimentacoes"? classActive : ""}>
          <Link href="/movimentacoes">movimentações</Link>
        </li>
        <li className={active == "categorias"? classActive : ""}>
          <Link href="/categorias">categorias</Link>
        </li>
      </ul>
      <div className="w-14 rounded-full overflow-hidden">
        <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
      </div>
    </nav>
  )
}