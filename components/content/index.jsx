import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Content.module.css'

class Content extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const { id, children, className } = this.props

    return (
      <div id={id} className={`${styles.mainContent} ${className || ''}`}>
        {children}
      </div>
    )
  }
}

export default Content
