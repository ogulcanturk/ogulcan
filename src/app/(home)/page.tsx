// Components
import ExampleClientComponent from "@/components/organisms/exampleClientComponent"
import ExampleServerComponent from "@/components/organisms/exampleServerComponent"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="">Home</span>
      <ExampleClientComponent />
      <ExampleServerComponent />
    </main>
  )
}
