import {
  AppBar,
  Box,
  Button,
  Hidden,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    cursor: "pointer",
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: 35,
    width: 700,
  },
  iconButton: {
    display: "flex",
  },
  input: {
    flex: 1,
  },
}));
export default function Topbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img src="logo-youtube.png" alt="logo" className={classes.logo} />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                flex="1"
                placeholder="Pesquisar"
                inputProps={{
                  "aria-label": "search google maps",
                }}
              />
              <IconButton type="submit" className={classes.iconButton}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box display="flex">
          <IconButton className={classes.icon}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icon}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icon}>
            <MoreVert />
          </IconButton>
          <Button
            color="secondary"
            variant="outlined"
            component="a"
            startIcon={<AccountCircle />}
          >
            FAZER LOGIN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
