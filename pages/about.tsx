import Layout from '../components/Layout'
import Header from '../components/Header'
import { Children } from 'react'

export default function AboutPage({evt}) {
  return (
    
      <div>
        <Header></Header>
       
        <p>About Us</p>
        <p>{evt.name}</p>
        </div>
    
    
  )
}

export async function getServerSideProps(){
  const res = await fetch(`http://localhost:3000/api/hello`)
  const evt = await res.json()
  console.log(evt)

  return{
    props:{evt},
  }

}
