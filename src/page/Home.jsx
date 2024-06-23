import Header from "../components/Header"
import Content from "../components/Content"

const Home = () => {
  return (
    <div className=" min-w-[80vw] max-w-[1200px]  flex flex-col items-center">
        <Header />
        <Content />
    </div>
  )
}

export default Home



