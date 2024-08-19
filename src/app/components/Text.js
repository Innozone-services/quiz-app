import { Text as RNText, StyleSheet } from 'react-native';

const Text = ({variant, style, ...props }) => {

    return <RNText style={[variant == 'light' ? styles.light : variant == 'bold' ? styles.bold : variant == 'medium' ? styles.medium : variant == 'regular' ? styles.regular : styles.default, style]} {...props} />;
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'Source-Sans',
    },
    regular : {
        fontFamily: 'Source-Sans-Regular',
    },
    light : {
        fontFamily: 'Source-Sans-Light',

    },
    medium : {
        fontFamily: 'Source-Sans-Medium',

    },
    bold : {
        fontFamily: 'Source-Sans-Bold',

    },
});

export default Text