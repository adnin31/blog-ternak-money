import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Container.module.css'

class Container extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const { id, children, className } = this.props

    return (
      <div id={id} className={`${styles.container} ${className || ''}`}>
        {children}
      </div>
    )
  }
}

export default Container
