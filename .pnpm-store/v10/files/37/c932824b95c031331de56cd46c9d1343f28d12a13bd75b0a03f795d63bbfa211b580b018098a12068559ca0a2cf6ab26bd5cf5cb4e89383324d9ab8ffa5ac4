import PropTypes from 'prop-types'
import withContentRect from './with-content-rect'

const Measure = withContentRect()(
  ({ measure, measureRef, contentRect, children }) =>
    children({ measure, measureRef, contentRect })
)

Measure.displayName = 'Measure'
Measure.propTypes.children = PropTypes.func

export default Measure
