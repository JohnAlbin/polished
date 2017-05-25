// @flow
import { deprecatedCheck } from '../internalHelpers/_messageHandlers'

/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-all')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-all')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-all',
 *   wordWrap: 'break-all',
 *   wordBreak: 'break-all',
 * }
 */

function wordWrap(wrap: string = 'break-word') {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production') {
    const modulePath = 'mixins/wordWrap.js'
    deprecatedCheck(modulePath)
  }

  const wordBreak = wrap === 'break-word' ? 'break-all' : wrap
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak,
  }
}

export default wordWrap
