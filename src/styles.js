import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    marginRight: '20px'
  },
  buttons: {
    marginTop: '40px'
  },
  cardGrid: {
    padding: '20px 0px'
  },
  card: {
    height: '100%',
    dispaly: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: '1'
  }
}));

export default useStyles;