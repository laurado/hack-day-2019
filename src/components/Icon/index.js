import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBacon,
  faIceCream,
  faCheese,
  faCookie,
  faHotdog,
  faPizzaSlice,
  faPepperHot,
  faGrinSquint,
  faCoffee,
  faBug,
} from '@fortawesome/free-solid-svg-icons'
import './style.scss'

library.add(
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  faBacon,
  faIceCream,
  faCheese,
  faCookie,
  faHotdog,
  faPizzaSlice,
  faPepperHot,
  faGrinSquint,
  faCoffee,
  faBug
)

const Icon = ({ prefix = 'fab', name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={[prefix, name]} />
  </div>
)

export default Icon
