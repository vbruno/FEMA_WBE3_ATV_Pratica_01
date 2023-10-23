import style from './index.module.css'
import { PiStarFill, PiPhoneCallFill, PiShieldPlusFill } from 'react-icons/pi'

import imgCar from '../../assets/imgCar.png'

export function CardCard() {
  return (
    <div className={style.container}>
      <div />
      <div>
        <h1>Encontre <span>Boris</span> no local de partida</h1>
        <h2>Chega em 3 minutos (800 metros)</h2>
      </div>
      <div>
        <div>
          <div>
            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Imagem do Motorista" />
            <span>
              <PiStarFill />
              5.0
            </span>
            <p>Boris</p>
          </div>
          <img src={imgCar} alt="Imagem do veiculo utilizado" />
        </div>
        <div>
          <p>BCD0D19</p>
          <p>Honda Civic Roxo</p>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Enviar mensagem para Boris" />
        <PiPhoneCallFill />
        <PiShieldPlusFill />
      </div>
    </div>
  )
}
