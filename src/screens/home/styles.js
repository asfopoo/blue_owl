let styles = {
  header: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    width: '100%'
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    width: '100%'
  },
  cardsContainer: {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifySelf: 'center',
  },
  instructionsContainer: {
    width: 350,
    position: 'fixed',
    right: 0,
    justifyContent: 'center',
    alignContent: 'center',
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    height: '100%',
    zIndex: 1,
    backgroundColor: '#ffffff'
  }
};

export default styles;
