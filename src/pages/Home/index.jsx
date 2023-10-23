import style from './index.module.css'

import { CardCard } from '../../components/CardCar'

export function Home() {
  return (
    <div className={style.container}>
      <CardCard/>
    </div>
  )
}
