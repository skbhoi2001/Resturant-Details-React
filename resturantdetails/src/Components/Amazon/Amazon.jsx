import styles from './Amazon.module.css'
function Amazon({date,headOne,headTwo,useWhere,style}){
    return(
        <>
        <div className={styles.WidthElement}>
        <div>
            <div className={styles.DispDat}>
                <p>{date}</p>
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className={styles.DispCont}>
            <p>Case Study</p>
            <h1>{headOne}</h1>
            <h2>{headTwo}</h2>
            </div>
            <div className={styles.DispEnd}>
                <p>{useWhere}</p>
                <p>-></p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Amazon