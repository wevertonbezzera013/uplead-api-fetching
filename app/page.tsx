import Credits from './components/pages/Credits'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Credits />
      </main>
    </div>
  )
}

export default Home
