import TableComponent from '@/Components/TableComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Apex DMIT React Technical Test
        </h1>
        <div className="flex flex-col items-center mt-8">
          <TableComponent />
        </div>
      </div>
    </main>
  )
}
