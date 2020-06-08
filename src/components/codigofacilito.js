import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./posts"
import Course from "./course"


export default () => {
    const data = useStaticQuery(graphql` {
        codigoFacilitoJson {
            data {
                courses {
                    title
                    url
                    progress
                }
            }
        }    
    }`) 
    //className="shadow-xl text-center bg-white mr-4 rounded flex-shrink-0" style={{width:"300px"}}
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto ">

                    <Posts 
                        data={data.codigoFacilitoJson.data.courses} 
                        card={Course}
                        title="Cursos online realizados en CódigoFacilito"/>
                </div>
            </div>
        </section>
    )
}