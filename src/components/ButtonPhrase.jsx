import PropTypes from 'prop-types'


export const ButtonPhrase = ({ onClick }) => {
    return (
        <button
            onClick={ onClick }
            className="phrase__button"
        >
            Probar mi suerte
        </button>
    )
}

ButtonPhrase.propTypes = {
    onClick: PropTypes.func,
}