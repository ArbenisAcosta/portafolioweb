import React from "react"
import Header from '../components/header'
import Repos from '../components/repos'
import Codigofacilito from "../components/codigofacilito"
import Medium from "../components/medium"
import EdNav from "../components/education-nav"

/* export default function Home() {
  return <div>Hello world!</div>
} */

export default () => <div>
  <Header />
  <EdNav />
  <Repos />
  <Codigofacilito />
  <Medium />
</div>
