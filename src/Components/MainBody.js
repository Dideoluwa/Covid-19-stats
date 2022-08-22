import React, { useState, useEffect } from 'react'
import styles from './MainBody.module.css'
import axios from 'axios'

function MainBody() {
    let [results, setResults] = useState([])

    useEffect(() => {
        let url = `https://covidnigeria.herokuapp.com/api`
        axios.get(url).then((res) => {
            let data = res.data.data
            setResults(data)
        })
    }, [])

    return (
        <div className={styles.mainBody}>
            <div className={styles.header}>
                <h1>Nigeria COVID-19 STATS</h1>
            </div>
            <div className={styles.case}>
                <h1>Total Confimed Cases: {results.totalConfirmedCases}</h1>
                <h1>Total total active cases: {results.totalActiveCases} </h1>
            </div>
            <div className={styles.body}>
                <ul className={styles.list}>
                    {results.states?.map((feeds) => (
                        <div className={styles.card} key={feeds._id}>
                            <h1 className={styles.title}>State: {feeds.state}</h1>
                            <h3 className={styles.content}>Confirmed Cases: {feeds.confirmedCases}</h3>
                            <h3 className={styles.content}>Cases on Admission: {feeds.casesOnAdmission}</h3>
                            <h3 className={styles.time}>Discharged: {feeds.discharged}</h3>
                            <p className={styles.time}>Death: {feeds.death}</p>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MainBody