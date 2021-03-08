let styles = {
  header: {
    flex: 1,
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
  cardsList: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '0.5%',
    paddingRight: '0.5%',
  },
  instructionsContainer: {
    width: 275,
    float: 'right',
    textAlign: 'center',
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    height: '85%',
    position: 'sticky',
    zIndex: 1,
    backgroundColor: '#ffffff',
    paddingLeft: '5%',
    paddingRight: '5%',
    overflow: 'auto',
    flexDirection: 'column',
  },
};

export default styles;
