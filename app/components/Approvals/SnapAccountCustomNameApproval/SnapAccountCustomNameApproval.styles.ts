///: BEGIN:ONLY_INCLUDE_IF(keyring-snaps)
import { StyleSheet } from 'react-native';
import { Theme } from '../../../util/theme/models';
import Device from '../../../util/device';

/**
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;
  const { colors } = theme;
  return StyleSheet.create({
    root: {
      backgroundColor: colors.background.default,
      paddingTop: 24,
      paddingHorizontal: 16,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      minHeight: 200,
      paddingBottom: Device.isIphoneX() ? 20 : 0,
    },
    actionContainer: {
      flex: 0,
      paddingVertical: 16,
      justifyContent: 'center',
    },
    inputTitle: {
      textAlign: 'left',
    },
    input: {
      borderWidth: 1,
      borderColor: colors.border.default,
      borderRadius: 4,
      padding: 10,
      marginVertical: 10,
      color: colors.text.default,
    },
  });
};

export default styleSheet;
///: END:ONLY_INCLUDE_IF
