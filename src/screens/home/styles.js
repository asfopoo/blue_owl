let styles = {
  header: {
    position: 'fixed',
    top: 0,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  mainContainer: {
    display: 'inline-flex',
    overflow: 'hidden',
    height: '100vh'
  },
  cardsContainer: {
    flex: 1,
    width: '100%',
    height: '100vh',
    marginTop: '3%',
    overflow: 'scroll',
  },
  cardsList: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '0.5%',
    paddingRight: '0.5%',
    paddingBottom: '10%'
  },
  instructionsContainer: {
    width: 275,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    backgroundColor: '#ffffff',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    overflow: 'scroll',
    height: '100vh',
    flexDirection: 'column',
  },
};

export default styles;
