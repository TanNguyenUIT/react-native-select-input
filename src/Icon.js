import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, Platform, StyleSheet } from 'react-native';

import scale from './scale';
import { PRIMARY_BLUE } from './colors'

const ARROW_ICON_TYPES = {
  UP: 'UP',
  DOWN: 'DOWN',
};

class Icon extends PureComponent {
  static propTypes = {
    ...Image.propTypes,
    type: PropTypes.oneOf(Object.values(ARROW_ICON_TYPES)).isRequired,
    disabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    renderArrowIcon: PropTypes.func,
  };

  static defaultProps = {
    style: null,
    renderArrowIcon: null,
  };

  getIconPath = () => (
    this.props.type === ARROW_ICON_TYPES.UP ?
      require('./icons/arrowUp.png') :
      require('./icons/arrowDown.png')
  );

  render() {
    const {
      renderArrowIcon,
      type,
      disabled,
      loading,
      style,
      ...props
    } = this.props;

    return renderArrowIcon ?
      renderArrowIcon({ type, disabled, loading }) :
      (
        <Image
          {...props}
          source={this.getIconPath()}
          style={[styles.image, style]}
        />
      );
  }
}

const styles = StyleSheet.create({
  image: {
    width: scale(20),
    height: scale(20),
    alignSelf: 'center',
    tintColor: PRIMARY_BLUE
  },
});

export { ARROW_ICON_TYPES };
export default Icon;
