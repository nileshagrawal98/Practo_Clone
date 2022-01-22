
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
// import {useParams} from "react-router-dom"
import "./Acss.css"


export const Body = () => {
    // const {userid} = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5001/body")
            .then(d => d.json())
            .then((res) => {
                // console.log('res:', res)
                setData(res)

            })
    }, [])


    return <div>

        <h2>Body and Bath</h2>

        <div className="medicine">

            {data.map((e) =>

                <div className="mainMedicine">
                    <Link className="know_more" to={`/body/${e.id}`}>
                        <img className="M_img" src={e.image} alt="text" />
                    </Link>
                    <hr></hr>
                    <p className="m_Name">{e.title}</p>
                    <p className="m_price">₹{e.price}&nbsp;&nbsp;<span className="m_price1">₹{e.price1}</span>&nbsp;&nbsp;<span className="m_discount">{e.discount}</span></p>
                    <div className="m_unitbtn">
                        <p>{e.unitcount}</p>
                        <button className="addtocart">ADD</button>
                    </div>

                </div>
            )}
        </div>
    </div>


}