import Link from "next/link"

export const FooterCredit = () => {
  return (
    <div className='mt-5 flex flex-col text-center w-full justify-center bg-sky-950 py-4 px-2'>
      <p>© 2024. Empresa XYZ - Todos os direitos reservados</p>
      <p>
        Desenvolvido por: <Link href='https://edilan-portfolio-rho-neon.vercel.app/'>Edilan Ribeiro</Link>
      </p>
    </div>
  )
}
