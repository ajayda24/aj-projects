import styles from './styles.module.css'

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles['lds-ring']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Index
